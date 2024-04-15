import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import checkBox from "./check_box.png";
import img2 from "./icons/img/img2.jpg";
import img3 from "./icons/img/img3.jpg";
import img4 from "./icons/img/img4.jpg";
import one from "./icons/one.png";
import three from "./icons/three.png";
import two from "./icons/two.png";

const Hero = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px[10%] items-center flex  flex-col gap-6 justify-center mb-">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-6xl">
          Career
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-sm text-gray-400">HOME</h1>
            <p className="text-sm text-gray-400">|</p>
            <h1 className="text-sm text-gray-400"> CAREER</h1>
          </div>
        </div>
      </div>
      <div className="h-[1800px] xl:h-[1000px]   flex items-center flex-col gap-10 justify-center mt-96 m-10  md:mt-0">
        <div className=" flex items-center flex-col md:pt-0 pt-48 mt-20 md:mt-0">
          <h1 className="text-blue-900 md:text-5xl text-4xl font-semibold mb-2">
            Our Job Requirements
          </h1>
          <h1 className="text-orange-500 md:text-5xl text-4xl font-semibold">
            Open Positions
          </h1>
        </div>
        <div className=" flex gap-7 flex-col xl:flex-row   ">
          <div className="flex flex-col gap-6 md:pl-0 md:w-[600px] w-96 group ">
            <div className=" md:h-96 h-64 md:w-[600px] w-96 bg-gray-400 hover:bg-gray-700 relative">
              <img src={img2} alt="" className="absolute" />
              <div className="relative md:h-96 h-64 md:w-[600px] w-96 bg-blue-950 opacity-0 group-hover:opacity-45 duration-300 ease-in-out" />
            </div>
            <div className="flex flex-col gap-3 mt-5 items-start">
              <h1 className="text-blue-900 font-semibold text-2xl  hover:text-orange-600 duration-300 cursor-pointer">
                Administrative/Support
              </h1>
              <div className="font-normal flex gap-5">
                {" "}
                <div>
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-900"> 2+years of experince</span>
                </div>
                <div>
                  <span className="text-orange-500"> Vacancies -</span>
                  <span className="text-blue-00"> 3 Post</span>
                </div>
              </div>
              <p className="w-full text-gray-500 text-base">
                Proin eu malesuada quam, et mollis nulla. Maecenas fringilla
                eget massa sed dignissim. Aliquam...
              </p>
              <button className="text-orange-500 text-sm font-medium hover:text-gray-500">
                Apply Now &gt;{" "}
              </button>
            </div>
          </div>

          <div className="md:flex flex flex-col  gap-8 mb-[500px] md:mb-0 ">
            <div className="md:flex md:flex-row flex-col gap-8 group">
              <div className="md:h-36 h-64 md:w-48 w-96 bg-gray-500  hover:bg-gray-700 relative">
                <img
                  src={img2}
                  alt=""
                  className="absolute md:h-36 h-64 md:w-48 w-96"
                />
                <div className="relative md:h-36 h-64 md:w-48 w-96 bg-blue-950 opacity-0 group-hover:opacity-45 duration-300 ease-in-out" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-semibold text-2xl  hover:text-orange-600 duration-300 cursor-pointer">
                  Spare Parts Manufacturing
                </h1>
                <h1 className="font-normal text-sm ">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-900"> 3+ years of experince</span>
                </h1>
                <h1 className="font-normal text-sm ">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-900"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64 text-gray-500 text-sm font-normal">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>

            <div className="md:flex md:flex-row flex-col gap-8 group">
              <div className="md:h-36 h-64 md:w-48 w-96 bg-gray-500  hover:bg-gray-700 relative">
                <img
                  src={img3}
                  alt=""
                  className="absolute md:h-36 h-64 md:w-48 w-96"
                />
                <div className="relative md:h-36 h-64 md:w-48 w-96 bg-blue-950 opacity-0 group-hover:opacity-45 duration-300 ease-in-out" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-semibold text-2xl  hover:text-orange-600 duration-300 cursor-pointer">
                  Human Resources
                </h1>
                <h1 className="font-normal text-sm">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-900"> 2+years of experince</span>
                </h1>
                <h1 className="font-normal text-sm ">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-900"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64 text-sm font-normal">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>

            <div className="md:flex md:flex-row flex-col gap-8 group">
              <div className="md:h-36 h-64 md:w-48 w-96 bg-gray-500  hover:bg-gray-700 relative">
                <img
                  src={img4}
                  alt=""
                  className="absolute md:h-36 h-64 md:w-48 w-96"
                />
                <div className="relative md:h-36 h-64 md:w-48 w-96 bg-blue-950 opacity-0 group-hover:opacity-45 duration-300 ease-in-out" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-semibold text-2xl  hover:text-orange-600 duration-300 cursor-pointer">
                  Finance – Accounting
                </h1>
                <h1 className="font-normal text-sm ">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-900"> 2+years of experince</span>
                </h1>
                <h1 className="font-normal text-sm">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-900"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64 text-sm font-normal">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-44">
        <div className="lg:h-[500px] h-auto bg-blue-900 pt-8 ">
          <div className="md:flex lg:flex-row   flex-col  ml-18 md:justify-center md:items-center items-start lg:gap-44 gap-20  md:ml-0 mb-20">
            <div className="flex flex-col md:flex-row md:justify-between md:px-[12%] md:w-full gap-10 md:h-80">
              {/* just fresher */}
              <div class="group flex flex-col items-center justify-center gap-1 mt-5">
                <div className="group-hover:-translate-y-5 transition duration-100 flex flex-col gap-5 justify-center items-center">
                  <img src={one} alt="" />
                  <h1 className="text-white text-2xl font-normal group-hover:text-orange-600 duration-500">
                    Just Freshers
                  </h1>
                </div>
                <p class="opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                  <div className="h-auto w-56 ">
                    <p className="text-white text-center sm:hidden sm:group-hover:block  duration-500  ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, molestias.
                    </p>
                  </div>
                </p>
                <p class="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                  <ArrowForwardIcon
                    style={{
                      color: "white",
                    }}
                  />
                </p>
              </div>

              {/*  experience engineer */}
              <div class="group flex flex-col items-center justify-center gap-1 group mt-5">
                <div className="group-hover:-translate-y-5 transition duration-100 flex flex-col gap-5 justify-center items-center">
                  <img src={two} alt="" />
                  <h1 className="text-white text-2xl font-normal group-hover:text-orange-600 duration-500">
                    Experince engineers
                  </h1>
                </div>
                <p class="opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
                  <div className="h-auto w-56 ">
                    <p className="text-white text-center sm:hidden sm:group-hover:block  duration-500  ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, molestias.
                    </p>
                  </div>
                </p>
                <p class="opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                  <ArrowForwardIcon
                    style={{
                      color: "white",
                    }}
                  />
                </p>
              </div>

              {/* Admin Expert */}

              <div class="group flex flex-col items-center justify-center gap-1 group mt-5">
                <div className="group-hover:-translate-y-5 transition duration-100 flex flex-col gap-5 justify-center items-center">
                  <img src={three} alt="" />
                  <h1 className="text-white text-2xl font-normal group-hover:text-orange-600 duration-500">
                    Admin Expert
                  </h1>
                </div>
                <p class="opacity-0 transition-opacity duration-500 group-hover:opacity-100  ">
                  <div className="h-auto w-56 ">
                    <p className="text-white text-center sm:hidden sm:group-hover:block  duration-500   ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed, molestias.
                    </p>
                  </div>
                </p>
                <p class="opacity-100  transition-opacity duration-500 group-hover:opacity-0">
                  <ArrowForwardIcon
                    style={{
                      color: "white",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <div className="h-auto xl:w-[80%]  w-full   bg-white  drop-shadow-md flex  flex-col  gap-5 p-5 xl:mb-20">
              <div className="ml-5 font-semibold text-4xl flex flex-col gap-4">
                <h1 className="text-blue-900 py-5">
                  Position for{" "}
                  <span className="text-orange-500">Experince engineers</span>
                </h1>

                <div className="h-auto w-full ">
                  <p className="text-sm text-gray-600 font-normal text-start leading-6 ">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
                    lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet.
                  </p>
                </div>
              </div>

              <div className="md:flex flex-col lg:flex-row  gap-5 ml-5">
                <div className=" lg:w-1/3 w-full flex flex-col gap-4 m-1">
                  <h1 className="text-blue-900 font-semibold text-2xl">
                    Job Requirements
                  </h1>
                  <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem itaque, laudantium aliquam est a aut corporis
                    quas nostrum inventore esse.
                  </p>
                  <div className="text-gray-500 flex flex-col gap-3 ">
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full flex flex-col gap-4 m-1">
                  <h1 className="text-blue-900 font-semibold text-2xl">
                    Experience Required
                  </h1>
                  <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem itaque, laudantium aliquam est a aut corporis
                    quas nostrum inventore esse.
                  </p>
                  <div className="text-gray-500 flex flex-col gap-3">
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex gap-2  items-center">
                      <img src={checkBox} alt="" className="h-4 w-4" />
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full flex flex-col gap-4 m-1">
                  <h1 className="text-blue-900 font-semibold text-2xl">
                    How to Apply
                  </h1>
                  <p className="text-gray-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    esse.
                  </p>
                  <div>
                    <button className="text-orange-500 cursor-pointer py-2 text-sm">
                      Download Here &gt;{" "}
                    </button>

                    <p className="text-gray-500">
                      You can apply online form and submit for the post we
                      listed here!
                    </p>
                  </div>
                  <div className="flex justify-center text-center">
                    <button className="text-white bg-blue-900 w-36 m-5 h-10 text-sm hover:bg-orange-500 hover:text-white">
                      Apply Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-white md:h-96 h-8 flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Hero;
