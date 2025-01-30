import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome.",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="">
        <Navbar className="mx-6 mt-3" />
        {children} <Toaster />
        <Footer />
      </main>
    </>
  );
}
