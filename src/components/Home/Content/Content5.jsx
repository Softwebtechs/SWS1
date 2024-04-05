import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const Content5 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-20 pt-10">
        <h1 className="md:text-5xl text-4xl font-bold text-blue-900">
          Our Expert in
        </h1>
        <h1 className="md:text-5xl text-4xl font-bold text-orange-500">
          Different Solutions
        </h1>

        <div className=" xl:flex xl:flex-row flex-col m-5">
          <div className="flex flex-col md:flex md:flex-row">
            <div className="xl:h-[450px] xl:w-64 lg:max-xl:h-[600px] lg:max-xl:w-96 h-[600px] md:max-lg:h-[500px] md:max-lg:w-80 w-96 bg-gray-400 flex items-end m-7">
              <div className="bg-white p-6 gap-5 h-auto w-full flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]">
                <h1 className="text-purple-800 font-semibold ">Jason Smith</h1>
                <p className="text-orange-500">Founder / Ceo</p>
                <div className="flex flex-row gap-4 text-gray-400">
                  <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                  <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                  <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                  <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
                </div>
              </div>
            </div>

            <div className="xl:h-[450px] xl:w-64 lg:max-xl:h-[600px] lg:max-xl:w-96 h-[600px] md:max-lg:h-[500px] md:max-lg:w-80 w-96 bg-gray-400 flex items-end m-7">
              <div className="bg-white p-6 gap-5 h-auto w-full flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]">
                <h1 className="text-purple-800 font-semibold ">Linda Johns</h1>
                <p className="text-orange-500">Money Management</p>
                <div className="flex flex-row gap-4 text-gray-400">
                  <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                  <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                  <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                  <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex md:flex-row">
            <div className="xl:h-[450px] xl:w-64 lg:max-xl:h-[600px] lg:max-xl:w-96 h-[600px] md:max-lg:h-[500px] md:max-lg:w-80 w-96 bg-gray-400 flex items-end m-7">
              <div className="bg-white p-6 gap-5 h-auto w-full flex flex-col justify-center items-center  shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]">
                <h1 className="text-purple-800 font-semibold ">
                  Bill Goldberg
                </h1>
                <p className="text-orange-500">Production Head</p>
                <div className="flex flex-row gap-4 text-gray-400">
                  <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                  <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                  <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                  <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
                </div>
              </div>
            </div>

            <div className=" xl:h-[450px] xl:w-64 lg:max-xl:h-[600px] lg:max-xl:w-96 h-[600px] md:max-lg:h-[500px] md:max-lg:w-80 w-96 bg-gray-400 flex items-end m-7">
              <div className="bg-white p-6 gap-5 h-auto w-full flex flex-col justify-center items-center  shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]">
                <h1 className="text-purple-800 font-semibold ">Mark Hendry</h1>
                <p className="text-orange-500">Quality Inchange</p>
                <div className="flex flex-row gap-4 text-gray-400">
                  <TwitterIcon style={{ height: "15px", widows: "15px" }} />
                  <FacebookIcon style={{ height: "15px", widows: "15px" }} />
                  <InstagramIcon style={{ height: "15px", widows: "15px" }} />
                  <LinkedInIcon style={{ height: "15px", widows: "15px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content5;
