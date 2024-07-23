import React from "react";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="leftHeader">
        <p className="leftHeaderTitle" onClick={() => navigate("/")}>
          Eirini Sg FILMS
        </p>
      </div>
      <div className="rightHeader">
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
