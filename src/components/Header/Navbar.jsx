import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import Patrai from '../../image/patrai logo.png'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
     <>
      <div className="flex flex-col font-roboto">
        <div className="sm:flex sm:flex-row justify-between md:px-56   p-4  bg-blue-950 text-sm text-gray-400 flex-col gap-4 ">
          <div className="flex flex-row gap-5 justify-center sm:p-0 p-4">
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
          <div className="flex md:flex-row flex-col justify-center items-center ">
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
              Working hours - Mon - Fri: 8:30 - 18:30 | 
              {" "}
            </p>
            
            <div className="flex gap-2 sm:p-0 p-4">
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
              <svg class=" w-5 h-5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z" clip-rule="evenodd" />
            </svg>
            </div>
          </div>
        </div>
        </div>
      
      <div className="bg-white border-gray-200  lg:px-6 py-2.5">

        <div  className="flex sm:flex-row flex-col gap-5 md:justify-between sm:px-48 items-center sm:p-6 p-8 ">
          <div>
        <Link to="/" className="flex items-center">
        <img src={Patrai} alt="patrai"  className=" w-17 h-7   " />
        </Link>
        </div>
          <div  className=" ">
          <ul className="sm:flex sm:flex-col hidden mt-4 text-sm font-poppins lg:flex-row lg:space-x-6 lg:mt-0">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500  hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500 hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500  hover:underline lg:p-0`
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
                          isActive ? "text-orange-500 underline" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500  hover:underline lg:p-0`
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
      </div>
      <div className=" font-poppins  md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 items-center flex flex-col gap-6 justify-center">
      
          <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Services</h1>
          <div className='text-white md:flex-row flex-col'>
              <div className="flex flex-row gap-4 ">
            <span class=" text-s text-gray-500   tracking-wider">
                <Link to="/">Home </Link></span>
                <p class="text-gray-500">|</p>
            <span class=" text-s text-gray-500 tracking-wider  ">
                <Link to="services">Services</Link></span>
                </div>
          </div>
        </div>


    </>
  )
}

export default Navbar;