import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) => `
  rounded-xl px-4 py-2 bg-red text-sm font-medium transition ${
    isActive ? "bg-black text-white" : "bg-gray-100"
  }
  `;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between max-w-6xl px-4 py-4">
        <div>
          <h1>React</h1>
          <p>React Route</p>
        </div>

        {/* FIX: replaced Navbar with nav (prevents infinite recursion) */}
        <nav className="flex gap-2">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/about" className={linkClass}>
            About
          </Link>
          <Link to="/contact" className={linkClass}>
            Contact
          </Link>
          <Link to="/Courses" className={linkClass}>
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
