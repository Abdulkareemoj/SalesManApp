import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /signin (sign-in page)
     * - /forgot-password (forgot password page)
     * Feel free to modify this pattern to include more paths.
     */
    "/dashboard",
    "/((?!_next/static|_next/image|favicon.ico|signin|forgot-password|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
