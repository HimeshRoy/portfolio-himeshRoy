import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Journey", path: "/journey" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0b1120]/50 backdrop-blur-lg border-b border-white/10">
        
        <div className="flex justify-between items-center px-5 py-4">
          
          {/* LOGO */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold flex items-center">
              <span className="text-blue-300">Himesh</span> Roy

              <span className="ml-1 text-lg text-blue-500">
                <HiOutlineBadgeCheck />
              </span>
            </h1>

            <p className="text-xs md:text-sm font-semibold text-gray-500">
              Front-End Developer Fresher
            </p>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((each) => (
              <NavLink
                key={each.path}
                to={each.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "text-blue-500 underline underline-offset-8"
                      : "text-gray-400 hover:text-blue-400"
                  }`
                }
              >
                <span className="text-lg">{each.name}</span>
              </NavLink>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-white"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-80 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            {links.map((each) => (
              <NavLink
                key={each.path}
                to={each.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg transition ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-400 hover:text-blue-400"
                  }`
                }
              >
                {each.name}
              </NavLink>
            ))}
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;