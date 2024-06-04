import React from "react";

import closeImg from "../../../images/Vector.png";

import "./sidebar.css";
const NavLinks = [
  "SCIENCE",
  "GENERAL",
  "ENTERTAINMENT",
  "TECHNOLOGY",
  "BUSINESS",
  "HEALTH",
  "SPORTS",
];
interface SideBarProps {
  SetIsOpen: (arg: boolean) => void;
}
export const SideBar: React.FC<SideBarProps> = ({ SetIsOpen }) => {
  return (
    <div className="sidebar">
      <div className="close_box">
        <button onClick={() => SetIsOpen(false)}>
          <img src={closeImg} alt="close" className="close"></img>
        </button>
      </div>
      <div className="NavBox">
        <ul>
          {NavLinks.map((item: string) => {
            return <li className="NavItem">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
