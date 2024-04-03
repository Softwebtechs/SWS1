import React from "react";
import img from "./man-image.jpg";

const Faq = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-5xl mt-20 font-bold">
          <h1 className="text-blue-900">Faq’s</h1>
          <h1 className="text-orange-600">Common Questions</h1>
        </div>

        <div className="lg:flex lg:flex-row lg:gap-5  flex flex-col gap-10 md:max-lg:gap-0 items-center justify-center">
          <div className="flex flex-col gap-5 mt-20 items-center justify-center m-5 ">
            <div className="h-auto  lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96 xl:w-[800px] bg-white border border-gray-300 p-5">
              <h1 className="text-orange-600 font-semibold ml-5">
                What services can I outsource?
              </h1>
              <p className="w-80 xl:w-[750px] font-semibold text-gray-500 ml-5 ">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus.
              </p>
            </div>
            <div className="h-20 lg:max-xl:w-[570px]  md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                How Can I View Your Annual Report To Know That How You Use Our
                Money
              </h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">Don't Goverment Provide Any Support?</h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                Does Provide Information About Where My spares Is Used?
              </h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                Hoe Does Your Team Raised Fund for Resourses
              </h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                What Method Do Charity Use To Choose Project For Its Support?
              </h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                How Does Charity Work To Ensure Child Rights?
              </h1>
            </div>
            <div className="h-20 lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96  xl:w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-5">
                Will My Little Contribution Be Helpful For You?
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:max-lg:gap-6 mt-20">
            <div className="h-72 lg:max-xl:h-56 md:max-lg:h-96 md:max-lg:w-[700px] lg:max-xl:w-64 w-96 bg-gray-400"></div>
            <div className="h-72 lg:max-xl:h-96 md:max-lg:w-[700px] lg:max-xl:w-64 w-96 bg-blue-400">
              <div className="flex flex-col items-center justify-center gap-5 mt-10">
                <h1 className="text-orange-600 lg:max-xl:w-36 text-2xl  font-semibold leading-7">
                  You still have questions ?
                </h1>
                <p className="text-white text-lg w-72 lg:max-xl:w-36 leading-7  ">
                  Is there any query left? You can directly share with us and
                  clear away all your confusions.
                </p>
                <button className="h-10 w-36 bg-orange-600 text-white text-lg ">
                  Ask Question?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second part of the page */}
      <div className="md:h-screen h-[900px]   mt-10  lg:flex lg:flex-row flex flex-row items-center  lg:justify-end  ">
        <img
          src={img}
          alt="xyz"
          className="h-full w-auto object-cover relative"
        />
        <div className=" lg:w-1/2 w-full absolute flex flex-col   gap-10">
          <div className=" flex flex-col gap-5 ">
            <h1 className="text-blue-900 text-3xl font-medium ">
              You need more information
            </h1>
            <h1 className="text-orange-600 text-5xl font-semibold">
              Helping Firms Innovate, Transform, and Lead.
            </h1>
          </div>
          <div className="flex flex-col gap-0 ">
            <div className="flex flex-row  ">
              <div className="h-14 w-32 bg-orange-600 text-white text-xl font-semibold text-center p-2 border border-gray-400">
                Innovation
              </div>
              <div className="h-14 w-32 bg-white text-blue-900 text-xl font-semibold text-center p-2 border border-gray-400">
                Production
              </div>
              <div className="h-14 w-32  bg-white text-blue-900 text-xl font-semibold text-center p-2 border border-gray-400">
                Quality
              </div>
              <div className="h-14 w-32  bg-white text-blue-900 text-xl font-semibold text-center p-2 border border-gray-400">
                Guarantee
              </div>
            </div>
            <div className="h-auto w-full bg-gray-50 flex flex-col gap-5 p-8 bg-opacity-80 mx-5">
              <p className="text-gray-500 ml-10">
                Vivamus elementum semper nisi. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,{" "}
              </p>
              <div className="md:flex md:flex-row flex flex-col gap-10 ">
                <div className="flex flex-col gap-5 ml-20">
                  <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                  <h1 className="text-gray-500">
                    Nullam dictum felis eu pede.
                  </h1>
                  <h1 className="text-gray-500">
                    Vivamus elementum semper nisi.
                  </h1>
                  <h1 className="text-gray-500">
                    Aenean vulputate. eleifend tellus.
                  </h1>
                </div>
                <div className="flex flex-col gap-5 ml-20">
                  <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                  <h1 className="text-gray-500">
                    Nullam dictum felis eu pede.
                  </h1>
                  <h1 className="text-gray-500">
                    Vivamus elementum semper nisi.
                  </h1>
                  <h1 className="text-gray-500">
                    Aenean vulputate. eleifend tellus.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* last part of the page */}
      <div className="mt-20">
        <div className="flex flex-row text-6xl font-bold  gap-2 ml-28">
          <h1 className="text-blue-900">
            Our Experience and{" "}
            <span className="text-orange-600"> Industry Knowledge. </span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-20 items-center justify-center mt-20">
          <div className="flex flex-col gap-3">
            <div className="h-64  w-96 bg-gray-400"></div>
            <div className="flex flex-col gap-5">
              <h1 className="text-blue-900 text-xl font-semibold">
                Storage Hall
              </h1>
              <p className="h-auto w-96 text-gray-600">
                Cras est tellus, tincidunt eu ornare et, euismod sit amet sem.
                Ut eget tempor turpis, eget accumsan odio metus vitae commodo
                auctor, ex urna.
              </p>
              <h1 className="text-orange-600">Read More &gt;</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64  w-96 bg-gray-400"></div>
            <div className="flex flex-col gap-5">
              <h1 className="text-blue-900 text-xl font-semibold">
                Storage Hall
              </h1>
              <p className="h-auto w-96 text-gray-600">
                Cras est tellus, tincidunt eu ornare et, euismod sit amet sem.
                Ut eget tempor turpis, eget accumsan odio metus vitae commodo
                auctor, ex urna.
              </p>
              <h1 className="text-orange-600">Read More &gt;</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-64  w-96 bg-gray-400"></div>
            <div className="flex flex-col gap-5">
              <h1 className="text-blue-900 text-xl font-semibold">
                Storage Hall
              </h1>
              <p className="h-auto w-96 text-gray-600">
                Cras est tellus, tincidunt eu ornare et, euismod sit amet sem.
                Ut eget tempor turpis, eget accumsan odio metus vitae commodo
                auctor, ex urna.
              </p>
              <h1 className="text-orange-600">Read More &gt;</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
