import React from "react";

import hamburger from "../../images/hamburger.png";

import { SideBar } from "./sidebar/sidebar";

import "./Header.css";
export const Header: React.FC = ({}) => {
  const [IsOpen, SetIsOpen] = React.useState<boolean>(false);
  return (
    <header>
      {IsOpen && <SideBar SetIsOpen={SetIsOpen}></SideBar>}
      <button>
        <img
          onClick={() => {
            SetIsOpen(true);
          }}
          src={hamburger}
          loading="lazy"
          className="header_gamburger"
          alt="menu"
        ></img>
      </button>
      <h1 className="header_title">BESIDER</h1>
    </header>
  );
};
