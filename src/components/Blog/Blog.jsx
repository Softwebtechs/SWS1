import React, { useState } from "react";

import BlogPage1 from "./BlogPage1";
import BlogPage2 from "./BlogPage2";
import BlogPage3 from "./BlogPage3";

const Blog = () => {
  const [pageNo, setPageNo] = useState("1");
  const [selectedPageNo, setSelectedPageNo] = useState(pageNo);

  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-[14%] items-center flex flex-col gap-6 justify-center ">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-6xl">
          Blog
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-base text-gray-500">HOME</h1>
            <p className="text-base text-gray-500">|</p>
            <h1 className="text-base text-gray-500">Blog</h1>
          </div>
        </div>
      </div>
      {/* main part */}
      <BlogPage1 pageNo={"1"} selectedPageNo={pageNo} />
      <BlogPage2 pageNo={"2"} selectedPageNo={pageNo} />
      <BlogPage3 pageNo={"3"} selectedPageNo={pageNo} />

      {/* <PageComponent itemsPerPage={itemsPerPage} /> */}
      <div className="mt-20">
        <div className="flex flex-row gap-2 items-end justify-end pr-28">
          <button
            onClick={() => {
              setPageNo("1");
            }}
            className={` ${
              pageNo == "1" ? "bg-blue-950 text-white" : ""
            } h-9 w-9 hover:bg-blue-950  border border-blue-950 text-sm text-blue-950 font-bold hover:text-white`}
          >
            1
          </button>
          <button
            onClick={() => {
              setPageNo("2");
            }}
            className={` ${
              pageNo == "2" ? "bg-blue-950 text-white" : ""
            } h-9 w-9 hover:bg-blue-950  border border-blue-950 text-sm text-blue-950 font-bold hover:text-white `}
          >
            2
          </button>
          <button
            onClick={() => {
              setPageNo("3");
            }}
            className={` ${
              pageNo == "3" ? "bg-blue-950 text-white" : ""
            } h-9 w-9 hover:bg-blue-950 border border-blue-950 text-sm text-blue-950 font-bold hover:text-white `}
          >
            3
          </button>
          <button
            onClick={() => {
              setPageNo("4");
            }}
            className={` ${
              pageNo == "4" ? "bg-blue-950 text-white" : ""
            } h-9 w-9 hover:bg-blue-950 border border-blue-950 text-blue-950 text-sm font-bold hover:text-white `}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
