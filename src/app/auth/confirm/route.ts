import { type EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  console.log("token_hash:", token_hash);
  console.log("type:", type);
  console.log("next:", next);

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (error) {
      console.error("OTP verification error:", error);
    }

    if (!error) {
      const redirectTo = new URL(next, request.url);
      console.log("Redirecting to:", redirectTo);
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  const redirectTo = new URL("/error", request.url);
  console.log("Redirecting to error page:", redirectTo);
  return NextResponse.redirect(redirectTo);
}
