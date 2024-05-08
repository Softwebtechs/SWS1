import React from 'react'
import { Link } from "react-router-dom";
import CloudIcon from '@mui/icons-material/Cloud';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const FancyBox = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Fancy Boxes</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Fancy Boxes</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TITLED  <span className="text-blue-950">BOXES</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-7 md:px-44 md:max-lg:px-16 px-20 mt-14">
                <div className="md:w-[600px] h-full w-96 bg-gray-100 flex flex-col">
                    <div className="bg-blue-500 w-full flex flex-row gap-3 h-12 px-5 py-3">
                        <CloudIcon
                            style={{
                                color: "white"
                            }}
                        />
                        <p class="text-white font-poppins font-semibold">BLUE TITLED BOX</p>
                    </div>
                    <div className="px-5 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>
                <div className="md:w-[600px] h-full w-96 bg-gray-100 flex flex-col">
                    <div className="bg-orange-500 w-full flex flex-row gap-3 h-12 px-5 py-3">
                        <CloudIcon
                            style={{
                                color: "white"
                            }}
                        />
                        <p class="text-white font-poppins font-semibold">ORANGE TITLED BOX</p>
                    </div>
                    <div className="px-5 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>

            </div>
            <div className="md:flex md:flex-row flex flex-col gap-7 md:px-44 md:max-lg:px-16 px-20 mt-10">
                <div className="md:w-[600px] h-full w-96 bg-gray-100 flex flex-col">
                    <div className="bg-purple-700 w-full flex flex-row gap-3 h-12 px-5 py-3">
                        <CloudIcon
                            style={{
                                color: "white"
                            }}
                        />
                        <p class="text-white font-poppins font-semibold">DEEPPURPLE TITLED BOX</p>
                    </div>
                    <div className="px-5 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>
                <div className="md:w-[600px] h-full w-96 bg-gray-100 flex flex-col">
                    <div className="bg-indigo-700 w-full flex flex-row gap-3 h-12 px-5 py-3">
                        <CloudIcon
                            style={{
                                color: "white"
                            }}
                        />
                        <p class="text-white font-poppins font-semibold">INDIGO TITLED BOX</p>
                    </div>
                    <div className="px-5 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >NOTIFICATION  <span className="text-blue-950">BOXES</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-7 md:px-44 md:max-lg:px-16 px-20 mt-10">
                <div className="md:w-[600px] h-full w-96 bg-red-200  border border-red-500 flex flex-row gap-2 px-7 py-4 text-red-500">
                    <CloseIcon
                        style={{
                            color: "#ff9999"
                        }} class="rounded-full h-6 w-6 bg-red-700" />
                    <p class="text-red-600 opacity-100"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="md:w-[600px] h-full w-96 bg-yellow-200  border border-yellow-500 flex flex-row gap-2 px-7 py-4 text-red-500">
                    <p class="flex justify-center items-center rounded-full h-6 w-6 bg-yellow-600 text-xl text-yellow-200" >!</p>
                    <p class="text-yellow-600 opacity-100"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col gap-7 md:px-44 md:max-lg:px-16 px-20 mt-10">
                <div className="md:w-[600px] h-full w-96 bg-green-200  border border-green-500 flex flex-row gap-2 px-7 py-4 ">
                    <DoneIcon
                        style={{
                            color: "#ff9999"
                        }} class="rounded-full h-6 w-6 bg-green-700" />
                    <p class="text-green-600 opacity-100"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="md:w-[600px] h-full w-96 bg-blue-200  border border-blue-500 flex flex-row gap-2 px-7 py-4 ">

                    <p class="flex justify-center items-center rounded-full h-6 w-6 bg-blue-600 text-xl text-blue-200" >i</p>
                    <p class="text-blue-600 opacity-100"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

export default FancyBox