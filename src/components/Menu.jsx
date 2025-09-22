import React from "react";
import { NavLink,Link } from "react-router";
import { BrowserRouter as Router } from "react-router";
import { Route, Routes } from "react-router";
import ItemMenu from "./ItemMenu.jsx";
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

const menuItems = [
  { name: "All Employee", icon: faUsers, path: "/AllEmployee" },
  { name: "All Department", icon: faUserGroup, path: "/AllDepartment" },
  { name: "Attendance", icon: faCalendarCheck, path: "/Attendance" },
  { name: "Payroll", icon: faSackDollar, path: "/Payroll" },
  { name: "Jobs", icon: faBriefcase, path: "/Jobs" },
  { name: "Candidates", icon: faUserGroup, path: "/Candidates" },
  { name: "Leaves", icon: faRectangleList, path: "/leaves" },
  { name: "Holidays", icon: faClipboardList, path: "/Holidays" },
  { name: "Setting", icon: faGear, path: "/Setting" },
];
const Menu = (props) => {

  return (
    <div className="px-7 py-2.5 w-1/5 h-[500px] bg-gray-100 text-xl flex flex-col rounded-2xl">
      <div className="text-[30px] font-bold mt-[20px] mb-[20px] flex items-center">
        <img className="w-[40px] h-[40px] mr-[10px]" src="/Logo.png" alt="" />
         HRMS
        </div>
      <div >
        {menuItems.map((item) => {
          if (item.name === props.content) {
            return <ItemMenu name={item.name} icon={item.icon} path={item.path} className="bg-[#e3e3e3] rounded-[10px] text-[#7152F3] font-bold" />
          }
          return <ItemMenu name={item.name} icon={item.icon} path={item.path} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
