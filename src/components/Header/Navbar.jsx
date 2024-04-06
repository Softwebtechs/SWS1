import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import pIcon from "../../assets/icons/patrai_icon.png";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import ServiceContent from "./ServiceContent";
import ProjectContent from "./ProjectContent";
import PagesContent from "./PagesContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPages, setIsOpenPages] = useState(false);
  const [isOpenProject, setIsOpenProject] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseEnterPages = () => {
    setIsOpenPages(true);
  };
  const handleMouseEnterProject = () => {
    setIsOpenProject(true);
  };

  const handleMouseLeaveProject = () => {
    setIsOpenProject(false);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseLeavePages = () => {
    setIsOpenPages(false);
  };
  return (
    <>
      <div className="flex flex-col font-sans">
        <div className="sm:flex-col xl-flex-row md:p-9 lg:px-44  justify-between  md:px-44 lg:p-4  p-4 mt-3 bg-blue-950 text-sm text-gray-400 flex flex-col gap-3 md:flex-col lg:flex-col xl:flex-row">
          <div className="flex md:flex-row gap-5 items-center justify-center ">
            <p className="hover:text-white">
              <PhoneIcon
                style={{
                  height: "15px",
                  color: "gray",
                  marginBottom: " 5px",
                }}
                fontSize="small"
              />
              {"  "}
              1-800-123-45678
            </p>
            <p className="text-gray-500">|</p>
            <p className="hover:text-white">
              <EmailIcon
                style={{
                  color: "gray",
                  marginBottom: " 3px",
                  marginRight: "4px",
                }}
                fontSize="small"
              />{" "}
              support@domain.com
            </p>
          </div>
          <div className="flex gap-5 lg:flex-row flex-col items-center justify-center w-auto md:flex-row md:flex md:justify-between ">
            <p className="hover:text-white">
              {" "}
              <EmailIcon
                style={{
                  color: "gray",
                  marginBottom: " 4px",
                  marginRight: "4px",
                }}
                fontSize="small"
              />{" "}
              Working hours - Mon - Fri: 8:30 - 18:30{" "}
            </p>
            <p className="text-gray-500 hidden hover:text-white ">|</p>
            <div className="flex gap-2 items-center justify-center">
              <TwitterIcon
                style={{
                  height: "20px",
                  color: "gray",
                  marginBottom: " 4px",
                  marginRight: "4px",
                }}
              />
              <FacebookIcon
                style={{
                  height: "20px",
                  color: "gray",
                  marginBottom: " 4px",
                  marginRight: "4px",
                }}
              />
              <InstagramIcon
                style={{
                  height: "20px",
                  color: "gray",
                  marginBottom: " 4px",
                  marginRight: "4px",
                }}
              />
              <YouTubeIcon
                style={{
                  height: "20px",
                  color: "gray",
                  marginBottom: " 4px",
                  marginRight: "4px",
                }}
              />
            </div>
          </div>
        </div>

        <header className="shadow sticky z-50 ">
          <nav className=" bg-white border-gray-200  lg:px-6 py-2.5">
            <div className="flex lg:flex-row flex-col gap-3 md:justify-between sm:px-48 items-center p-5 ">
              <div>
                <Link to="/" className="flex items-center">
                  <img src={pIcon} className="mr-3 h-12" alt="Logo" />
                  <h1 className="text-2xl text-blue-950 cursor-pointer font-bold md:flex  ">
                    PATRAI
                  </h1>
                </Link>
              </div>

              <div className="">
                <ul className=" sm:flex-col hidden mt-4 text-sm font-normal lg:flex-row lg:space-x-6 lg:mt-0 xl:flex  lg:hidden">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      SERVICES
                      <div className="relative">
                        {isOpen && (
                          <div
                            className="absolute top-full left-0 "
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <ServiceContent />
                          </div>
                        )}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                      onMouseEnter={handleMouseEnterProject}
                      onMouseLeave={handleMouseLeaveProject}
                    >
                      PROJECTS
                      <div className="relative">
                        {isOpenProject && (
                          <div
                            className="absolute top-full left-0 "
                            onMouseEnter={handleMouseEnterProject}
                            onMouseLeave={handleMouseLeaveProject}
                          >
                            <ProjectContent />
                          </div>
                        )}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      BLOG
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pages"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                      onMouseEnter={handleMouseEnterPages}
                      onMouseLeave={handleMouseLeavePages}
                    >
                      PAGES
                      <div className="relative">
                        {isOpenPages && (
                          <div
                            className="absolute top-full left-0 "
                            onMouseEnter={handleMouseEnterPages}
                            onMouseLeave={handleMouseLeavePages}
                          >
                            <PagesContent />
                          </div>
                        )}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      CONTACT
                    </NavLink>
                  </li>
                  <div className="flex gap-3">
                    <SearchIcon style={{ color: "gray" }} />
                    <p className="text-gray-400">|</p>
                    <div className="flex flex-row">
                      <ShoppingCartIcon
                        style={{ opacity: ".5", color: "gray" }}
                      />
                    </div>
                  </div>
                </ul>
                <div className=" xl:hidden flex gap-6  ">
                  <div className="flex gap-2">
                    <MenuIcon />
                    <h1>Menu</h1>
                  </div>
                  <div className="flex gap-3">
                    <SearchIcon style={{ color: "gray" }} />
                    <p className="text-gray-400">|</p>
                    <div className="flex flex-row">
                      <ShoppingCartIcon
                        style={{ opacity: ".5", color: "gray" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
