import React, { useState } from "react";
import Card from "./Card.jsx";
import img1 from "./img/img1.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";

const Portfolio = () => {
  const [isSelectedType, setIsSelectedType] = useState("all");
  const [selected, setSelected] = useState(isSelectedType);

  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-[16%] items-center flex flex-col gap-6 justify-center ">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-6xl">
          Portfolio
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-3 ">
            <h1 className="text-base text-gray-400">HOME</h1>
            <p className="text-base text-gray-400">|</p>
            <h1 className="text-base text-gray-400">PPRTFOLIO</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center">
        <div className="flex flex-row flex-wrap gap-10 text-xl font-semibold text-gray-700 py-7 mt-10 items-center justify-center">
          <button
            onClick={() => {
              setIsSelectedType("all");
            }}
            className={`${
              isSelectedType == "all" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            All
          </button>
          <button
            onClick={() => {
              setIsSelectedType("construction");
            }}
            className={`${
              isSelectedType == "construction" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            Construction
          </button>
          <button
            onClick={() => {
              setIsSelectedType("factory");
            }}
            className={`${
              isSelectedType == "factory" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            Factory
          </button>
          <button
            onClick={() => {
              setIsSelectedType("industry");
            }}
            className={`${
              isSelectedType == "industry" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            Industry
          </button>
          <button
            onClick={() => {
              setIsSelectedType("machinery");
            }}
            className={` ${
              isSelectedType == "machinery" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            Machinery
          </button>
          <button
            onClick={() => {
              setIsSelectedType("service");
            }}
            className={` ${
              isSelectedType == "service" ? "text-orange-600" : ""
            } hover:text-orange-600 `}
          >
            Service
          </button>
          <button
            onClick={() => {
              setIsSelectedType("storage");
            }}
            className={` ${
              isSelectedType == "storage" ? "text-orange-600" : ""
            } hover:text-orange-600`}
          >
            Storage
          </button>
        </div>
        <div className="border-b-2 w-10/12 "></div>
      </div>

      <div className="h-auto flex flex-wrap gap-10 items-center justify-center py-10 px-[5%]">
        <Card
          selectedType={"factory"}
          selected={isSelectedType}
          title={"The Oil Factory"}
          img={img1}
        />
        <Card
          selectedType={"machinery"}
          selected={isSelectedType}
          title={"Cloth Making"}
          img={img2}
        />
        <Card
          selectedType={"machinery"}
          selected={isSelectedType}
          title={"Cement Mixture"}
          img={img3}
        />
        <Card
          selectedType={"service"}
          selected={isSelectedType}
          title={"Cement Mixture"}
          img={img3}
        />
        <Card
          selectedType={"construction"}
          selected={isSelectedType}
          title={"Construction Material"}
          img={img4}
        />
        <Card
          selectedType={"factory"}
          selected={isSelectedType}
          title={"Grinding the Rod"}
          img={img5}
        />
        <Card
          selectedType={"factory"}
          selected={isSelectedType}
          title={"The Storage Tank"}
          img={img6}
        />
        <Card
          selectedType={"storage"}
          selected={isSelectedType}
          title={"The Storage Tank"}
          img={img6}
        />
        <Card
          selectedType={"construction"}
          selected={isSelectedType}
          title={"Under Ground Subway"}
          img={img7}
        />
        <Card
          selectedType={""}
          selected={isSelectedType}
          title={"Cyber Physical Systems"}
          img={img8}
        />
        <Card
          selectedType={"service"}
          selected={isSelectedType}
          title={"Cyber Physical Systems"}
          img={img8}
        />
        <Card
          selectedType={"machinery"}
          selected={isSelectedType}
          title={"Automated machine line"}
          img={img9}
        />
        <Card
          selectedType={"service"}
          selected={isSelectedType}
          title={"Automated machine line"}
          img={img9}
        />
        <Card
          selectedType={"industry"}
          selected={isSelectedType}
          title={"Industrial Storage Hall"}
          img={img10}
        />
        <Card
          selectedType={"storage"}
          selected={isSelectedType}
          title={"Industrial Storage Hall"}
          img={img10}
        />
        <Card
          selectedType={"machinery"}
          selected={isSelectedType}
          title={"Worker with Grinder"}
          img={img11}
        />
        <Card
          selectedType={""}
          selected={isSelectedType}
          title={"Worker with Grinder"}
          img={img12}
        />
        <Card
          selectedType={"machinery"}
          selected={isSelectedType}
          title={"The show machine"}
          img={img8}
        />

        {/* All */}

        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"The Oil Factory"}
          img={img1}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Cloth Making"}
          img={img2}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Cement Mixture"}
          img={img3}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Construction Material"}
          img={img4}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Grinding the Rod"}
          img={img5}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"The Storage Tank"}
          img={img6}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Under Ground Subway"}
          img={img7}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Cyber Physical Systems"}
          img={img8}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Automated machine line"}
          img={img9}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Industrial Storage Hall"}
          img={img10}
        />

        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"Worker with Grinder"}
          img={img12}
        />
        <Card
          selectedType={"all"}
          selected={isSelectedType}
          title={"The show machine"}
          img={img8}
        />
      </div>
      {/* second part */}
      <div className=" mt-36 flex flex-col items-start justify-center w-full px-[10%]">
        <div className="flex flex-col gap-3 md:max-xl:mr-80">
          <h1 className="text-black font-bold text-lg">Leave a Comment</h1>
          <h1 className="text-gray-700 text-base">
            Your email address will not be published.
          </h1>
          <h1 className="text-gray-700 text-base">
            Required fields are marked *
          </h1>
        </div>
        <div className="flex flex-col mt-5 py-3">
          <h1 className="text-black text-lg"> Comment* </h1>
          <div className="h-36 xl:w-[1200px] md:max-xl:w-[700px] w-96 border-2">
            <input type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col ">
            <h1 className="text-black text-lg py-3"> Name* </h1>
            <div className="h-12 xl:w-[1200px] md:max-xl:w-[700px] w-96 border-2">
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-black text-lg py-3"> Email* </h1>
            <div className="h-12 xl:w-[1200px] md:max-xl:w-[700px] w-96 border-2">
              <input type="text" />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-black text-lg py-3"> Website* </h1>
            <div className="h-12 xl:w-[1200px] md:max-xl:w-[700px] w-96 border-2">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className=" h-14 w-44 text-white text-lg text-center bg-orange-600 hover:bg-blue-950 duration-300 ">
            Post Comment
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
