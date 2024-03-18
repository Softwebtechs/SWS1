import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col font-sans">
        <div className="sm:flex justify-between hidden px-56 ml-5 p-2 mt-3 bg-blue-950 text-sm text-gray-400 ">
          <div className="flex flex-row gap-5">
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
          <div className="flex gap-5 ">
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
            <p className="text-gray-500 ">|</p>
            <div className="flex gap-2">
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

        <div className="flex justify-between items-center md:px-64 md:p-4 px-6">
          <h1 className="text-2xl text-blue-950 cursor-pointer font-bold">
            PATRAI
          </h1>

          <ul className="md:flex hidden gap-4 p-2 text-xs">
            <li className="mx-[5px] cursor-pointer">HOME</li>
            <li className="mx-[5px] cursor-pointer">ABOUT</li>
            <li className="mx-[5px] cursor-pointer">SERVICES</li>
            <li className="mx-[5px] cursor-pointer">PROJECTS</li>
            <li className="mx-[5px] cursor-pointer">BLOG</li>
            <li className="mx-[5px] cursor-pointer">PAGES</li>
            <li className="mx-[5px] cursor-pointer">CONTACT</li>
            <SearchIcon style={{ color: "gray" }} />
            <p className="text-gray-400">|</p>
            <div className="flex flex-row">
              <ShoppingCartIcon style={{ opacity: ".5", color: "gray" }} />
            </div>
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
