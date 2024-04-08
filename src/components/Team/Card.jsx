import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Card = ({ name, position, img }) => {
  return (
    <>
      <div className="xl:h-[430px]  flex-col  xl:w-64 lg:max-xl:h-[600px] lg:max-xl:w-96 h-[600px] md:max-lg:h-[500px] md:max-lg:w-80 w-96 bg-gray-400 flex items-end m-7 group">
        <div className="relative">
          <img src={img} alt="" className="realtive" />
          <div className="xl:h-72 h-[425px] lg:max-xl:h-[427px] xl:w-64 w-96 lg:max-xl:w-96 bg-blue-950 absolute top-0 opacity-0  group-hover:opacity-45 transition-all duration-500" />
        </div>
        <div className="bg-white p-6 gap-5 lg:max-xl:gap-10 h-auto w-full flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px] group-hover:bg-orange-600 transition-all duration-500">
          <h1 className="text-purple-800 font-semibold group-hover:text-white ">
            {name}
          </h1>
          <p className="text-orange-500 group-hover:text-blue-900">
            {position}
          </p>
          <div className="flex flex-row gap-4 text-gray-400">
            <TwitterIcon style={{ height: "15px", widows: "15px" }} />
            <FacebookIcon style={{ height: "15px", widows: "15px" }} />
            <InstagramIcon style={{ height: "15px", widows: "15px" }} />
            <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
