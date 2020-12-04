import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="mb-16 navbar">
      <Link to="/" className="navbar--brand">
        {" "}
        treebo
      </Link>
    </nav>
  );
}
