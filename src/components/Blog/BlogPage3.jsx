import React from "react";
import BlogCard from "./BlogCard";
import img1 from "./img/b31.jpg";
import img2 from "./img/b32.jpg";
import img3 from "./img/b33.jpg";
import img4 from "./img/b34.jpg";

const BlogPage3 = ({ pageNo, selectedPageNo }) => {
  if (pageNo != selectedPageNo) return null;
  return (
    <>
      <div className="lg:flex lg:flex-row flex flex-wrap flex-col gap-20 items-center justify-center mt-20 ">
        <BlogCard title={"The Container Machine"} img={img1} />
        <BlogCard title={"Programming Industry"} img={img2} />
        <BlogCard title={"Tinkering The Rim"} img={img3} />
        <BlogCard title={"Bridge Workers"} img={img4} />
      </div>
      ]
    </>
  );
};

export default BlogPage3;
