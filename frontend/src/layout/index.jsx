import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="mb-auto max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
