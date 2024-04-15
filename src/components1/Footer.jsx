import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

import logo from "./logo.png";
const Footer = () => {
  return (
    <>
      <div className="relative flex flex-col h-10  bg-red-200 mt-20">
        <div className="absolute -top-10 left-10 w-96 xl:w-80 md:max-lg:w-[700px]  lg:max-xl:w-[900px] xl:pb-5 pb-10 bg-gray-300  drop-shadow flex flex-col gap-5 xl:mr-[800px]">
          <div className="bg-orange-500 w-full h-10 p-2 text-white font-normal flex flex-row text-sm justify-center items-center gap-5">
            Follow us :{" "}
            <div className="flex flex-row gap-4">
              <TwitterIcon style={{ height: "15px", widows: "15px" }} />
              <FacebookIcon style={{ height: "15px", widows: "15px" }} />
              <InstagramIcon style={{ height: "15px", widows: "15px" }} />
              <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
            </div>
          </div>
          <div className="pl-14 flex flex-col xl:flex xl:gap-5 gap-10">
            <img src={logo} className="h-10 w-36" alt="" />
            <div className="w-64 md:max-xl:w-full">
              <p className="text-gray-700 text-base font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className=" text-blue-950 font-semibold flex flex-col gap-10 xl:flex xl:gap-5">
              <div className="w-64 md:max-xl:w-full">
                <p>Manufactory, 2nd Cross Street, Newyork, USA 10205.</p>
              </div>
              <p className="flex gap-2 items-center ">
                <PhoneIcon style={{ color: "rgb(252, 102, 3)" }} />
                <div>
                  <span className="hover:text-orange-600 cursor-pointer">
                    +00-123-456-7890
                  </span>{" "}
                  <br />
                  <span className="hover:text-orange-600 cursor-pointer">
                    +00-123-456-7891
                  </span>
                </div>
              </p>
              <p className="flex gap-2 items-center">
                <EmailIcon style={{ color: "rgb(252, 102, 3)" }} />
                <div>
                  admin@domain.com <br /> support@domain.com
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white h-auto flex justify-center lg:pt-0 pt-20 xl:pl-[500px]">
          <div className="flex flex-col md:flex-row lg:max-xl:pt-28 xl:mt-0 mt-96 md:max-xl:mt-[330px] gap-10  pt-6 xl:pr-0 ">
            <div className="flex flex-col gap-3 xl:mt-0 ">
              <h1 className="text-2xl font-medium ">Best Services</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Material Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Agriculture proceessing
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Mechanical Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Chemical Research
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Material Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Agriculture Processing
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Mechanical Engineering
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Chemical Reseach{" "}
                </p>
                <p>
                  {" "}
                  <ArrowRightAltIcon />
                  Power & Energy
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-0">
              <h1 className="text-2xl font-medium  ">Quick Links</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <p>
                      <ArrowRightAltIcon /> Home
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Features
                    </p>
                    <p>
                      <ArrowRightAltIcon /> About us
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Services
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Projects
                    </p>
                    <p>
                      <ArrowRightAltIcon /> News
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Shop
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Career
                    </p>
                    <p>
                      <ArrowRightAltIcon /> Contact us
                    </p>
                  </div>
                  <ul className="flex flex-col list-none">
                    <li>
                      <ArrowRightAltIcon /> Faq
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Testimonials
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Cart
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Projects
                    </li>
                    <li>
                      <ArrowRightAltIcon /> News
                    </li>
                    <li>
                      <ArrowRightAltIcon /> Login
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-10 ">
              <h1 className="text-2xl font-medium ">Latest Tweets</h1>
              <div className="flex flex-col  text-gray-200 text-base font-normal gap-1">
                <div>
                  <div className="flex gap-4">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">Here's How Advanced</p>
                      <p>Manufacturing Is Trans</p>
                      <p>
                        forming{" "}
                        <span className="text-gray-400">in The Aug</span> 06,
                        2018
                      </p>
                    </div>
                  </div>

                  <div className=" border-gray-700 border-b-2 mt-4"></div>

                  <div className="flex gap-2 mt-2">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">
                        The Month in WordPress: Jul
                      </p>
                      <p>
                        <span className="text-gray-400">2018</span>{" "}
                        http://t.co/vMhzYHrle
                      </p>
                      <p>
                        {" "}
                        <span className="text-gray-400">about</span> 15 days ago
                      </p>
                    </div>
                  </div>

                  <div className=" border-gray-700 border-b-2 mt-4"></div>

                  <div className="flex gap-2 mt-2">
                    <TwitterIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-gray-400">
                        The Month in WordPress: Jul
                      </p>
                      <p>
                        <span className="text-gray-400">2018</span>{" "}
                        http://t.co/vMhzYHrle
                      </p>
                      <p>
                        {" "}
                        <span className="text-gray-400">about</span> 1 month ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white md:h-10 h-20 flex items-center justify-center ">
          <p className="text-sm font-bold">
            @2018. All Rights Reserved by designthemes
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
