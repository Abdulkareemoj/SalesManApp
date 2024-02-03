import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SuperTokensProvider } from "../components/supertokensProvider";
import { Toaster } from "@/components/ui/toaster";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Sales Management App",
  description: "Built with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <SuperTokensProvider>
          <main>{children}</main> <Toaster />
        </SuperTokensProvider>
      </body>
    </html>
  );
}
