import React, { useState } from "react";

const Component = ({ heading, paragraph }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className="h-auto  lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96 xl:w-[800px] bg-white border border-gray-300 p-5 cursor-pointer flex flex-col gap-3"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <h1
          className={`${
            isVisible ? "text-orange-600 " : "text-blue-900"
          }  font-semibold ml-5 `}
        >
          {heading}
        </h1>
        {isVisible && (
          <p className="w-80 xl:w-[750px] font-semibold text-gray-500 ml-5 ">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default Component;
