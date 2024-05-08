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
            <div className={`overflow-hidden h-7 mb-4 text-xs flex rounded bg-black border`}>
                <div
                    style={{ width: `${progressWidth}%` }}
                    className={`p-2 shadow-none flex flex-col whitespace-nowrap justify-center transition-all duration-200 ease-in-out ${color}`}
                ></div>
            </div>
            <div className="absolute mt-12 top-0 left-0 right-5 text-center text-sm text-black font-semibold  " style={{ left: `${labelPosition}%` }}>{value}%</div>
        </div>
    );
};

const Progresstype5 = () => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);


    // Simulate value change over time
    useEffect(() => {
        const interval1 = setInterval(() => {
            setValue1(prevValue => (prevValue < 90 ? prevValue + 1 : prevValue));
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


        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
            clearInterval(interval4);

        };
    }, []);


    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    PROGRESS BAR   <span className="text-blue-950">TYPE 5</span>
                </h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-5 w-full h-full md:px-40 px-10 ">
                <div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l text-white font-semibold  font-poppins">Wordpress</h1>
                        <ProgressBar value={value1} maxValue={100} color="bg-gray-500" />
                    </div>

                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white ">CREATIVE TEAM</h1>
                        <ProgressBar value={value2} maxValue={100} color="bg-gray-500" />
                    </div>
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">PHP</h1>
                        <ProgressBar value={value3} maxValue={100} color="bg-gray-500" />
                    </div>
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">Development</h1>
                        <ProgressBar value={value4} maxValue={100} color="bg-gray-500" />
                    </div>


                </div>
                <div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">Html5 / CSS3</h1>
                        <ProgressBar value={value1} maxValue={100} color="bg-gray-500" />
                    </div>

                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">Html5 / CSS3</h1>
                        <ProgressBar value={value2} maxValue={100} color="bg-gray-500" />
                    </div>
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">BigCommerce</h1>
                        <ProgressBar value={value3} maxValue={100} color="bg-gray-500" />
                    </div>
                    <div className="container mx-auto px-4 bg-black mt-4">
                        <h1 className="text-l font-semibold w-40 font-poppins text-white">Programmers</h1>
                        <ProgressBar value={value4} maxValue={100} color="bg-gray-500" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Progresstype5;
