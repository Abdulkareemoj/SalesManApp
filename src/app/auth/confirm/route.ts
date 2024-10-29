import { type EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";
  const code = searchParams.get("code");

  console.log("token_hash:", token_hash);
  console.log("type:", type);
  console.log("next:", next);
  console.log("code:", code);

  const supabase = createClient();
  if (token_hash && type) {
    const { error, data } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) {
      console.error("OTP verification error:", error);
      const redirectTo = new URL("/error", request.url);
      return NextResponse.redirect(redirectTo);
    }

    console.log("OTP verification data:", data);

    if (data.session) {
      console.log("Session established:", data.session);
      const redirectTo = new URL(next, request.url);
      console.log("Redirecting to:", redirectTo);
      // Pass the session token as a query parameter
      redirectTo.searchParams.set("access_token", data.session.access_token);
      redirectTo.searchParams.set("refresh_token", data.session.refresh_token);
      return NextResponse.redirect(redirectTo);
    } else {
      console.log("No session found in OTP verification data.");
    }
  } else if (code) {
    // Handle OAuth callback
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("OAuth callback error:", error);
      return NextResponse.redirect("/auth/signin");
    }

    if (data.session) {
      console.log("OAuth session established:", data.session);
      const redirectTo = new URL("/dashboard", request.url);
      console.log("Redirecting to:", redirectTo);
      // Pass the session token as a query parameter
      redirectTo.searchParams.set("access_token", data.session.access_token);
      redirectTo.searchParams.set("refresh_token", data.session.refresh_token);
      return NextResponse.redirect(redirectTo);
    } else {
      console.log("No session found in OAuth callback data.");
    }
  }


  // return the user to an error page with some instructions
  const redirectTo = new URL(`${origin}/error`, request.url);
  console.log("Redirecting to error page:", redirectTo);
  return NextResponse.redirect(redirectTo);
}
