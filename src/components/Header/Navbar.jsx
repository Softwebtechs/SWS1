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
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col font-sans">
        <div className="sm:flex justify-between  md:px-56  p-4 mt-3 bg-blue-950 text-sm text-gray-400 flex flex-col gap-3 md:flex-row">
          <div className="flex md:flex-row gap-5 items-center justify-center ">
            <p>
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
            <p>
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
          <div className="flex gap-5 md:flex-row flex-col items-center justify-center ">
            <p>
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
            <p className="text-gray-500 hidden ">|</p>
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
            <div className="flex sm:flex-row flex-col gap-3 md:justify-between sm:px-48 items-center p-5 ">
              <div>
                <Link to="/" className="flex items-center">
                  <img src={pIcon} className="mr-3 h-12" alt="Logo" />
                  <h1 className="text-2xl text-blue-950 cursor-pointer font-bold">
                    PATRAI
                  </h1>
                </Link>
              </div>

              <div className="">
                <ul className="sm:flex sm:flex-col hidden mt-4 text-sm font-normal lg:flex-row lg:space-x-6 lg:mt-0">
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
                    >
                      SERVICES
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
                    >
                      PROJECTS
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
                    >
                      PAGES
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
                <div className=" sm:hidden flex gap-6 ">
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
        <div className='md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 items-center flex flex-col gap-6 justify-center'>
             <h1 className='text-white font-semibold md:text-6xl text-5xl'>Career</h1>
            <div className='text-white md:flex-row flex-col'>
              <div className="flex flex-row gap-5 ">
                <h1 className='text-lg text-gray-300'>HOME</h1>
                <p>|</p>
                <h1 className='text-lg text-gray-300'> CAREER</h1>
              </div>
            </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;
