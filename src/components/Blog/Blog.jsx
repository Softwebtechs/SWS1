import React from "react";

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
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 27, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              Puzzle Knowledge
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 hover:text-blue-900 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 20, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              Electric Power Station
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 hover:text-blue-900 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 18, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              Changing Engine Gear
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex flex-col gap-20 items-center justify-center mt-20">
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 hover:text-blue-900 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 18, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              Team Of Worker
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 hover:text-blue-900 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 18, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              Discussing At Machine
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="h-72 w-72 bg-gray-400">
            <div className="pt-64 flex items-center justify-center">
              <div className="h-16 w-64 bg-white">
                <div className="flex items-center justify-center ">
                  <div className="h-10 w-36 bg-orange-600 hover:text-blue-900 flex items-center justify-center">
                    <h1 className="text-sm text-white">FEBRUARY 18, 2019</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-lg font-semibold text-blue-900 hover:text-orange-600">
              CNC Drilling Machine
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tincidunt nunc lorem, nec faucibus...
            </p>
            <h1 className="text-orange-600 hover:text-blue-900">
              Read More &gt;{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
