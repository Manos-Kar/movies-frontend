import React from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="header">
      <div className="leftHeader">
        <p className="leftHeaderTitle">MANOS KARYSTINOS FILMS</p>
      </div>
      <div className="rightHeader">
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
