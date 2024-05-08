import React, { useState, useEffect } from "react";

const ProgressBar = ({ value, maxValue, color }) => {
    const [progressWidth, setProgressWidth] = useState(0);
    const [labelPosition, setLabelPosition] = useState(0);

    useEffect(() => {
        // Cap the value at 90% of the maximum value
        const cappedValue = Math.min(value, 90);
        // Calculate the width of the progress bar
        const width = (cappedValue / maxValue) * 100;
        setProgressWidth(width);

        // Calculate label position
        const labelWidth = 5; // Adjust this value based on your label width
        setLabelPosition(width - labelWidth);
    }, [value, maxValue]);

    return (
        <div className="relative pt-1">
            <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-white border`}>
                <div
                    style={{ width: `${progressWidth}%` }}
                    className={`p-2 shadow-none flex flex-col whitespace-nowrap justify-center transition-all duration-200 ease-in-out ${color}`}
                ></div>
            </div>
            <div className="absolute -mt-7 top-0 left-0 right-5 text-center text-white font-semibold bg-black w-12 h-7" style={{ left: `${labelPosition}%` }}>{value}%</div>
        </div>
    );
};

const Progresstype2 = () => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    // Simulate value change over time
    useEffect(() => {
        const interval1 = setInterval(() => {
            setValue1(prevValue => (prevValue < 95 ? prevValue + 1 : prevValue));
        }, 100);
        const interval2 = setInterval(() => {
            setValue2(prevValue => (prevValue < 85 ? prevValue + 1 : prevValue));
        }, 100);
        const interval3 = setInterval(() => {
            setValue3(prevValue => (prevValue < 75 ? prevValue + 1 : prevValue));
        }, 100);
        const interval4 = setInterval(() => {
            setValue4(prevValue => (prevValue < 65 ? prevValue + 1 : prevValue));
        }, 100);
        const interval5 = setInterval(() => {
            setValue5(prevValue => (prevValue < 55 ? prevValue + 1 : prevValue));
        }, 100);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);
            clearInterval(interval5);
        };
    }, []);


    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    PROGRESS BAR   <span className="text-blue-950">TYPE 4</span>
                </h1>
            </div>

            <div className=" flex flex-col w-full h-full gap-7 md:px-44 px-10 ">
                <div className="flex flex-col md:flex md:flex-row md:gap-56 gap-5 mt-14 w-full h-full">
                    <div>
                        <h1 className="text-l font-semibold  font-poppins text-gray-500">WORDPRESS</h1>
                    </div>
                    <div className="container mx-auto ">
                        <ProgressBar value={value1} maxValue={100} color="bg-yellow-500" />
                    </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:gap-40 gap-5 w-full h-full">
                    <div>
                        <h1 className="text-l font-semibold w-40 font-poppins text-gray-500">CREATIVE TEAM</h1>
                    </div>
                    <div className="container mx-auto ">
                        <ProgressBar value={value2} maxValue={100} color="bg-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:gap-[200px] gap-5 w-full h-full">
                    <div>
                        <h1 className="text-l font-semibold  font-poppins text-gray-500">BIGCOMMERCE</h1>
                    </div>
                    <div className="container mx-auto ">
                        <ProgressBar value={value3} maxValue={100} color="bg-purple-500" />
                    </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:gap-[200px] gap-5 w-full h-full">
                    <div>
                        <h1 className="text-l font-semibold  font-poppins text-gray-500">PROGRAMMERS</h1>
                    </div>
                    <div className="container mx-auto ">
                        <ProgressBar value={value4} maxValue={100} color="bg-teal-300" />
                    </div>
                </div>
                <div className="flex flex-col md:flex md:flex-row md:gap-24 gap-5 w-full h-full">
                    <div>
                        <h1 className="text-l font-semibold w-56 font-poppins text-gray-500">CONTENT DEVELOPMENT</h1>
                    </div>
                    <div className="container mx-auto ">
                        <ProgressBar value={value5} maxValue={100} color="bg-pink-600" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Progresstype2;
