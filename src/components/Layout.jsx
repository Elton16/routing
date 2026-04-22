import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6x1 px-4 py-10 ">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
