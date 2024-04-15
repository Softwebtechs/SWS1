import React from "react";
import qone from "../img/q1.png";

const Card = ({ img_url, title }) => {
  return (
    <>
      <div className="h-64 lg:w-64 w-[400px] md:max-lg:w-[600px] bg-white shadow-2xl hover:bg-blue-900 flex flex-col items-center justify-center gap-6 group">
        <img src={img_url} alt="" className="group-hover:invert" />
        <h1 className="text-blue-900 text-xl font-bold group-hover:text-orange-600">
          {title}
        </h1>
        <p className="text-gray-600 text-base group-hover:text-gray-300 text-center">
          Submit the details of your renovation
        </p>
      </div>
    </>
  );
};

export default Card;
