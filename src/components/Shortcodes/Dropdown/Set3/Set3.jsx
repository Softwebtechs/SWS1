import React from 'react'
import { Link } from "react-router-dom";
import Conten2 from './Conten2';
import Content3 from './Content3';

function Set3() {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Miscellaneous</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Miscellaneous</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center  " >DROP<span className="text-blue-950">CAPS</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-4  sm:px-32 px-7 mt-10 lg:max-xl:px-10  ">
                <div className="flex flex-row gap-4">
                    <div class="">
                        <span className="text-5xl text-red-600">Q</span>
                    </div>
                    <div className="lg:h-24 h-32 lg:w-[180px] lg:max-xl:w-32 lg:max-xl:h-32 w-80 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-full py-1 px-3 bg-red-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-7 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center border-2 border-gray-200 rounded-full py-1 px-3 bg-red-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-7 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-none py-1 px-3 bg-red-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-7 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-none border-2 border-gray-200 py-1 px-3 bg-red-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-7 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-4  sm:px-32 px-7 mt-24 lg:max-xl:px-10  ">
                <div className="flex flex-row gap-4">
                    <div class="">
                        <span className="text-5xl text-blue-600">Q</span>
                    </div>
                    <div className="lg:h-64 h-32 lg:w-[180px] lg:max-xl:w-32 w-80 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-full py-1 px-3 bg-blue-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-64 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center border-2 border-gray-200 rounded-full py-1 px-3 bg-blue-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-64 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-none py-1 px-3 bg-blue-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-64 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="">
                        <span className=" flex justify-center items-center rounded-none border-2 border-gray-200 py-1 px-3 bg-blue-600 text-2xl text-white">Q</span>
                    </div>
                    <div className="lg:h-64 h-32 lg:w-[180px] w-80 lg:max-xl:w-32 text-gray-700 text-l ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ex fb aute in ess eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>
            <Conten2 />
            <Content3 />
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

export default Set3