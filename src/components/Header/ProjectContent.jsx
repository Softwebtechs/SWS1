import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProjectContent = () => {
  return (
    <>
      <div className="w-52 h-[45px] bg-transparent" />
      <div className="h-auto w-52 bg-gray-50 border-t-4 border-orange-500">
        <ul>
          <li className="py-3 text-gray-500 border-b border-gray-200   px-4 hover:text-orange-500 hover:bg-gray-100">
            Project Details
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProjectContent;
