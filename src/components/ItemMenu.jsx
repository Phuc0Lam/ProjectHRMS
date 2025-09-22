import React from "react";
import { NavLink, Link } from "react-router";
import { BrowserRouter as Router } from "react-router";
import { Route, Routes } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBriefcase,
  faCalendarCheck,
  faClipboardList,
  faRectangleList,
  faSackDollar,
  faUserGroup,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const ItemMenu = (props) => {
  return (
      <NavLink
        className={`flex items-center text-base leading-6 gap-5
         cursor-pointer no-underline  
         hover:bg-[#e3e3e3] hover:rounded-[10px] hover:text-[#7152F3] hover:font-bold  ${props.className}`}
         
        to={props.path}
      >
        <div className="w-[200px] px-[20px] py-[10px] text-base leading-6 no-underline gap-[20px] cursor-pointer flex items-center">
          <FontAwesomeIcon icon={props.icon} /> {props.name}
        </div>
      </NavLink>
  );
};

export default ItemMenu;
