import React from 'react'
import { Link } from "react-router-dom";
import StandardTab from './StandardTab';
import FramedTab from './FramedTab';
import Tabtype1 from './Tabtype1';
import Tabtype2 from './Tabtype2';
import Tabtype3 from './Tabtype3';
import Tabtype4 from './Tabtype4';
import Tabtype5 from './Tabtype5';
import Tabtype5B from './Tabtype5B';
import Tabtype7 from './Tabtype7';
import Tabtype8 from './Tabtype8';
import Tabtype9 from './Tabtype9';
import Tabtype6 from './Tabtype6';
import VerticalTab from './Verticaltab';
import Verticaltabtype1 from './Verticaltabtype1';
import Verticaltabtype2 from './Verticaltabtype2';
import Verticaltabtype4 from './Verticaltabtype4';
import Standardtoggle from './Standardtoggle';
import Framedtoggle from './Framedtoggle';
import Toogletype1 from './Toggletype1';
import Toogletype2 from './Toogletype2';
import Toggletype3 from './Toggletype3';
import Toggletype4 from './Toggletype4';

const TabToggle = () => {
    return (
        <> <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

            <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Tabs & Toggles</h1>
            <div className='text-white md:flex-row flex-col'>
                <div className="flex flex-row gap-4 ">
                    <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                        <Link to="/">Home </Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                        <Link to="shortcodes">Shortcodes</Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 tracking-wider  ">
                        Tabs & Toggles</span>
                </div>
            </div>
        </div>
            <StandardTab />
            <FramedTab />
            <Tabtype1 />
            <Tabtype2 />
            <Tabtype3 />
            <Tabtype4 />
            <Tabtype5 />
            <Tabtype5B />
            <Tabtype6 />
            <Tabtype7 />
            <Tabtype8 />
            <Tabtype9 />
            <VerticalTab />
            <Verticaltabtype1 />
            <Verticaltabtype2 />
            <Verticaltabtype4 />
            <Standardtoggle />
            <Framedtoggle />
            <Toogletype1 />
            <Toogletype2 />
            <Toggletype3 />
            <Toggletype4 />

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

export default TabToggle