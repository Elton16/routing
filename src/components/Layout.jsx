import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
