import React from "react";
import CustomLink from "../Link";
import { FiLogOut } from "react-icons/fi";
// import { AiOutlineWallet } from "react-icons/ai";
import avatar from "../../assets/avatar.png";
const AvatarDropdownMenu = ({ setOpenMenu, logout, data }) => {
  return (
    <>
      <ul className="submenu">
        <div className="header">
          <div className="img">
            <img src={data?.avatar ? data?.avatar : avatar} alt="img" />
          </div>
          <div className="name">
            <h4>Admin</h4>
            <p>A-0001</p>
          </div>
        </div>
        <li className="submenu_list" onClick={() => setOpenMenu(false)}>
          <CustomLink href="#" onClick={logout} className="submenu_link">
            <FiLogOut />
            &nbsp; Logout
          </CustomLink>
        </li>
      </ul>
    </>
  );
};

export default AvatarDropdownMenu;
