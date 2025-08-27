import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
