import React from 'react'
import { Link } from "react-router-dom";

const Columns = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Columns</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Columns</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:px-40 px-20  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex  gap-4 " >TWO  <span className="text-blue-950">COLUMNS</span></h1>
            </div>
            <div className="md:px-40 px-10 md:max-lg:px-5 lg:max-xl:px-7  py-14 flex flex-col md:flex md:flex-row gap-8">
                <div className=" flex flex-row  md:h-44 h-full md:w-[600px] w-[400px] md:max-lg:h-72 lg:max-xl:h-56 gap-3 ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/2</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eafb aute in cd commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                </div>
                <div className=" flex flex-row  md:h-44 h-full md:w-[600px] w-[400px] md:max-lg:h-72 lg:max-xl:h-56 gap-3 ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/2</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eafb aute in cd commodo consequat. Duis aute irure dolor in eprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                </div>



            </div >
            <div className="flex flex-col md:px-40 px-20  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex  gap-4 " >THREE  <span className="text-blue-950">COLUMNS</span></h1>
            </div>
            <div className="md:px-40 px-10 md:max-lg:px-5 lg:max-xl:px-7  py-14 flex flex-col md:flex md:flex-row gap-6">
                <div className=" flex flex-row  md:h-44 h-full md:w-[400px] w-[400px] md:max-lg:h-56  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3  ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/3</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eafb aute in cd commodo consequat.</span>
                </div>
                <div className=" flex flex-row  md:h-44 h-full md:w-[400px] w-[400px] md:max-lg:h-56  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3  ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/3</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eafb aute in cd commodo consequat.</span>
                </div>
                <div className=" flex flex-row  md:h-44 h-full md:w-[400px] w-[400px] md:max-lg:h-56  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3 ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/3</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eafb aute in cd commodo consequat.</span>
                </div>
            </div>

            <div className="flex flex-col md:px-40 px-20  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex  gap-4 " >FOUR  <span className="text-blue-950">COLUMNS</span></h1>
            </div>
            <div className="md:px-40 px-10 md:max-lg:px-5 lg:max-xl:px-7  py-14 flex flex-col md:flex md:flex-row gap-6">
                <div className=" flex flex-row  md:h-[210px] h-full md:w-[300px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3   ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/4</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>

                </div>
                <div className=" flex flex-row  md:h-[210px] h-full md:w-[300px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3  ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/4</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>

                </div>
                <div className=" flex flex-row  md:h-[210px] h-full md:w-[300px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3   ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/4</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>

                </div>
                <div className=" flex flex-row  md:h-[210px] h-full md:w-[300px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3   ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/4</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</span>

                </div>
            </div>

            <div className="flex flex-col md:px-40 px-20  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex  gap-4 " >FIFTH  <span className="text-blue-950">COLUMNS</span></h1>
            </div>
            <div className="md:px-40 px-10 md:max-lg:px-5 lg:max-xl:px-7  py-14 flex flex-col md:flex md:flex-row gap-6">
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/5</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/5</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/5</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/5</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/5</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
            </div>

            <div className="flex flex-col md:px-40 px-20  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex  gap-4 " >SIXTH  <span className="text-blue-950">COLUMNS</span></h1>
            </div>
            <div className="md:px-40 px-10 md:max-lg:px-5 lg:max-xl:px-7  py-14 flex flex-col md:flex md:flex-row gap-4">
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
                <div className=" flex flex-row  md:h-full h-full md:w-[350px] w-[400px] md:max-lg:h-full  md:max-lg:w-[400px] lg:max-xl:h-56 gap-3    ">
                    <div >
                        <span className="text-5xl font-bold text-gray-600">1/6</span>

                    </div>
                    <span className="text-l text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in esse eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>


                </div>
            </div>

            <div className="m-8 md:max-lg:w-[700px] bg-white md:p-24 p-5  h-auto gap-4 ">
                <h2 className=" text-xl font-semibold font-poppins text-black ">
                    Leave a Comment </h2>
                <p className="text-gray-700 font-roboto py-3">Your email address will not be published.</p>
                <p className="text-gray-700 font-roboto mb-4">Required fields are marked <span class="text-red-500">*</span></p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Comment<span class="text-red-500">*</span>
                        </label>
                        <textarea
                            id="comment"
                            name="comment"

                            className="w-full px-5 py-2 border outline-none "
                            rows="5"

                        ></textarea>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Name<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Email<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-blue-900 transition duration-1000 text-white font-normal py-4 px-11 focus:outline-none focus:shadow-outline"
                    >
                        Post Comment
                    </button>
                </form>
            </div>

        </>
    )
}

export default Columns