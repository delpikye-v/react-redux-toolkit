import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.jpg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">phimmoi.info</div>
        <div style={{ fontSize: 12 }}>update your css if need</div>
      </Link>

      <div className="user-image">
        <img src={user} height="100%" alt="user" />
      </div>
    </div>
  );
};

export default Header;
