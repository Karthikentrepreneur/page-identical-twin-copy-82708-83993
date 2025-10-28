// src/components/Layout.tsx
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* offset for fixed navbar height */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
