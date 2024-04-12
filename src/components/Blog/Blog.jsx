import React, { useState } from "react";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
const Blog = () => {
  const [blogType, setBlogType] = useState("Blog1");
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
            <h1 className="text-lg text-gray-300">{blogType}</h1>
          </div>
        </div>
      </div>
      {/* main part */}
      <Blog1 blogType={"Blog1"} selectedBlogType={blogType} />
      <Blog2 blogType={"Blog2"} selectedBlogType={blogType} />

      {/* <PageComponent itemsPerPage={itemsPerPage} /> */}
      <div>
        <div className="flex flex-row gap-3 items-end justify-end pr-20">
          <button
            className="h-10 w-12 bg-blue-900 text-white"
            onClick={() => {
              setBlogType("Blog1");
            }}
          >
            prev
          </button>
          <button
            className="h-10 w-12 bg-blue-900 text-white"
            onClick={() => {
              setBlogType("Blog2");
            }}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
