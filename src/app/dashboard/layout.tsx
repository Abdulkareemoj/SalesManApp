import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="">
        <MainNav className="mx-6 mt-3" />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
