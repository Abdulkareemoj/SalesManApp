import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="">
        <Navbar className="mx-6 mt-3" />
        {children} <Toaster />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
