import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import { FaCogs, FaFire, FaMicrochip } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import HistoryCard from "./HistoryCard";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import vimg1 from "./img/vimg1.jpg";
import vimg2 from "./img/vimg2.jpg";
import vimg3 from "./img/vimg3.jpg";
import vimg4 from "./img/vimg4.jpg";
import HistoryCard2 from "./HistoryCard2";
import vimg5 from "./img/vimg5.jpg";

const History = () => {
  const [year, setYear] = useState("2004");
  const [selectedYear, setSelectedYear] = useState(year);

  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:[10%] items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-6xl">
          History
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <NavLink to="/">
              <h1 className="text-sm text-gray-400">HOME</h1>
            </NavLink>
            <p className="text-sm text-gray-400">|</p>
            <h1 className="text-sm text-gray-400"> HISTORY</h1>
          </div>
        </div>
      </div>
      {/* hero part */}
      <div className=" h-auto w-full flex flex-col xl:flex xl:flex-row  ">
        <div className="h-[800px] lg:max-xl:w-full xl:w-1/2 flex  flex-col gap-7 justify-center items-center">
          <div className=" h-auto xl:w-[70%] lg:max-xl:w-full md:max-lg:w-[700px] w-[350px] flex flex-col justify-center items-center gap-2 pt-10">
            <h1 className="text-5xl text-blue-900 font-semibold">
              Get the Best{" "}
              <span className="text-orange-500 text-5xl font-semibold">
                Industry Service Ever
              </span>
            </h1>
          </div>
          <div className="h-auto xl:w-[70%] lg:max-xl:w-[70%]  md:max-lg:w-[700px] w-[350px] text-gray-500 text-sm leading-6 font-medium">
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dict um felis eu pede mollis pretium. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim.
          </div>
          <div className=" h-auto lg:max-xl:w-full  md:max-lg:w-[700px] w-full flex flex-col gap-7 justify-center items-center">
            <div className="  flex flex-row gap-7 ">
              <div className="h-16  md:max-xl:w-16  w-16 rounded-full border-4 border-blue-900 flex justify-center items-center ">
                <FaFire style={{ color: "#1e3a8a" }} size={30} />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl  font-medium">
                  At the Beginning
                </h1>
                <p className="text-gray-600 text-sm xl:w-96 lg:w-[80%] w-80 lg:max-xl:w-full">
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dict um felis eu pede mollis pretium.
                </p>
              </div>
            </div>
            <div className=" flex flex-row gap-7">
              <div className="h-16  md:max-xl:w-16  w-16 rounded-full border-4 border-blue-900 flex justify-center items-center">
                <FaCogs style={{ color: "#1e3a8a" }} size={30} />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl font-medium">
                  Early Formative Years
                </h1>
                <p className="text-gray-600 text-sm xl:w-96 lg:w-[80%] w-80 lg:max-xl:w-full">
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dict um felis eu pede mollis pretium.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-7">
              <div className="h-16  md:max-xl:w-16  w-16 rounded-full border-4 border-blue-900 flex justify-center items-center">
                <FaMicrochip style={{ color: "#1e3a8a" }} size={30} />
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl font-medium">
                  The Growth Trajectory
                </h1>
                <p className="text-gray-600 text-sm xl:w-96 lg:w-[80%] w-80 lg:max-xl:w-full">
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dict um felis eu pede mollis pretium.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[800px]  xl:w-1/2 w-full xl:flex hidden  flex justify-start items-center  ">
          <div className="">
            <div className="flex gap-3">
              <div className="relative flex flex-col">
                <div className="relative flex  h-80 w-64  group">
                  <img src={img1} alt="" />
                  <div className="h-80 w-64 absolute bg-gray-600 opacity-0 group-hover:opacity-40 " />
                </div>
                <div className="absolute h-60 w-[330px] bg-orange-600 top-[330px] -left-6 flex justify-center items-center z-30">
                  <h1 className=" w-44 text-5xl font-bold text-white leading-tight">
                    14 + Years <span className="text-blue-950">in Work</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <div className="realtive flex h-80 w-64 bg-red-300 n group">
                  <img src={img2} alt="" className="object-cover" />
                  <div className="h-80 w-64 absolute bg-gray-600 opacity-0 group-hover:opacity-40 z-10" />
                </div>
                <div className="h-44 w-52 ml-12 bg-red-300 relative group   flex ">
                  <img src={img3} alt="" />
                  <div className="h-44 w-52 absolute bg-gray-600 opacity-0 group-hover:opacity-40 z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[800px]  xl:w-1/2 w-full lg:flex xl:hidden  md:flex hidden flex justify-center items-center  ">
          <div className="">
            <div className="flex gap-3">
              <div className="relative flex flex-col">
                <div className="relative h-80 w-64 bg-gray-300 overflow-hidden">
                  <img src={img1} alt="" />
                </div>
                <div className="absolute h-60 w-[330px] bg-orange-600 top-[330px] -left-6 flex justify-center items-center">
                  <h1 className=" w-44 text-5xl font-bold text-white leading-tight">
                    14 + Years <span className="text-blue-950">in Work</span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <div className="h-80 w-64 bg-red-300 overflow-hidden">
                  <img src={img2} alt="" />
                </div>
                <div className="h-44 w-52 ml-12 bg-red-300 ">
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-auto pb-20 gap-5  md:hidden">
          <div className="h-[550px] w-[430px] bg-red-300 overflow-hidden">
            <img src={img1} alt="" />
          </div>
          <div className="h-[550px] w-[430px] bg-red-300 overflow-hidden">
            <img src={img2} alt="" />
          </div>
          <div className="h-36 w-[430px] bg-orange-600 overflow-hidden flex justify-center items-center">
            <h1 className="text-white text-2xl font-bold">
              14 + Years <span className="text-blue-950">in Work</span>
            </h1>
          </div>
          <div className="h-80 w-[430px]  overflow-hidden flex justify-center items-center">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 xl:flex xl:flex-row xl:gap-0">
        <div className="h-96 xl:w-1/2 w-full bg-blue-900 flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-orange-600 text-7xl font-bold"> 680+</h1>
          <p className="text-white font-bold text-lg">
            Projects Completed Successfully
          </p>

          <button className="h-14 w-48 bg-orange-600 text-white text-base hover:bg-white hover:text-gray-600 duration-500">
            {" "}
            Contact Us Now <SendIcon />
          </button>
        </div>
        <div className="h-96 xl:w-1/2 w-full bg-orange-500 bg-opacity-50 flex flex-col items-center justify-center gap-8">
          <h1 className="text-blue-900 text-7xl font-bold"> 123+</h1>
          <p className="text-white font-bold text-lg">
            National Awards & Certificate Winners
          </p>

          <button className="h-14 w-48 bg-blue-900 text-white text-base hover:bg-white hover:text-gray-600 duration-500">
            {" "}
            More About Us <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <div className=" flex flex-col h-auto w-full  gap-5 justify-center items-center">
        <div className=" flex mt-20 gap-2">
          <h1 className="text-blue-900 text-5xl font-bold">Step by Step</h1>
          <h1 className="text-orange-500 text-5xl font-bold">Success Story</h1>
        </div>
        <div className="mt-20 mb-10 w-[80%] flex flex-col justify-center items-center">
          <div className="flex w-full justify-around px-28 mb-1">
            <button
              onClick={() => {
                setYear("2004");
              }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1
                className={`${
                  year === "2004" ? "text-orange-500" : ""
                } font-bold text-2xl text-gray-400`}
              >
                2004
              </h1>
              <div className="h-2 w-2 bg-blue-950 border-2 border-orange-500 "></div>
            </button>
            <button
              onClick={() => {
                setYear("2008");
              }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1
                className={`${
                  year === "2008" ? "text-orange-500" : ""
                } font-bold text-2xl text-gray-400`}
              >
                2008
              </h1>
              <div className="h-2 w-2 bg-blue-950 border-2 border-orange-500 "></div>
            </button>
            <button
              onClick={() => {
                setYear("2012");
              }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1
                className={`${
                  year === "2012" ? "text-orange-500" : ""
                } font-bold text-2xl text-gray-400`}
              >
                2012
              </h1>
              <div className="h-2 w-2 bg-blue-950 border-2 border-orange-500 "></div>
            </button>
            <button
              onClick={() => {
                setYear("2016");
              }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1
                className={`${
                  year === "2016" ? "text-orange-500" : ""
                } font-bold text-2xl text-gray-400`}
              >
                2016
              </h1>
              <div className="h-2 w-2 bg-blue-950 border-2 border-orange-500 "></div>
            </button>
            <button
              onClick={() => {
                setYear("2018");
              }}
              className="flex flex-col justify-center items-center gap-2"
            >
              <h1
                className={`${
                  year === "2018" ? "text-orange-500" : ""
                } font-bold text-2xl text-gray-400`}
              >
                2018
              </h1>
              <div className="h-2 w-2 bg-blue-950 border-2 border-orange-500 "></div>
            </button>
          </div>
          <div className="border-b-2 boder-gray-500 w-[90%]" />
        </div>
        <div className="mb-20">
          <HistoryCard
            year={"2004"}
            selectedYear={year}
            title1={"Foundation for "}
            title2={"Multiple Services"}
            img={vimg1}
          />
          <HistoryCard
            year={"2012"}
            selectedYear={year}
            title1={"Oil Refining"}
            title2={" Machinery "}
            img={vimg3}
          />
          <HistoryCard
            year={"2018"}
            selectedYear={year}
            title1={"High Power "}
            title2={"Frames"}
            img={vimg5}
          />
          <HistoryCard2
            year={"2008"}
            selectedYear={year}
            title1={"Start Additional "}
            title2={"Projects"}
            img={vimg2}
          />
          <HistoryCard2
            year={"2016"}
            selectedYear={year}
            title1={"Introduced"}
            title2={" Programme Machine"}
            img={vimg4}
          />
        </div>
      </div>
    </>
  );
};

export default History;
