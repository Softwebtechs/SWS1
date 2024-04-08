import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import one from "./icons/one.png";
import two from "./icons/two.png";
import three from "./icons/three.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SendIcon from "@material-ui/icons/Send";
import img1 from "./icons/img/img1.jpg";
import img2 from "./icons/img/img2.jpg";
import img3 from "./icons/img/img3.jpg";
import img4 from "./icons/img/img4.jpg";

const Hero = () => {
  return (
    <>
      <div className="md:h-36 h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-28 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-6xl text-6xl">
          Career
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-lg text-gray-300">HOME</h1>
            <p>|</p>
            <h1 className="text-lg text-gray-300"> CAREER</h1>
          </div>
        </div>
      </div>
      <div className="h-[1800px] xl:h-[1000px]   flex items-center flex-col gap-10 justify-center mt-96 m-10  md:mt-0">
        <div className=" flex items-center flex-col md:pt-44 pt-48 mt-20 md:mt-0">
          <h1 className="text-blue-900 md:text-6xl text-4xl font-bold mb-2">
            Our Job Requirements
          </h1>
          <h1 className="text-orange-500 md:text-6xl text-4xl font-bold">
            Open Positions
          </h1>
        </div>
        <div className="flex gap-7 flex-col xl:flex-row  ">
          <div className="flex flex-col gap-6 md:pl-0 ">
            <div className="md:h-96 h-64 md:w-[600px] w-96 bg-gray-400 hover:bg-gray-700">
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-blue-900 font-bold text-2xl  hover:text-orange-600 duration-300">
                Administrative/Support
              </h1>
              <h1 className="font-semibold">
                {" "}
                <span className="text-orange-500">Eligibility-</span>
                <span className="text-blue-500"> 2+years of experince</span>
                <span className="text-orange-500"> Vacancies -</span>
                <span className="text-blue-500"> 3 Post</span>
              </h1>
              <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>
              <h2 className="text-orange-500">Apply Now &gt; </h2>
            </div>
          </div>

          <div className="md:flex flex flex-col  gap-8 mb-[500px] md:mb-0 ">
            <div className="md:flex md:flex-row flex-col gap-8">
              <div className="md:h-36 h-64 md:w-48 w-96  bg-gray-500  hover:bg-gray-700">
                <img src={img1} alt="" className="lg:h-36 h-64 w-96 " />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-bold text-2xl mt-5 sm:mt-0  hover:text-orange-600 duration-300">
                  Finance/Accounting
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-500"> 2+years of experince</span>
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-500"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>

            <div className="md:flex md:flex-row flex-col gap-8">
              <div className="md:h-36 h-64 md:w-48 w-96 bg-gray-500  hover:bg-gray-700">
                <img src={img3} alt="" className="lg:h-36 h-64 w-96" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-bold text-2xl mt-5 sm:mt-0  hover:text-orange-600 duration-300">
                  Finance/Accounting
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-500"> 2+years of experince</span>
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-500"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>

            <div className="md:flex md:flex-row flex-col gap-8">
              <div className="md:h-36 h-64 md:w-48 w-96 bg-gray-500  hover:bg-gray-700">
                <img src={img4} alt="" className="lg:h-36 h-64 w-96 " />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-blue-900 font-bold text-2xl mt-5 sm:mt-0  hover:text-orange-600 duration-300">
                  Finance/Accounting
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Eligibility-</span>
                  <span className="text-blue-500"> 2+years of experince</span>
                </h1>
                <h1 className="font-semibold ">
                  {" "}
                  <span className="text-orange-500">Vacancies -</span>
                  <span className="text-blue-500"> 8 Posts</span>
                </h1>
                <div className="h-auto w-64">
                  <p>Lorem ipsum dolor sit amet elit. Impedit, possimus?</p>{" "}
                </div>
              </div>
            </div>
            <div className="border-b-2"></div>
          </div>
        </div>
        <button className=" w-36 bg-blue-900 rounded text-white    p-4">
          View all post
        </button>{" "}
        <br />
      </div>

      <div className="flex flex-col">
        <div className="lg:h-[500px] h-auto bg-blue-900 pt-8 ">
          <div className="md:flex lg:flex-row   flex-col xl:ml-64 ml-18 items-start lg:gap-44 gap-20  lg:ml-0 mb-20">
            <div className="flex flex-col md:flex-row md:gap-44 gap-3">
              <div class="group flex flex-col items-center justify-center gap-5 group mt-5">
                <img src={one} alt="" />
                <h1 className="text-white text-2xl font-normal hover:text-orange-600 duration-500">
                  Just Freshers
                </h1>
                <p class="sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2">
                  <div className="h-auto w-56 ">
                    <p className="text-white text-center lg:hidden sm:group-hover:block  duration-500  ">
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
              <div class="group flex flex-col items-center justify-center gap-5 group mt-5">
                <img src={two} alt="" />
                <h1 className="text-white text-2xl font-normal hover:text-orange-600 duration-500">
                  Experince engineers
                </h1>
                <p class="sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2">
                  <div className="h-auto w-56 ">
                    <p className="text-white text-center lg:hidden sm:group-hover:block  duration-500  ">
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
            </div>
            <div class="group flex flex-col items-center justify-center gap-5 group mt-5">
              <img src={three} alt="" />
              <h1 className="text-white text-2xl font-normal hover:text-orange-600 duration-500">
                Admin Expert
              </h1>
              <p class="sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100 mt-2">
                <div className="h-auto w-56 ">
                  <p className="text-white text-center xl:flex sm:hidden sm:group-hover:block  duration-500  ">
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
          </div>

          <div className="h-auto xl:w-[1200px]  w-full xl:ml-44   bg-white  drop-shadow-md flex  flex-col  gap-5 p-10">
            <div className="ml-5 font-semibold text-3xl flex flex-col gap-4">
              <h1 className="text-blue-900 pt-5">
                Position for{" "}
                <span className="text-orange-500">Experince engineers</span>
              </h1>

              <div className="h-auto w-full">
                <p className="text-sm text-gray-500 text-center line-clamp-1">
                  Loeius. Magnam inventore neque sint tempora vero eos
                  perferendis consectetur tenetur nihil dicta impedit veritatis
                  numquam labore ex, quibusdam similique voluptates molestiae
                  eius dignissimos provident enim? Rem amet ipsam quia autem,
                  repellendus fugit reiciendis non dolor. Excepturi natus enim
                  dignis dolorum!
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
                <div className="text-gray-500 ml-3">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
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
                <div className="text-gray-500 ml-3">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
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
                  <span className="text-orange-500">Download Here &gt; </span>
                  <p className="text-gray-500">
                    You can apply online form and submit for the post we listed
                    here!
                  </p>
                </div>
                <div className="flex justify-center text-center">
                  <button className="text-white bg-blue-900 w-1/2 m-5 p-2 text-2xl">
                    Apply Online
                  </button>
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
