import React from "react";
import s1 from "./img/one.jpg";
import s2 from "./img/two.jpg";
import s3 from "./img/three.jpg";
import s4 from "./img/four.jpg";
import s5 from "./img/five.jpg";
import s6 from "./img/six.jpg";
const Shop = () => {
  return (
    <>
      <div className=" xl:flex xl:flex-row flex flex-col gap-10 items-center justify-center">
        <div className=" flex flex-col gap-20  mt-20 items-center justify-center">
          {/* two div */}
          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s1} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s2} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Car Brake Shoe
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹85.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* two div */}
          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s3} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Carburettor
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹95.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹65.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s4} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* four div  */}
        <div className=" flex flex-col gap-20  mt-20">
          {/* two div */}

          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s1} alt="xyz" className="h-72 w-96" />
              </div>

              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s2} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Car Brake Shoe
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹85.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* two div */}
          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s3} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Carburettor
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹95.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹65.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s4} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* four div  */}
        <div className=" flex flex-col gap-20  mt-20">
          {/* two div */}
          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s1} alt="xyz" className="h-72 w-96" />
              </div>

              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s2} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Car Brake Shoe
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹85.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* two div */}
          <div className="flex flex-col  md:max-xl:flex md:max-xl:flex-row md:max-xl:gap-10 gap-10">
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s3} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Carburettor
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹95.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹65.00
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-72 w-96 bg-orange-600 opacity-0 hover:opacity-80 absolute top-0 flex items-center justify-center">
                <button className="text-white border border-white p-3">
                  Add to Cart
                </button>
              </div>
              <div className="h-72 w-96 bg-gray-400 ">
                <img src={s4} alt="xyz" className="h-72 w-96" />
              </div>
              <div className="h-28 w-96 bg-blue-900 flex flex-col gap-5 group">
                <h1 className="text-white text-center text-2xl font-bold mt-3 group-hover:text-orange-600">
                  Automobile Engine
                </h1>
                <div className="flex flex-row gap-5 ml-28">
                  <span className="text-gray-300 text-xl font-bold line-through">
                    ₹60.00
                  </span>
                  <span className="text-gray-300 text-xl font-bold">
                    ₹45.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
