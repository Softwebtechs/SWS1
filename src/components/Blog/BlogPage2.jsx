import React from "react";
import BlogCard from "./BlogCard";
import img1 from "./img/b21.jpg";
import img2 from "./img/b22.jpg";
import img3 from "./img/b23.jpg";
import img4 from "./img/b24.jpg";
import img5 from "./img/b25.jpg";
import img6 from "./img/b26.jpg";

const BlogPage2 = ({ pageNo, selectedPageNo }) => {
  if (pageNo != selectedPageNo) return null;
  return (
    <>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20 ">
        <BlogCard title={"Rounds In Site"} img={img1} />
        <BlogCard title={" Drilling The Rod"} img={img2} />
        <BlogCard title={" Testing A Quality"} img={img3} />
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20">
        <BlogCard title={"Grinding Machine"} img={img4} />
        <BlogCard title={"Building Infrastructure"} img={img5} />
        <BlogCard title={"Welding The Cylinder"} img={img6} />
      </div>
    </>
  );
};

export default BlogPage2;
