import React from "react";
import BlogCard from "./BlogCard";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

const BlogPage1 = ({ pageNo, selectedPageNo }) => {
  if (pageNo != selectedPageNo) return null;
  return (
    <>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20 ">
        <BlogCard title={"Puzzle Knowledge"} img={img1} />
        <BlogCard title={"Electric Power Station"} img={img2} />
        <BlogCard title={"Changing Engine Gear"} img={img3} />
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20">
        <BlogCard title={"Team Of Worker"} img={img4} />
        <BlogCard title={"Team Of Worker"} img={img5} />
        <BlogCard title={"CNC Drilling Machine"} img={img6} />
      </div>
    </>
  );
};

export default BlogPage1;
