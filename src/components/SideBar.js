import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
      <ul className="list-parint">
        <li className="list-chiled">
          <Link to={"/products"} className="buttonStyle">
            Get All Posts
          </Link>
        </li>
        <li>
          <Link to={"/addProducts"} className="buttonStyle">
            Add Post
          </Link>
        </li>
      </ul>
    </div>
  );
}
