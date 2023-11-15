"use server";
import { cookies } from "next/headers";

const signIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  setIsLoginLoading(true);

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }
  setIsLoginLoading(false);
  return redirect("/");
};

export default signIn;
