import React from "react";
import SendIcon from "@material-ui/icons/Send";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const History = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-28 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-6xl text-6xl">
          History
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-lg text-gray-300">HOME</h1>
            <p>|</p>
            <h1 className="text-lg text-gray-300"> HISTORY</h1>
          </div>
        </div>
      </div>
      {/* hero part */}
      <div className=" lg:w-full flex flex-col xl:flex xl:flex-row lg:px-20  gap-28">
        <div className=" lg:max-xl:w-full xl:w-1/2 flex items-center justify-center flex-col gap-10">
          <div className=" h-auto lg:max-xl:w-full md:max-lg:w-[700px] w-[350px] flex flex-col gap-2  mt-20">
            <h1 className="text-4xl text-blue-900 font-bold">
              Get the Best{" "}
              <span className="text-orange-500 text-4xl font-bold">
                Industry Service Ever
              </span>
            </h1>
          </div>
          <div className="h-auto lg:max-xl:w-full  md:max-lg:w-[700px] w-[350px] text-gray-700 text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            dignissimos. Expedita, officiis? Minus temporibus maiores fuga earum
            cum dicta non nostrum quo, iusto hic harum itaque nesciunt. Laborum,
            qui impedit!
          </div>
          <div className=" h-auto lg:max-xl:w-full  md:max-lg:w-[700px] w-[350px] flex flex-col gap-10">
            <div className="  flex flex-row gap-10 ">
              <div className="h-16  md:max-xl:w-16  w-32 rounded-full bg-gray-500"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl  font-medium">
                  At the Beginning
                </h1>
                <p className="text-gray-700 lg:max-xl:w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officiis?
                </p>
              </div>
            </div>
            <div className=" flex flex-row gap-10">
              <div className="h-16 md:max-xl:w-16  w-32 rounded-full bg-gray-500"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl font-medium">
                  Early Formative Years
                </h1>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officiis?
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <div className="h-16 md:max-xl:w-16  w-32 rounded-full bg-gray-500"></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-blue-900 text-2xl font-medium">
                  The Growth Trajectory
                </h1>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, officiis?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto  2xl:flex md:hidden w-full flex flex-col items-center justify-center gap-5 p-10">
          <div className="h-[500px] w-96 bg-gray-300 "></div>
          <div className="flex flex-col gap-5 ">
            <div className=" flex flex-col  h-[500px] w-96 bg-pink-500">
              <div className="h-36 w-[600px] hidden bg-orange-700"></div>
            </div>
            <div className="h-56 w-96   bg-orange-700"></div>
            <div className="h-[500px] w-96  bg-blue-600"></div>
          </div>
        </div>

        <div className="h-auto  lg:max-xl:w-full lg:w-1/2 w-full   xl:flex xl:items-center xl:justify-center flex md:flex hidden items-center justify-center mt-20 gap-4">
          <div className="h-[370px]  xl:h-[350px] xl:w-[800px] lg:max-xl:h-[500px] lg:max-xl:w-[400px] w-[320px] bg-gray-300 lg:max-xl:mb-[480px] mb-[400px]"></div>
          <div className="flex flex-col gap-3">
            <div className="relative lg:max-xl:h-[500px] lg:max-xl:w-[400px] h-96 w-72 bg-pink-500">
              <div className="h-56 w-96 lg:max-xl:h-[300px] xl:h-[250] xl:w-[400] lg:max-xl:w-[500px] bg-orange-700  lg:max-xl:mt-[435px] mt-[350px] absolute lg:max-xl:-left-[450px] -left-[350px] "></div>
            </div>
            <div className="h-64 w-72 xl:h-[350px] xl:w-[350px]   lg:max-xl:h-[300px] lg:max-xl:w-[360px] lg:max-xl:ml-16 ml-10 bg-blue-600"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 xl:flex xl:flex-row xl:gap-0">
        <div className="h-96 xl:w-1/2 w-full bg-blue-900 flex flex-col items-center justify-center gap-8 ">
          <h1 className="text-orange-600 text-7xl font-bold"> 680+</h1>
          <p className="text-white font-bold text-lg">
            Projects Completed Successfully
          </p>

          <button className="h-14 w-56 bg-orange-600 text-white text-xl">
            {" "}
            Contact Us Now <SendIcon />
          </button>
        </div>
        <div className="h-96 xl:w-1/2 w-full bg-orange-600 flex flex-col items-center justify-center gap-8">
          <h1 className="text-blue-900 text-7xl font-bold"> 123+</h1>
          <p className="text-white font-bold text-lg">
            National Awards & Certificate Winners
          </p>

          <button className="h-14 w-56 bg-blue-900 text-white text-xl">
            {" "}
            More About Us <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <div className=" flex flex-col h-auto p-20 gap-5">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-blue-900 text-3xl font-bold">Step by Step</h1>
          <h1 className="text-orange-500 text-3xl font-bold">Success Story</h1>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center ">
          <div className=" flex h-10 w-10 bg-orange-500 text-white items-center justify-center text-2xl">
            &lt;
          </div>
          <div className=" flex h-10 w-10 bg-orange-500 text-white items-center justify-center text-2xl">
            &gt;
          </div>
        </div>
      </div>

      <div className="xl:flex xl:flex-row flex flex-col lg:flex lg:flex-row w-full items-center justify-center gap-10">
        <div className="xl:w-1/2 w-full p-10 flex  items-center lg:flex lg:items-start lg:justify-start flex-col justify-center gap-5 ">
          <div className="flex flex-col xl:flex xl:flex-col items-start justify-center mt-10 ml-5 gap-6">
            <h1 className="text-blue-900 text-2xl font-bold">
              Oil Refining{" "}
              <span className="text-orange-500 text-2xl font-bold">
                {" "}
                Machinery
              </span>
            </h1>
            <p className="text-gray-700 h-auto lg:w-[550px] w-[350px] md:max-lg:w-[700px] text-lg">
              Lorem ipsum dolor sit amet hbidboua bubuebd bcuixbuie hievadefa
              dsiyvbuwr uibvuobed uidsbcuofw hfs vciub consectetur adipisicing
              elit. Modi voluptatem dicta amet laudantium reprehenderit. Error
              eaque veritatis cumque iure repellat?
            </p>
          </div>
          <div className="flex md:max-lg:w-[700px] w-[350px]  pl-5 flex-col gap-5 text-gray-700">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full flex items-center justify-center">
          <div className="h-96 w-[350px] md:max-lg:w-[700px] lg:w-[450px] bg-gray-900 "></div>
        </div>
      </div>
    </>
  );
};

export default History;
