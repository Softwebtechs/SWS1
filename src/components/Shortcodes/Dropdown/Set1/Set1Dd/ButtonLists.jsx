import React from 'react'
import { Link } from "react-router-dom";
import BuildIcon from '@mui/icons-material/Build';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ArticleIcon from '@mui/icons-material/Article';

const ButtonLists = () => {
    const paperplane = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

    )
    const arrow = (
        <svg class="h-4 w-4 text-black border rounded-full bg-white " width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
    )

    const paperplane1 = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

    )
    const paperplane3 = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:text-white text-orange-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>

    )

    const leaf = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M20 11c0-4.9-3.499-9.1-8.32-9.983L11.5.983l-.18.033a10.15 10.15 0 0 0-.82 19.779V22a1 1 0 1 0 2 0v-1.205A10.147 10.147 0 0 0 20 11m-7.5 7.7v-2.993l4.354-4.354a.5.5 0 0 0-.707-.707L12.5 14.293v-3.586l2.354-2.354a.5.5 0 0 0-.707-.707L12.5 9.293V6a1 1 0 1 0-2 0v3.293L8.854 7.646a.5.5 0 0 0-.707.707l2.354 2.354v3.586l-3.646-3.646a.5.5 0 0 0-.707.707l4.354 4.354V18.7A8.144 8.144 0 0 1 11.5 3.019a8.145 8.145 0 0 1 1 15.681" /></svg>
    )
    const check = (
        <svg class=" w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>
    )


    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Button & Lists</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Button & Lists</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >BUTTON  <span className="text-blue-950">TYPE</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full  mt-10 px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        {paperplane}
                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-blue-950">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-blue-950">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-blue-950">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-blue-950">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        {paperplane1}
                    </button>
                </div>

            </div>

            {/* 2nd button*/}

            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <div className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </div>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                </div>

            </div>
            {/* 3rd button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-blue-950">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-blue-950">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <div className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-blue-950">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </div>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-blue-950">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                </div>

            </div>

            {/* 4th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-md border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-md border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-md border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                </div>

                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500 rounded-md">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500 rounded-md">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500 rounded-md">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500 rounded-md">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </button>
                </div>

            </div>

            {/* 5th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-full border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-10 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-12 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-full border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane3}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center   h-10 w-[150px] bg-orange-500 hover:bg-blue-950">
                        <div class="w-[80px] flex  justify-center items-center h-10">
                            <p className="text-xs group-hover:text-white text-center text-white">Click Here</p>
                        </div>
                        <div class="   h-10 ml-7 flex  justify-center items-center bg-black w-14">
                            {arrow}
                        </div>

                    </button>
                    <button className=" group flex flex-row justify-center items-center   h-12 w-[170px] bg-orange-500 hover:bg-blue-950">
                        <div class="w-[150px] flex  justify-center items-center h-12">
                            <p className="text-s group-hover:text-white text-center text-white">Click Here</p>
                        </div>
                        <div class="   h-12 ml-7 flex  justify-center items-center bg-black w-20">
                            {arrow}
                        </div>

                    </button>
                    <button className=" group flex flex-row justify-center items-center   h-16 w-[210px] bg-orange-500 hover:bg-blue-950">
                        <div class="w-[170px] flex  justify-center items-center h-16">
                            <p className="text-l group-hover:text-white text-center text-white">Click Here</p>
                        </div>
                        <div class="   h-16 ml-7 flex  justify-center items-center bg-black w-20">
                            {arrow}
                        </div>

                    </button>
                    <button className=" group flex flex-row  justify-center items-center h-15 w-[250px] bg-orange-500 hover:bg-blue-950">
                        <div class="w-[100px] flex  justify-center items-center h-16">
                            <p className=" group-hover:text-white  text-xl text-white">Click Here</p>
                        </div>
                        <div class="   h-16 ml-14 flex  justify-center items-center bg-black w-24">
                            {arrow}
                        </div>

                    </button>

                </div>

            </div>

            {/*6th Button*/}

            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xs text-white">Click Here</p>
                        {paperplane}
                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-l text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">
                        <p className="text-2xl text-white">Click Here</p>
                        {paperplane}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        {paperplane1}
                    </button>
                </div>

            </div>

            {/*7th Button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className=" group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        {paperplane1}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                        {paperplane1}
                    </button>
                </div>

                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-md border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-md border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-md border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                </div>


            </div>
            {/**8th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-full border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-full border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>

                        {paperplane3}
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-xs text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-l text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-xl text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-2xl text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-xs text-white">Click Here</p>

                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-l text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-xl text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <p className="text-2xl text-white">Click Here</p>

                    </button>
                </div>



            </div>
            {/*9th Button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">


                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-l group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className=" group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-xl group-hover:text-white ">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-2xl group-hover:text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-l group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className=" group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-xl group-hover:text-white ">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <p className="text-2xl group-hover:text-white">Click Here</p>

                    </button>
                </div>



            </div>

            {/*10th */}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">


                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-full border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-full border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-full border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-full border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl text-white">Click Here</p>


                    </button>
                </div>
            </div>

            {/*11th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">

                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-40 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl text-white">Click Here</p>


                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-orange-500 hover:bg-blue-950">
                        {paperplane}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl text-white">Click Here</p>


                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                    </button>
                    <div className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                        <div class="border h-16 border-zinc-400"></div>
                        {paperplane1}
                    </div>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l group-hover:text-white text-black">Click Here</p>
                    </button>
                    <div className="flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl group-hover:text-white ">Click Here</p>
                    </div>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        {paperplane1}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl group-hover:text-white">Click Here</p>
                    </button>
                </div>
            </div>
            {/*12th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-full border-orange-500 hover:bg-orange-500  ">
                        {paperplane3}
                        <div class="border h-10 border-zinc-400"></div>
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-full border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-12 border-zinc-400"></div>
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-full border border-orange-500  hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-full border-orange-500 hover:bg-orange-500">
                        {paperplane3}
                        <div class="border h-16 border-zinc-400"></div>
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>
                    </button>
                </div>
            </div>
            {/* 13th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border rounded-full border-orange-500 hover:bg-orange-500  ">
                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-full border border-orange-500  hover:bg-orange-500">
                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border rounded-full border-orange-500 hover:bg-orange-500">
                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>

                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32 rounded-md bg-orange-500 hover:bg-blue-950">

                        <p className="text-xs text-white">Click Here</p>

                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-md bg-orange-500 hover:bg-blue-950">

                        <p className="text-l text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-md bg-orange-500 hover:bg-blue-950">

                        <p className="text-xl text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-md bg-orange-500 hover:bg-blue-950">

                        <p className="text-2xl text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className=" group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        <p className="text-2xl group-hover:text-white">Click Here</p>

                    </button>
                </div>
            </div>
            {/*14th  button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className=" group flex flex-row justify-center items-center  gap-4 h-10 w-32 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xs group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40 bg-gray-200 hover:bg-orange-500">
                        <p className="text-l group-hover:text-white text-black">Click Here</p>

                    </button>
                    <button className=" group flex flex-row justify-center items-center gap-4 h-16 w-44 bg-gray-200 hover:bg-orange-500">
                        <p className="text-xl group-hover:text-white ">Click Here</p>

                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px] bg-gray-200 hover:bg-orange-500">
                        <p className="text-2xl group-hover:text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">

                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">

                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">

                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">

                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="group flex flex-row justify-center items-center gap-4 h-10 w-32 border border-orange-500 hover:bg-orange-500  ">

                        <p className="text-xs  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-12 w-40  border border-orange-500 hover:bg-orange-500">

                        <p className="text-l  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-44  border border-orange-500  hover:bg-orange-500">

                        <p className="text-xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                    <button className="group flex flex-row justify-center items-center gap-4 h-16 w-[200px]  border border-orange-500 hover:bg-orange-500">

                        <p className="text-2xl  group-hover:text-white text-orange-500">Click Here</p>


                    </button>
                </div>
            </div>
            {/*15th button*/}
            <div className="md:flex md:flex-row flex flex-col w-full md:h-[450px] h-full   px-40 md:gap-40 gap-10 md:max-lg:gap-10 md:max-lg:px-5 lg:max-xl:gap-14 lg:max-xl:px-10">
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32   rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">
                        {leaf}
                        <p className="text-xs text-white">Click Here</p>

                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">
                        {leaf}
                        <p className="text-l text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">
                        {leaf}
                        <p className="text-xl text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">
                        {leaf}
                        <p className="text-2xl text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32   rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-xs text-white">Click Here</p>

                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-l text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-xl text-white">Click Here</p>

                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-2xl text-white">Click Here</p>

                    </button>
                </div>
                <div className="flex flex-col w-64 h-[400px] gap-9 bg-white">
                    <button className="flex flex-row justify-center items-center gap-4 h-10 w-32   rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-xs text-white">Click Here</p>
                        {leaf}
                    </button>
                    < button className="flex flex-row justify-center items-center gap-4 h-12 w-40 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-l text-white">Click Here</p>
                        {leaf}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-44 rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-xl text-white">Click Here</p>
                        {leaf}
                    </button>
                    <button className="flex flex-row justify-center items-center gap-4 h-16 w-[200px] rounded-tl-lg rounded-br-lg hover:rounded-tr-lg hover:rounded-bl-lg bg-orange-500 hover:bg-blue-950">

                        <p className="text-2xl text-white">Click Here</p>
                        {leaf}

                    </button>
                </div>

            </div>

            {/* 2nd Content*/}
            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >COLOURED  <span className="text-blue-950">BUTTON</span></h1>
            </div>
            <div className="md:flex md:flex-row flex flex-col w-full md:px-40 px-16 py-7 gap-7 md:h-40 h-full ">
                <div className=" flex flex-row border border-blue-950 w-96 md:max-lg:w-80 md:max-lg:h-32 lg:max-xl:h-[120px] rounded-md h-24 ">
                    <div className="flex justify-center items-center h-24 w-20 md:max-lg:h-32 md:max-lg:w-16 lg:max-xl:h-[120px] bg-blue-950"><BuildIcon style={{
                        color: "white",
                        height: "50px",
                        width: "50px"
                    }} /></div>
                    <div class=" mt-4 ml-10">
                        <h1 class="text-xl">GET AN</h1>
                        <h2 class="text-xl font-bold">INSTANT Quote</h2>
                    </div>

                </div>
                <div className="flex flex-row border border-orange-500 w-96 md:max-lg:w-80 md:max-lg:h-32 lg:max-xl:h-[120px] rounded-md h-24 ">
                    <div className=" flex justify-center items-center h-24 w-20 md:max-lg:h-32 md:max-lg:w-16 lg:max-xl:h-[120px] bg-orange-500">
                        <BorderColorIcon style={{
                            color: "white",
                            height: "50px",
                            width: "50px"
                        }} />
                    </div>
                    <div class=" mt-4 ml-10">
                        <h1 class="text-xl">Online Billing &</h1>
                        <h2 class="text-xl font-bold">PAYMENTS</h2>
                    </div>

                </div>
                <div className="flex flex-row border border-green-500 w-96 md:max-lg:w-80 md:max-lg:h-32 lg:max-xl:h-[120px] rounded-md h-24 ">
                    <div className="flex justify-center items-center h-24 w-20 md:max-lg:h-32 md:max-lg:w-16 lg:max-xl:h-[120px] bg-green-500">
                        <ArticleIcon style={{
                            color: "white",
                            height: "50px",
                            width: "50px"
                        }} />
                    </div>
                    <div class=" mt-4 ml-10">
                        <h1 class="text-xl">File</h1>
                        <h2 class="text-xl font-bold">INSURANCE CLAIM</h2>
                    </div>

                </div>
            </div>
            {/* 3rd Content*/}
            <div className="flex flex-col justigy-center items-center mt-10 md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ORDERED  <span className="text-blue-950">LISTS</span></h1>
            </div>
            <div className="md:flex md:flex-row flex flex-col w-full md:px-32 px-16 md:max-lg:px-14 lg:max-xl:px-14  gap-7 md:h-56 h-full lg:max-xl:h-80 md:max-lg:h-80  ">
                <div className="flex flex-col   h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-gray-700 list-decimal">
                        <li class="py-4">Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>
                <div className="flex flex-col h-56 w-[400px] lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-gray-700 ">
                        <li class="py-4">01.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>02.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">03.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">04.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>
                <div className="flex flex-col  h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-gray-700 ">
                        <li class="py-4">a.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>b.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">c.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">d.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>

            </div>
            <div className="md:flex md:flex-row flex flex-col w-full md:px-32 px-16 md:max-lg:px-14 lg:max-xl:px-14  gap-7 md:h-56 h-full lg:max-xl:h-80 md:max-lg:h-80  ">
                <div className="flex flex-col   h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-blue-700 ">
                        <li class="py-4">i.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>ii.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">iii.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">iv.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>
                <div className="flex flex-col h-56 w-[400px] lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-green-700 ">
                        <li class="py-4">A.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>B.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">C.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">D.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>
                <div className="flex flex-col  h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ol class="text-pink-700 list-[upper-roman] ">
                        <li class="py-4">Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ol>

                </div>

            </div>

            {/*Unorderd Lists*/}
            <div className="flex flex-col justigy-center items-center mt-10 md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >UNORDERED  <span className="text-blue-950">LISTS</span></h1>
            </div>
            <div className="md:flex md:flex-row flex flex-col w-full md:px-32 px-16 md:max-lg:px-14 lg:max-xl:px-14  gap-7 md:h-56 h-full lg:max-xl:h-80 md:max-lg:h-80  ">
                <div className="flex flex-col   h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700 list-disc ">
                        <li class="py-4">Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

                </div>
                <div className="flex flex-col h-56 w-[400px] lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700  ">
                        <li class="py-4 flex flex-row gap-4">{check} <span>Lorem ipsum dolor sit amet, adipiscing elit.</span></li>

                        <li class="flex flex-row gap-4">{check}Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4 flex flex-row gap-4">{check} Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="flex flex-row gap-4">{check} Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

                </div>
                <div className="flex flex-col  h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700 list-disc ">
                        <li class="py-4">a.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>b.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">c.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">d.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

                </div>

            </div>
            <div className="md:flex md:flex-row flex flex-col w-full md:px-32 px-16 md:max-lg:px-14 lg:max-xl:px-14  gap-7 md:h-56 h-full lg:max-xl:h-80 md:max-lg:h-80  ">
                <div className="flex flex-col   h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700 list-disc ">
                        <li class="py-4">Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

                </div>
                <div className="flex flex-col h-56 w-[400px] lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700  ">
                        <li class="py-4 flex flex-row gap-4">{check} <span>Lorem ipsum dolor sit amet, adipiscing elit.</span></li>

                        <li class="flex flex-row gap-4">{check}Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4 flex flex-row gap-4">{check} Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="flex flex-row gap-4">{check} Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

                </div>
                <div className="flex flex-col  h-56 w-96 lg:max-xl:h-80 lg:max-xl:w-64 md:max-lg:h-80 md:max-lg:w-56">
                    <ul class="text-gray-700 list-disc ">
                        <li class="py-4">a.Lorem ipsum dolor sit amet, adipiscing elit.</li>

                        <li>b.Duis condimentum purus non sodales rhoncus.</li>
                        <li class="py-4">c.Proin sed magna feugiat metus rhoncus tincidunt id</li>
                        <li class="">d.Phasellus vestibulum lorem vel lectus volutpat vel</li>

                    </ul>

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

export default ButtonLists;