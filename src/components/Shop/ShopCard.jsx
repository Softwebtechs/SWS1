import React from "react";
import s4 from "./img/four.jpg";

const ShopCard = ({ img, title, price1, price2 }) => {
  return (
    <>
      {" "}
      <div className="relative">
        <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
          <button className="text-white border border-white p-3">
            Add to Cart
          </button>
        </div>
        <div className="h-72 w-96 bg-gray-400 ">
          <img src={img} alt="xyz" className="h-72 w-96" />
        </div>
        <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
          <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600 cursor-pointer">
            {title}
          </h1>
          <div className="flex flex-row gap-5 justify-center items-center">
            <span className="text-gray-300 text-base font-semibold line-through">
              ₹{price1}.00
            </span>
            <span className="text-gray-300 text-base font-semibold">
              ₹{price2}.00
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
