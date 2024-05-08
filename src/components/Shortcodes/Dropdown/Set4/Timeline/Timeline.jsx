import React from 'react'
import { Link } from "react-router-dom";
import Timelinetype1 from './Timelinetype1';
import Timelinetype2 from './Timelinetype2';
import Timelinetype3 from './Timelinetype3';
import Timelinetype4 from './Timelinetype4';
import Timelinetype5 from './Timelinetype5';
import Timelinetype7 from './Timelinetype7';
import Timelinetype6 from './Timelinetype6';

const Timeline = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-3xl tracking-wider">Timeline</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Timeline</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >HORIZONTAL TIMELINE -<span className="text-blue-950">Type 1</span></h1>
            </div>

            <div class="flex flex-col mt-10 gap-7">
                <div class="flex flex-row px-40 gap-96">
                    <div class="bg-gray-200 flex flex-col justify-center items-center gap-7 h-72 w-72">
                        <h1 class="font-bold text-2xl">FEB 2015</h1>
                        <p class="text-gray-500 text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                    <div class="bg-gray-200 flex flex-col justify-center items-center gap-7 h-72 w-72">
                        <h1 class="font-bold text-2xl">MAR 2015</h1>
                        <p class="text-gray-500 text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>

                </div>
                <div class="border-2 border-orange-500 w-full"></div>
                <div class="flex flex-row ml-96 gap-96">
                    <div class="bg-gray-200 flex flex-col justify-center items-center gap-7 h-72 w-72">
                        <h1 class="font-bold text-2xl">APR 2015</h1>
                        <p class="text-gray-500 text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>
                    <div class="bg-gray-200 flex flex-col justify-center items-center gap-7 h-72 w-72">
                        <h1 class="font-bold text-2xl">JAN 2015</h1>
                        <p class="text-gray-500 text-center px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                    </div>

                </div>
            </div>
            {/*type 2*/}
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >HORIZONTAL TIMELINE WITH IMAGE -<span className="text-blue-950">Type 2</span></h1>
            </div>

            <div className="flex flex-col gap-7 px-44 mt-10">
                <div class="flex flex-row gap-10 ">
                    <div class="flex justify-center items-center w-80 h-40">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/htime-2-1.jpg" alt="img" class="h-32 w-32 rounded-full" />
                    </div>
                    <div class="group flex flex-col gap-2 justify-center items-center w-80 h-40">
                        <h1 class="text-2xl  font-bold group-hover:text-orange-500">YOGA TRAINING</h1>
                        <div class="border border-orange-500 w-24"></div>
                        <p class=" text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                    </div>
                    <div class="flex justify-center items-center w-80 h-40">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/htime-2-3.jpg" alt="img" class="h-32 w-32 rounded-full" />
                    </div>
                    <div class="group flex flex-col gap-2 justify-center items-center w-80 h-40">
                        <h1 class="text-2xl  font-bold group-hover:text-orange-500">AEROBICS SESSIONS</h1>
                        <div class="border border-orange-500 w-24"></div>
                        <p class=" text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                    </div>
                </div>
                <div class="border-2 border-black w-[900px] ml-40"></div>
                <div class="flex flex-row gap-10 ">

                    <div class="group flex flex-col gap-2 justify-center items-center w-80 h-40">
                        <h1 class="text-2xl  font-bold group-hover:text-orange-500">WEIGHT TRAINING</h1>
                        <div class="border border-orange-500 w-24"></div>
                        <p class=" text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                    </div>
                    <div class="flex justify-center items-center w-80 h-40">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/htime-2-2.jpg" alt="img" class="h-32 w-32 rounded-full" />
                    </div>

                    <div class="group flex flex-col gap-2 justify-center items-center w-80 h-40">
                        <h1 class="text-2xl  font-bold group-hover:text-orange-500">PERSONAL TRAINERS</h1>
                        <div class="border border-orange-500 w-24"></div>
                        <p class=" text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                    </div>
                    <div class="flex justify-center items-center w-80 h-40">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/htime-2-4.jpg" alt="img" class="h-32 w-32 rounded-full" />
                    </div>
                </div>
            </div>


            <Timelinetype1 />
            <Timelinetype2 />
            <Timelinetype3 />
            <Timelinetype4 />
            <Timelinetype5 />
            <Timelinetype6 />
            <Timelinetype7 />

        </>
    )
}

export default Timeline