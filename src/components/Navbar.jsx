import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col font-sans">
        <div className="sm:flex justify-between hidden px-56 ml-5 p-2 mt-3 bg-blue-950 text-sm text-white ">
          <div className="flex flex-row gap-5">
            <p>
              <PhoneIcon style={{ color: "green" }} fontSize="small" />{" "}
              1-800-123-45678
            </p>
            |
            <p>
              <EmailIcon fontSize="small" /> support@domain.com
            </p>
          </div>
          <div>
            <p>Working hours - Mon - Fri: 8:30 - 18:30 | </p>
          </div>
        </div>

        <div className="flex justify-between items-center md:px-64 md:p-4 p-1 px-6">
          <h1 className="text-base cursor-pointer font-bold">PATRAI</h1>

          <ul className="md:flex hidden gap-4 p-2 text-xs">
            <li className="mx-[5px] cursor-pointer">HOME</li>
            <li className="mx-[5px] cursor-pointer">ABOUT</li>
            <li className="mx-[5px] cursor-pointer">SERVICES</li>
            <li className="mx-[5px] cursor-pointer">PROJECTS</li>
            <li className="mx-[5px] cursor-pointer">BLOG</li>
            <li className="mx-[5px] cursor-pointer">PAGES</li>
            <li className="mx-[5px] cursor-pointer">CONTACT</li>
          </ul>
          <div className="md:hidden mb-2">
            <a className="text-4xl " href="#">
              &#8801;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
