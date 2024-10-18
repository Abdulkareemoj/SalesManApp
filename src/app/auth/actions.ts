"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function loginWithPassword(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error("Password login failed", error);
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/dashboard");
}

export async function loginWithGoogle() {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/callback",
    },
  });

  if (error) {
    console.error("Google login failed", error);
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/dashboard");
}

export async function loginWithGithub() {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/callback",
    },
  });

  if (error) {
    console.error("GitHub login failed", error);
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error("Signup failed", error);
    redirect("/error");
  }

  revalidatePath("/");
  redirect("/dashboard");
}

export async function forgotPassword(email: string) {
  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error("Password reset failed", error);
    redirect("/error");
  } else {
    console.log("Password reset email sent successfully");
  }
}

export async function changePassword(newPassword: string) {
  const supabase = createClient();

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    console.error("Password change failed", error);
    throw new Error("Password change failed");
  } else {
    console.log("Password changed successfully");
  }
}
