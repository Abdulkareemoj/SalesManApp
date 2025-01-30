/*eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/health`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: "Supabase is active" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to ping Supabase" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
