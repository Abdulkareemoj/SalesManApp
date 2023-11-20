import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LoginClient } from "./LoginClient";
import { headers, cookies } from "next/headers";
export default function LoginServer({
  searchParams,
  setErrorMsg,
}: {
  searchParams: { message: string };
  setErrorMsg: (msg: string) => void;
}) {
  // email password
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
  };

  // magiclink
  const handleEmailLogin = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setErrorMsg(error.message);
    } else alert("check your email for the login link");
  };

  // oauth
  const handleGmailLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    try {
      const {
        data: { url },
        error,
      } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) {
        setErrorMsg(error.message ?? "An unknown error occurred");
      }
    } catch (error) {
      setErrorMsg("An error occurred during sign in");
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
