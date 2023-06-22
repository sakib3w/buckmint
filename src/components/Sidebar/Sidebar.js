import React from "react";
import logo from "../../assets/logo1.png"
import { menus } from "../../utils/tools/menu";
import MenuAccordion from "./MenuAccordion";

const Sidebar = ({ sideBarShow,theme }) => {
  return (
    <div className="rf_sidebar">
      <div className="rf_logo_container">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <div className="rf_sidebar_menu">
        <ul className="rf_sidebar_menu_lists">
          <MenuAccordion
            d={menus}
            sideBarShow={sideBarShow}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
