import React from "react";
import { NavLink } from "react-router-dom";

const PagesContent = () => {
  return (
    <>
      <div className="w-52 h-[45px] bg-transparent" />
      <div className="h-auto w-52 bg-gray-50 border-t-4 border-orange-500">
        <ul>
          <NavLink to="/history">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              History
            </li>
          </NavLink>
          <NavLink to="/team">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Team
            </li>
          </NavLink>
          <NavLink to="/career">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Career
            </li>
          </NavLink>
          <NavLink to="/blog">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Blog
            </li>
          </NavLink>
          <NavLink to="/quote">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Quote
            </li>
          </NavLink>
          <NavLink to="/faq">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Faq
            </li>
          </NavLink>
          <NavLink to="/shop">
            <li className="py-3 text-gray-500 text-sm hover:text-orange-500 border-b border-gray-200  px-4 hover:bg-white">
              Shop
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default PagesContent;
