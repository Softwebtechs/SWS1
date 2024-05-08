import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';
import LocalSeeIcon from '@mui/icons-material/LocalSee';

import { SvgIcon } from '@mui/material';
import Countertype2 from './Countertype2';
import Countertype3 from './Countertype3';
import Countertype4 from './Countertype4';
import Countertype5 from './Countertype5';
import Countertype6 from './Countertype6';

const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(0);
    const targetValue = parseInt(initialValue.replace(/[^\d]/g, '')); // Extract numeric part

    useEffect(() => {
        const increment = Math.ceil(targetValue / 100); // Speed of counting

        const interval = setInterval(() => {
            setCount(prevCount => {
                const nextCount = prevCount + increment;
                return nextCount >= targetValue ? targetValue : nextCount;
            });
        }, 50); // Adjust this value for speed

        return () => clearInterval(interval);
    }, [targetValue]);

    return (
        <span className="flex tabular-nums text-black text-3xl font-bold mb-2">
            <span className="supports-[counter-set]:sr-only">{count}</span>
            {count}
        </span>
    );
};

const CounterBlock = ({ initialValue, label, icon }) => {
    return (
        <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-72 lg:max-xl:w-96">
            <div className="flex flex-row gap-2">
                {icon}

                <h2>
                    <Counter initialValue={initialValue} />
                    <span className="inline-flex  text-3xl">{label}</span>
                </h2>
            </div>

        </div>
    );
};

const NumberCounter = () => {
    const iconStyle = { fontSize: "70px", color: "#ff5e14" };
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Number Counter</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Number Counter</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl w-full  font-bold text-orange-500 flex justify-center gap-4 " >Number Counter  <span className="text-blue-950">Type 1</span></h1>
            </div>

            <div className=" xl:flex xl:flex-row flex flex-col gap-4  sm:px-32 px-24 py-10 lg:max-xl:px-56 md:max-lg:mt-80 ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="7254" label="Happy Customers " icon={<SvgIcon component={GroupsIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="1276" label="Awards Won" icon={<SvgIcon component={EmojiEventsIcon} style={iconStyle} />} />
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="386" label="Hours Worked" icon={<SvgIcon component={TimerIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="239" label="Completed Projects" icon={<SvgIcon component={LocalSeeIcon} style={iconStyle} />} />
                </div>

            </div>

            <Countertype2 />
            <Countertype3 />
            <Countertype4 />
            <Countertype5 />
            <Countertype6 />
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

export default NumberCounter