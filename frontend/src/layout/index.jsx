import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={3000}
      />
      <Navbar />
      <main className="mb-auto max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
