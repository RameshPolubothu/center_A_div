import { React, useState } from "react";
import { navLinks } from "../data/constants";
import { hamburger, logo1, logo2 } from "../assets/images";
import { Link } from "react-router-dom";

const navbar = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
  };

  return (
    <>
      <header className="px-8 sm:px-16 py-3 fixed z-30 w-full bg-[#89288f]">
        <nav className="flex justify-between items-center max-container">
          <Link
            to={"/"}
            className="flex"
            onClick={() => handleNavLinkClick("home")}
          >
            <img
              src={logo1}
              alt="college logo"
              height={20}
              width={40}
              className="rounded-sm inline-block bg-slate-50"
            />
            <img
              src={logo2}
              alt="college name"
              height={40}
              width={200}
              className="inline-block ms-1"
            />
          </Link>

          <ul className=" flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`font-montserrat leading-normal text-lg pb-1 text-slate-50 hover:border-b-[3px] border-orange-500 ${
                    activeNavLink === item.id
                      ? "border-b-[3px] border-orange-500"
                      : ""
                  }`}
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className=" flex gap-4 justify-end max-md:hidden">
            <Link
              className="bg-white text-[#89288f] border-[3px] border-[#89288f] rounded-lg px-4 py-2 hover:border-orange-500"
              to={"/login"}
            >
              Sign In
            </Link>
            <Link
              className="text-white border-2 border-newpurple hover:border-2 hover:border-white hover:rounded-lg px-4 py-2"
              to={"/dashboard"}
            >
              Register
            </Link>
          </div>

          <div className="hidden max-lg:flex border-2 border-newpurple hover:rounded-md hover:border-orange-500 hover:border-2 px-2 py-2">
            <img src={hamburger} alt="Hamburger Logo" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default navbar;
