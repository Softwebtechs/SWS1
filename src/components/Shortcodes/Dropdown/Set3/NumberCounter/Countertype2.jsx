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
        <span className="flex tabular-nums text-orange-500 text-5xl font-bold mb-2">
            <span className="supports-[counter-set]:sr-only">{count}</span>
            {count}
        </span>
    );
};

const CounterBlock = ({ initialValue, label, icon }) => {
    return (
        <div className="group flex flex-col  gap-4  h-56 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
            <div className="flex group-hover:bg-orange-500 w-24 group-hover:border-2 group-hover:border-black group-hover:p-2 h-40 rounded-full justify-center items-center gap-2">
                {icon}
            </div>
            <h2 class="flex justify-center items-center flex-col gap-4">
                <Counter initialValue={initialValue} />
                <div className="border-2 border-black w-10 group-hover:w-16 group-hover:border-orange-500"></div>
                <span className="inline-flex  text-center text-3xl">{label}</span>
            </h2>


        </div>
    );
};

const Countertype2 = () => {
    const iconStyle = { fontSize: "70px", color: "#ff5e14" };
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins m">

                <h1 className="md:text-5xl text-3xl w-full  font-bold text-orange-500 flex justify-center gap-4 " >Number Counter  <span className="text-blue-950">Type 2</span></h1>
            </div>

            <div className=" xl:flex xl:flex-row flex flex-col gap-4  sm:px-44 px-24 py-10 lg:max-xl:px-56 md:max-lg:mt-80 ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="7254" label=" Customers " icon={<SvgIcon component={GroupsIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="1276" label="Awards " icon={<SvgIcon component={EmojiEventsIcon} style={iconStyle} />} />
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-2">
                    <CounterBlock initialValue="386" label="Hours " icon={<SvgIcon component={TimerIcon} style={iconStyle} />} />
                    <CounterBlock initialValue="239" label=" Projects" icon={<SvgIcon component={LocalSeeIcon} style={iconStyle} />} />
                </div>

            </div>
        </>
    )
}

export default Countertype2