"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { type NextRequest, NextResponse } from "next/server";

export async function loginWithPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.error("Login failed", error);
    return { error: error.message };
  }

  revalidatePath("/");
  redirect("/dashboard");
}
export async function loginWithGoogle() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error("Google login failed", error);
    return { error: error.message };
  }

  if (data?.url) {
    return { url: data.url };
  }

  return { error: null };
}

export async function loginWithGithub() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error("GitHub login failed", error);
    return { error: error.message };
  }

  if (data?.url) {
    return { url: data.url };
  }

  return { error: null };
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("Signup failed", error);
    return { error: error.message };
  }

  revalidatePath("/");
  redirect("/dashboard");
}

export async function forgotPassword(email: string) {
  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password`,
  });

  if (error) {
    console.error("Password reset failed", error);
    return { error: error.message };
  }

  console.log("Password reset email sent successfully");
  return { error: null };
}

export async function changePassword(
  newPassword: string,
  access_token: string,
  refresh_token: string
) {
  const supabase = createClient();
  supabase.auth.setSession({ access_token, refresh_token });
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    console.error("Password change failed", error);
    return { error: error.message };
  }

  console.log("Password changed successfully");
  return { error: null };
}

export async function logout(req: NextRequest) {
  const supabase = createClient();

  // Check if a user's logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  revalidatePath("/");
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
