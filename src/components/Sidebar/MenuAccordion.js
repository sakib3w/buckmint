import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import CustomLink from "../Link";
import { useBreakpoints } from "react-device-breakpoints";

const MenuAccordion = ({ d, sideBarShow, logout, userRole }) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };
  const device = useBreakpoints();
  return (
    <>
      {d?.map((d, i) => (
        <li
          key={d.id}
          className={`rf_sidebar_menu_list ${
            d.dropdown ? "submenu" : ""
          }`}
          id={d.id}
        >
          <CustomLink
            href={d.route}
            onClick={() => {
              toggle(d.id);
              if (!d.dropdown) {
                sideBarShow(true);
              }
            }}
            className="rf_nav_link"
          >
            <div className="icon_text">
              <span>{d.icon}</span>
              <p>{d.menu}</p>
            </div>
            {d.dropdown && (
              <span>
                <RiArrowDropRightLine />
              </span>
            )}
          </CustomLink>
          {collapse === d.id ? (
            <ul>
              {d?.dropdown?.map((drop) => {
                  return (
                    <li key={drop.id}>
                      <CustomLink
                        href={drop.route}
                        className="rf_nav_link dropdown"
                        onClick={() => {
                          sideBarShow(true);
                          device.isTablet && setCollapse(false);
                          // setCollapse(false);
                        }}
                      >
                        {drop.menu}
                      </CustomLink>
                    </li>
                  );
                })}
            </ul>
          ) : null}
        </li>
      ))}
    </>
  );
};

export default MenuAccordion;
