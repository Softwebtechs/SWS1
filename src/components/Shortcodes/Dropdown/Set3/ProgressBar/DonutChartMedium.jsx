import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ percentage }) => {
    const [offset, setOffset] = useState(0);

    const strokeWidth = 6; // Increased strokeWidth for thicker bar
    const radius = 80; // Increased radius for a larger circle
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - percentage) / 100) * circumference;
        setOffset(progressOffset);
    }, [percentage, circumference]);

    return (
        <div className="text-center">
            <svg className="w-44 h-44">
                {/* Background Circle */}
                <circle
                    className="progress-ring__circle"
                    stroke="#d2d3d4"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                />
                {/* Progress Circle */}
                <circle
                    className="progress-ring__circle"
                    stroke="#3182ce" // Changed strip color to blue
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    fill="transparent"
                    r={radius}
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                />
                {/* Percentage Text */}
                <text
                    className="progress-ring__text"
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#333"
                    fontSize="30" // Increased font size
                    fontWeight="bold" // Added fontWeight for emphasis
                >
                    {percentage}%
                </text>
            </svg>
            <div className="flex flex-col ">
                <h1 class="text-2xl text-black font-bold font-poppins">Branches</h1>
                <p class="text-gray-500 text-l">Description</p>
            </div>
        </div>
    );
};

const DonutChartMedium = () => {
    const [percentages, setPercentages] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const intervals = percentages.map((_, index) => {
            const targetPercentage = (index * 10) + 10 * 6; // Calculate target percentage for each bar
            return setInterval(() => {
                setPercentages(prevPercentages => {
                    const newPercentages = [...prevPercentages];
                    newPercentages[index] = newPercentages[index] < targetPercentage ? newPercentages[index] + 1 : targetPercentage;
                    return newPercentages;
                });
            }, 50);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    DONUT CHART   <span className="text-blue-950">MEDIUM</span>
                </h1>
            </div>
            <div className="md:flex md:flex-row flex flex-col md:gap-32 gap-5  md:px-44 px-14 py-10">

                {percentages.map((percentage, index) => (
                    <CircularProgressBar key={index} percentage={percentage} />

                ))}


            </div>

        </>
    );
};

export default DonutChartMedium;
