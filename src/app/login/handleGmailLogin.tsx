"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
const handleGmailLogin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  setGmailLoading(true);
  try {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  } catch (error) {
    setErrorMsg(error.message);
  }
};

export default handleGmailLogin;
