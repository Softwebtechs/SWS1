import React from "react";
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col text-white gap-5 justify-center items-center h-[39rem] bg-gray-500">
        <div className="flex flex-col flex-wrap justify-center items-center font-semibold md:text-4xl text-2xl gap-1">
          <h1 className="text-white">
            We are{" "}
            <span className="bg-orange-600 px-1">No.1 Industrial Service</span>
          </h1>
          <h1 className="text-white "> Providers in Worldwide!</h1>
        </div>
        <div className="md:h-auto md:w-1/2 w-full px-6">
          <p className="text-xs font-normal text-center">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, ehoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          </p>
        </div>
        <div className="flex gap-2 text-sm text-white font-normal ">
          <button className="px-5 py-2 bg-blue-900 text-white">
            READ MORE
          </button>
          <button className="px-5 py-2 bg-orange-600">Our Solutions</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
