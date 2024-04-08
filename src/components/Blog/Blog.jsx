import React, { useState } from "react";
import BlogCard from "./BlogCard";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

const Blog = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-28 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-6xl text-6xl">
          Blog
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-lg text-gray-300">HOME</h1>
            <p>|</p>
            <h1 className="text-lg text-gray-300">Blog</h1>
          </div>
        </div>
      </div>
      {/* main part */}
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20">
        <BlogCard title={"Puzzle Knowledge"} img={img1} />
        <BlogCard title={"Electric Power Station"} img={img2} />
        <BlogCard title={"Changing Engine Gear"} img={img3} />
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20">
        <BlogCard title={"Team Of Worker"} img={img4} />
        <BlogCard title={"Team Of Worker"} img={img5} />
        <BlogCard title={"CNC Drilling Machine"} img={img6} />
      </div>

      {/* <PageComponent itemsPerPage={itemsPerPage} /> */}
      <div>
        <div className="flex flex-row gap-3 items-end justify-end pr-20">
          <button className="h-10 w-12 bg-blue-900 text-white ">prev</button>
          <button className="h-10 w-12 bg-blue-900 text-white ">next</button>
        </div>
      </div>
    </>
  );
};

export default Blog;
