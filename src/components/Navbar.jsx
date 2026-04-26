import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Journey from "../pages/Journey";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Journey", path: "/journey" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 sticky top-0 z-20 bg-[#0b1120]/50 backdrop-blur-lg">
        <div className=" flex flex-col">
          <h1 className=" text-2xl font-bold flex items-center"><span className="text-blue-300">Himesh</span> Roy <span className="ml-1 relative top-0 text-xl font-normal text-blue-500"><HiOutlineBadgeCheck/></span></h1>
          <p className=" font-semibold text-gray-500">Front-End Developer Fresher</p>
        </div>
        <div className=" flex justify-around">
          {links.map((each) => (
            <NavLink
              key={each.path}
              to={each.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive ? "text-blue-700 underline underline-offset-8" : "text-gray-400 hover:text-blue-900"
                }`
              }
            >
              <span className="text-xl transition-all">{each.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
