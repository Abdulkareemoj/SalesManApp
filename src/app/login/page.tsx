import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LoginClient from "./LoginClient";
import { headers, cookies } from "next/headers";

export default function LoginServer({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // email password
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    } else if (data?.user) {
      // Redirect to the Dashboard route
      return redirect("/dashboard");
    }
  };

  // magiclink
  const handleEmailLogin = async (formData: FormData) => {
    "use server";

    try {
      const email = formData.get("email") as string;
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        throw new Error(error.message);
      } else {
        alert("check your email for the login link");
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  // oauth
  const handleGmailLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    "use server";

    try {
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      const {
        data: { url },
        error,
      } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        return redirect("/login?message=Could not authenticate user");
      } else {
        return redirect("/dashboard");
      }
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };

  return (
    <LoginClient
      signIn={signIn}
      handleEmailLogin={handleEmailLogin}
      handleGmailLogin={handleGmailLogin}
    />
  );
}
