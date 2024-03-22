import React from "react";

const Content3 = () => {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div className="sm:flex sm:flex-row flex flex-col justify-center gap-3 text-blue-900 sm:divide-x-[3px] ml-20 mr-20 sm:px-56">
          <div className="sm:text-start text-center flex flex-col sm:gap-0 gap-3 sm:mt-4">
            <h1 className="font-semibold sm:text-3xl text-5xl ">
              Supplementary{" "}
            </h1>
            <h1 className="text-orange-500 font-semibold sm:text-3xl text-5xl">
              Services
            </h1>
          </div>
          <div className="h-auto sm:text-start text-center">
            <p className="p-5 text-xl font-normal sm:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              quam perferendis quasi accusantium necessitatibus nesciunt dolorum
              dolore optio rerum distinctio.
            </p>
          </div>
        </div>

        <div className="sm:flex sm:flex-row flex flex-col gap-10 justify-center items-center mt-10 mb-5">
          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center items-center h-10 w-72 bg-blue-900 text-white">
              <h1>Electronic Materials</h1>
            </div>
          </div>

          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center items-center h-10 w-72 bg-blue-900 text-white">
              <h1>Electronic Materials</h1>
            </div>
          </div>

          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center  items-center h-10 w-72 bg-blue-900 text-white">
              <h1>Power System</h1>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:flex-row flex flex-col gap-10 justify-center items-center mb-20">
          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center items-center h-10 w-72 bg-blue-900 text-white">
              <h1>Auto Parts</h1>
            </div>
          </div>

          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center items-center h-10 w-72 bg-blue-900 text-white">
              <h1>Heavy Machinery</h1>
            </div>
          </div>

          <div className="h-72 w-72 bg-gray-300 flex items-end">
            <div className=" flex justify-center items-center h-10 w-72 bg-blue-900 text-white">
              <h1>oil and Mineral oil</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
