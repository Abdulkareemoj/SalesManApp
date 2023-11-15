//Email magic link
"use server";
import { cookies } from "next/headers";

const handleEmailLogin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  setMagicLoading(true);
  const { error } = await supabase.auth.signInWithOtp({ email });
  if (error) {
    alert(error.message);
  } else alert("check your email for the login link");
};

export default handleEmailLogin;
