import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import HoverMenu from "./HoverMenu";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-64 bg-white pt-0 lg:ml-10 ml-5 lg:mt-20 ">
          <div className="lg:flex flex-col lg:mt-0  lg:pt-0   gap-5 ml-1 lg:mb-10 ">
            <h1 className="text-blue-900  text-2xl md:text-5xl font-bold m-5 xl:px-28 ">
              Subscribe <span className="text-orange-500 ">For Newsletter</span>
            </h1>
            <div className="lg:flex flex-col lg:flex-row items-center justify-center  m-5 xl:px-36 ">
              <p className="w-full mb-5 sm:mb-0">
                Sign up to get latest updates and news
              </p>
              <div className="flex md:flex-row max-w-screen-md gap-5 mb flex-col">
                <input
                  className="border w-96 h-10 p-3 text-gray-400"
                  type="text"
                  value="Enter your mail address"
                />
                <button className="bg-blue-950 h-10 w-28 text-white">
                  Signup
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[500px] w-96 lg:w-80   bg-gray-300 sm:ml-44 lg:ml-0 ml-5   drop-shadow-md flex flex-col gap-5">
            <div className="bg-orange-500 w-full h-10 p-2 text-white font-normal flex flex-row text-sm justify-center items-center gap-10">
              Follow us :{" "}
              <div className="flex flex-row gap-4">
                <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
              </div>
            </div>
            <div className="pl-14 flex flex-col gap-10">
              <h1 className="text-blue-950 text-2xl font-bold">PATRAI</h1>
              <div className="w-64">
                <p className="text-gray-700 text-base font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" text-blue-950 font-semibold flex flex-col gap-10">
                <p>
                  Manufactory, 2nd Cross Street, <br />
                  Newyork, USA 10205.
                </p>
                <p className="flex gap-2 items-center ">
                  <PhoneIcon style={{ color: "rgb(252, 102, 3)" }} />
                  <div>
                    +00-123-456-7890 <br /> +00-123-456-7891
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
        </div>

        <div className="bg-black text-white sm:pr-56 lg:h-[500px] h-auto flex justify-end md:p-0 lg:pt-0 pt-[450px]">
          <div className="sm:flex md:flex-row md:mt-96 lg:mt-0 flex flex-col sm:gap-10 gap-10 pt-6 pr-20 ml-24  lg:ml-10   ">
            <div className="flex flex-col gap-3 mt-10 lg:mt-0">
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

            <div className="flex flex-col gap-4 md:mt-10 lg:mt-0">
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

            <div className="flex flex-col gap-4 mb-10 md:mt-10 lg:mt-0">
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
      <HoverMenu />
    </>
  );
};

export default Footer;
