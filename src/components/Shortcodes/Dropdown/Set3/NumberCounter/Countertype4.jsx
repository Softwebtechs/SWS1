import React from 'react'
import { useState, useEffect } from 'react';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TimerIcon from '@mui/icons-material/Timer';
import LocalSeeIcon from '@mui/icons-material/LocalSee';

import { SvgIcon } from '@mui/material';


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
        <span className="flex tabular-nums text-black text-3xl  mb-2">
            <span className="supports-[counter-set]:sr-only">{count}</span>
            {count}+
        </span>
    );
};

const CounterBlock = ({ initialValue, label, icon }) => {
    return (
        <div className="group flex flex-col    h-44 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">

            <div class="flex flex-col gap-2 border-4 rounded-full w-32 h-32 border-gray-200">
                <div className="flex absolute  bg-gray-500 rounded-full h-12 w-12 justify-center items-center">
                    {icon}
                </div>

                <h2 class="flex mt-12 justify-center items-center">
                    <Counter initialValue={initialValue} />
                </h2>


            </div>
            <span className="inline-flex  font-semibold text-center text-l">{label}</span>







        </div >
    );
};

const Countertype3 = () => {
    const iconStyle = { fontSize: "40px", color: "white" };
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins m">

                <h1 className="md:text-5xl text-3xl w-full  font-bold text-orange-500 flex justify-center gap-4 " >Number Counter  <span className="text-blue-950">Type 4</span></h1>
            </div>

            <div className=" xl:flex xl:flex-row flex flex-col gap-4  sm:px-44 px-24 py-10 lg:max-xl:px-56 md:max-lg:mt-80 ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="10000" label="HAPPY CUSTOMERS " icon={<SvgIcon component={GroupsIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="1892" label="CARS INSURED" icon={<SvgIcon component={EmojiEventsIcon} style={iconStyle} />} />
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="250" label="IN_HOUSE AGENTS " icon={<SvgIcon component={TimerIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="1546" label="CLAMIS DONE" icon={<SvgIcon component={LocalSeeIcon} style={iconStyle} />} />
                </div>

            </div>
        </>
    )
}

export default Countertype3