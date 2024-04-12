import React from "react";
import { Link, NavLink } from "react-router-dom";

const PagesContent = () => {
  return (
    <>
      <div className="w-52 h-12 bg-transparent" />
      <div className="h-auto w-52 bg-gray-100">
        <ul>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4 hover:bg-white hover:text-orange-500">
            <NavLink to="/history"> History </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/team"> Team </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/career"> Career </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/blog"> Blog </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/quote"> Quote </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/faq"> Faq </NavLink>
          </li>
          <li className="py-3 text-black/50 border-b border-gray-200   px-4  hover:bg-white hover:text-orange-500">
            <NavLink to="/shop"> Shop </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PagesContent;
