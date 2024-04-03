import React from "react";

const Faq = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-5xl mt-20 font-bold">
          <h1 className="text-blue-900">Faq’s</h1>
          <h1 className="text-orange-600">Common Questions</h1>
        </div>

        <div className="flex flex-row gap-24">
          <div className="flex flex-col gap-5 mt-20 ml-36 ">
            <div className="h-20 w-[800px]  bg-white border border-gray-300  ">
              <h1 className="text-orange-600 font-semibold ml-10">
                What services can I outsource?
              </h1>
              <p className="w-[800px] font-semibold text-gray-500 ml-10">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus.
              </p>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                How Can I View Your Annual Report To Know That How You Use Our
                Money
              </h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">Don't Goverment Provide Any Support?</h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                Does Provide Information About Where My spares Is Used?
              </h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                Hoe Does Your Team Raised Fund for Resourses
              </h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                What Method Do Charity Use To Choose Project For Its Support?
              </h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                How Does Charity Work To Ensure Child Rights?
              </h1>
            </div>
            <div className="h-20 w-[800px] font-semibold border border-gray-300 text-blue-900 flex items-center ">
              <h1 className="ml-10">
                Will My Little Contribution Be Helpful For You?
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-20">
            <div className="h-72 w-96 bg-gray-400"></div>
            <div className="h-72 w-96 bg-blue-400">
              <div className="flex flex-col items-center justify-center gap-5 mt-10">
                <h1 className="text-orange-600 text-2xl font-semibold">
                  You still have questions ?
                </h1>
                <p className="text-white text-lg w-72">
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
      <div className="h-[800px] w-full bg-gray-300 mt-20 flex flex-row">
        <div className="h-[800px] w-1/2 bg-gray-100">kjbadiobe</div>
        <div className=" w-1/2">
          <div className=" flex flex-col gap-4 mt-20 ml-20">
            <h1 className="text-blue-900 text-3xl font-medium">
              You need more information
            </h1>
            <h1 className="text-orange-600 text-5xl font-semibold">
              Helping Firms Innovate, Transform, and Lead.
            </h1>
          </div>
          <div className="flex flex-row mt-20 ml-20 ">
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
          <div className="h-72 w-[650px] bg-gray-50 ml-20 flex flex-col gap-5">
            <p className="text-gray-500 ml-10">
              Vivamus elementum semper nisi. Curabitur ullamcorper ultricies
              nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,{" "}
            </p>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col gap-5 ml-20">
                <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                <h1 className="text-gray-500">Nullam dictum felis eu pede.</h1>
                <h1 className="text-gray-500">
                  Vivamus elementum semper nisi.
                </h1>
                <h1 className="text-gray-500">
                  Aenean vulputate. eleifend tellus.
                </h1>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <h1 className="text-gray-500">In enim justo rhoncus ut.</h1>
                <h1 className="text-gray-500">Nullam dictum felis eu pede.</h1>
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

        <div></div>
      </div>

      {/* last part of the page */}
      <div className="mt-20">
        <div className="flex flex-row text-6xl font-bold  gap-2 ml-28">
          <h1 className="text-blue-900">Our Experience and </h1>
          <h1 className="text-orange-600"> Industry Knowledge.</h1>
        </div>
        <div className="flex flex-row gap-20 items-center justify-center mt-20">
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
