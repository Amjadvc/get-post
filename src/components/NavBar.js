import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="links">
          <Link className="home-link" to="/">
            Logo
          </Link>
        </div>
        <div className="links">
          <Link className="home-link" to="/">
            Home
          </Link>
        </div>
      </nav>
    </div>
  );
}
