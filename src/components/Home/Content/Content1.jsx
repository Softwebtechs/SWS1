import React from "react";
import dotIcon from "../../../assets/icons/dotIcon.png";
import img1 from "./icons/counter-img-1.png";
import img2 from "./icons/counter-img-2.png";
import img3 from "./icons/counter-img-3.png";
import img4 from "./icons/counter-img-4.png";

const Content1 = () => {
  return (
    <>
      <div className="flex flex-col  items-center h-auto bg-white justify-center mt-10">
        <div className="lg:flex lg:flex-row flex-col gap-4">
          <div className="gap-4">
            <div className="md:flex-row flex flex-col sm:justify-between items-center md:max-lg:px-10">
              <h1 className="text-blue-900 font-bold  text-4xl mb-9">
                We Are Expert In <br />
                <span className="text-orange-500">Different Solutions</span>
              </h1>
              <img src={dotIcon} alt="dotIcon img" className="h-7 w-16  " />
            </div>

            <div className="xl:flex xl:flex-row flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:ml-0 md:max-lg:ml-10 ml-10 md:mt-0 mt-5">
                <div className="h-72 w-96 md:max-lg:h-[600px] md:max-lg:w-[700px] bg-gray-400 text-xl"></div>
                <h1 className="text-blue-900 text-2xl font-semibold">
                  Material Engineering
                </h1>
                <div className="h-auto w-80 md:max-lg:w-full ">
                  <p className="text-sm font-medium leading-6 text-gray-400 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis quos quisquam, culpa.
                  </p>
                </div>

                <a href="#" className="text-orange-500  text-lg font-semibold">
                  Read more &gt;
                </a>
              </div>
              <div className="lg:flex flex-col gap-4 md:ml-0 ml-8 md:mt-0 mt-5 hidden">
                <div className="h-72 w-96 bg-gray-400 text-xl"></div>
                <h1 className="text-blue-900 text-2xl font-semibold">
                  Material Engineering
                </h1>
                <div className="h-auto w-80 ">
                  <p className="text-sm font-medium leading-6 text-gray-400 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis quos quisquam, culpa.
                  </p>
                </div>

                <a href="#" className="text-orange-500  text-lg font-semibold">
                  Read more &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="m-8 md:max-lg:w-[700px] bg-white p-8 drop-shadow-xl h-auto ">
            <h2 className="text-xl font-semibold text-orange-500 mb-9">
              Get your Free <br />
              <span className="text-blue-900">Consultation & Guote</span>
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  className="w-full px-5 py-2 border text-black outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-5 py-2 border outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <select
                  id="service"
                  name="service"
                  className="w-full px-5 py-2 border  outline-none focus:border-blue-500"
                >
                  <option value="">Service Required</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 5</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Text*"
                  className="w-full px-5 py-5 border outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <p className="mb-10">
                * Need to fill marked. Make a call for more <br />
                details required.
              </p>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-blue-900 transition duration-1000 text-white font-normal py-4 px-11 focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col xl:h-48 h-auto w-5/4 m-10 ">
          <div className="flex flex-col xl:flex-row">
            <div className="flex items-center justify-center w-auto h-36 bg-white drop-shadow-2xl m-5 border-0">
              <div className="flex ml-8 md:gap-0 gap-24">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h1 className="text-5xl font-extrabold text-orange-500">
                    14+
                  </h1>
                  <h1 className="text-blue-900 font-medium">
                    Years of Experience
                  </h1>
                </div>
                <img
                  src={img1}
                  className="h-32  mb-4 opacity-5 "
                  alt="image1"
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-auto h-36 bg-white drop-shadow-2xl m-5 border-0">
              <div className="flex ml-8 sm:gap-0 gap-24">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h1 className="text-5xl font-extrabold text-orange-500">
                    68+
                  </h1>
                  <h1 className="text-blue-900 font-medium">
                    Project per Year
                  </h1>
                </div>
                <img
                  src={img2}
                  className="h-32  mb-4 opacity-5 "
                  alt="image1"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <div className="flex items-center justify-center w-auto h-36 bg-white drop-shadow-2xl m-5 border-0">
              <div className="flex ml-8 sm:gap-0 gap-24">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h1 className="text-5xl font-extrabold text-orange-500">
                    23k+
                  </h1>
                  <h1 className="text-blue-900 font-medium">
                    Years of Experience
                  </h1>
                </div>
                <img
                  src={img3}
                  className="h-32  mb-4 opacity-5 "
                  alt="image1"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-auto h-36 bg-white drop-shadow-2xl m-5 border-0">
              <div className="flex ml-8 sm:gap-0 gap-24">
                <div className="flex flex-col items-start justify-center gap-4">
                  <h1 className="text-5xl font-extrabold text-orange-500">
                    100+
                  </h1>
                  <h1 className="text-blue-900 font-medium">
                    Years of Experience
                  </h1>
                </div>
                <img
                  src={img4}
                  className="h-32  mb-4 opacity-5 "
                  alt="image1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
