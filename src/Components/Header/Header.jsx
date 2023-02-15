import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="topnav container-fluid boxshadow row">
      <div className="col-md-6">
      <a href="#about" className="split">
        <img
          src="https://prismleadindia.in/wp-content/uploads/2022/12/unnamed-file.png"
          alt=""
          width={80}
        />
      </a>
      </div>
      <div className=" col-md-6 ">
        <a >
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About us</Link>
        </a>
        <a>
          <Link to="/contactus">Contact</Link>
        </a>
        <a>
          <Link to="/blog">Blog</Link>
        </a>
      </div>
    </div>
  );
}

export default Header;
