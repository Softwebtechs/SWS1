import React, { useState, useEffect } from "react";

const ProgressBar = ({ defaultValue, maxValue, color }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        // Calculate the width of the progress bar
        const width = (defaultValue / maxValue) * 100;
        // Cap the width at 90% of the maximum value
        const cappedWidth = Math.min(width, 90);
        setProgressWidth(cappedWidth);
    }, [defaultValue, maxValue]);

    const generateGridBackground = () => {
        return `
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 4px, transparent 4px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 5px, transparent 4px);
            background-size: 10px 10px;
            background-position: 0 0, 0 0;
            background-color: ${color};
        `;
    };

    return (
        <div className="relative pt-1">
            <style>
                {`
                .bg-grid {
                    ${generateGridBackground()}
                }
                `}
            </style>
            <div className="overflow-hidden h-2.5 mb-4 text-xs flex rounded bg-white border border-black ">
                <div
                    style={{ width: `${progressWidth}%` }}
                    className={`p-2 shadow-none flex flex-col whitespace-nowrap justify-center transition-all duration-500 ease-in-out bg-grid ${color}`}
                ></div>
            </div>
        </div>
    );
};

const StrippedBar = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    STRIPPED  <span className="text-blue-950">BAR</span>
                </h1>
            </div>
            <div className="md:flex md:flex-row flex flex-col w-full h-full md:px-40 px-10 ">
                <div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold mt-8 font-poppins">Wordpress-90%</h1>
                        <ProgressBar defaultValue={90} maxValue={100} color="bg-pink-700" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">Html5 / CSS3-85%</h1>
                        <ProgressBar defaultValue={85} maxValue={100} color="bg-purple-900" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">BigCommerce-75%</h1>
                        <ProgressBar defaultValue={75} maxValue={100} color="bg-blue-500" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">Programmers-90%</h1>
                        <ProgressBar defaultValue={90} maxValue={100} color="bg-rose-600" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:w-1/2 w-full h-full">
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold mt-8 font-poppins">Print Design-90%</h1>
                        <ProgressBar defaultValue={90} maxValue={100} color="bg-lime-600" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">Html5 / CSS3-85%</h1>
                        <ProgressBar defaultValue={85} maxValue={100} color="bg-orange-300" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">BigCommerce-75%</h1>
                        <ProgressBar defaultValue={75} maxValue={100} color="bg-teal-300" />
                    </div>
                    <div className="container mx-auto px-4">
                        <h1 className="text-l font-semibold  font-poppins">Programmers-90%</h1>
                        <ProgressBar defaultValue={90} maxValue={100} color="bg-amber-600" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StrippedBar;
