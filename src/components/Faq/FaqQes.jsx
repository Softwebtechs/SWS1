import React, { useState } from "react";

const FaqQes = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="h-auto cursor-pointer  lg:max-xl:w-[570px] md:max-lg:w-[700px] w-96 xl:w-[800px] bg-white border border-gray-300 p-5 gap-3 flex flex-col"
      >
        <h1
          className={`${
            isVisible ? "text-orange-600" : "text-gray-600"
          }  font-semibold ml-5`}
        >
          {title}
        </h1>
        {isVisible && (
          <p className="w-80 xl:w-[750px] font-normal text-gray-500 ml-5 leading-6">
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus.
          </p>
        )}
      </div>
    </>
  );
};

export default FaqQes;
