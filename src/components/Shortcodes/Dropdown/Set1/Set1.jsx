import React from 'react'
import { Link } from "react-router-dom";

function Set1() {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Blockquotes</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Blockquotes</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >BLOCKQUOTE <span className="text-blue-950">TYPE 1</span></h1>
                <div className=" bg-gray-100 md:w-[1200px] w-96 md:h-64 h-96 md:px-24 px-5">
                    <p class="mt-10 text-gray-700  text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci. Etiam dictum, nunc id feugiat cursus, nulla orci pretium nisl, eget lacinia felis enim et libero."</p>
                    <p class="text-right text-gray-700 mt-10">– Design Themes</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >BLOCKQUOTE <span className="text-blue-950">TYPE 2</span></h1>
            </div>
            <div className="border b-2 mt-20 md:ml-32 md:mr-32 ml-10 mr-14 "></div>
            <div class="md:px-32 px-10">
                <p class="mt-10 text-gray-700 text-2xl" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci. Etiam dictum, nunc id feugiat cursus, nulla orci pretium nisl, eget lacinia felis enim et libero.</p>
            </div >
            <div className="border b-2 mt-20 md:mr-32 md:ml-32 ml-10 mr-14 "></div>
            <div className="bg-gray-300 h-12 w-40 flex justify-center items-center md:ml-[1230px] ml-72">
                <p class=" text-gray-700 ">– Design Themes</p>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >BLOCKQUOTE <span className="text-blue-950">TYPE 3</span></h1>
                <div className="md:px-32 px-10">
                    <p class="mt-10 text-gray-700  text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci. Etiam dictum, nunc id feugiat cursus, nulla orci pretium nisl, eget lacinia felis enim et libero."</p>
                    <p class="text-right text-gray-700 mt-10">– Design Themes</p>
                </div>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >BLOCKQUOTE <span className="text-blue-950">TYPE 4</span></h1>
                <div className=" bg-orange-500 md:w-[1200px] w-96 md:h-64 h-96 md:px-2 px-2">
                    <div class=" border-dashed md:h-[240px] h-[360px]  mt-2 border-white border-2">
                        <p class="text-center text-white font-bold text-3xl mt-7">"</p>
                        <p class="mt-2 text-white text-center font-roboto text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci. Etiam dictum, nunc id feugiat cursus, nulla orci pretium nisl, eget lacinia felis enim et libero."</p>
                        <p class="text-center text-white font-bold text-3xl mt-3">"</p>
                        <p class="text-center text-white mt-2">– MARATHA SwINGSTON–</p>
                        <p class="text-center text-white mt-3 text-sm">New Times Food-critic</p>
                    </div>
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

export default Set1