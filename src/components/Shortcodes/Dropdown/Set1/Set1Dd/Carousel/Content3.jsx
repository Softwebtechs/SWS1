import React from 'react'
import { useState } from "react";

const Content3 = () => {
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick2 = () => {
        setIsClicked2(!isClicked);
    };
    const [isClicked3, setIsClicked3] = useState(false);

    const handleClick3 = () => {
        setIsClicked3(!isClicked);
    };
    const [isClicked4, setIsClicked4] = useState(false);

    const handleClick4 = () => {
        setIsClicked4(!isClicked);
    };
    const [isClicked5, setIsClicked5] = useState(false);

    const handleClick5 = () => {
        setIsClicked5(!isClicked);
    };
    const [isClicked6, setIsClicked6] = useState(false);

    const handleClick6 = () => {
        setIsClicked6(!isClicked);
    };
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const [isClicked7, setIsClicked7] = useState(false);

    const handleClick7 = () => {
        setIsClicked7(!isClicked);
    };
    const [isClicked8, setIsClicked8] = useState(false);

    const handleClick8 = () => {
        setIsClicked8(!isClicked);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-32">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >CLIENT TESTIMONIAL <span className="text-blue-950">CAROUSEL</span></h1>
            </div>

            <div className="flex flex-col lg:flex lg:flex-row w-full lg:h-[550px] h-full mt-20  bg-gray-100">
                <div className="flex flex-col lg:w-1/2 w-full lg:h-[550px] h-full bg-orange-600 py-14 gap-5">
                    <h1 className="text-white text-5xl font-bold text-right mr-16">WHAT OUR CLIENTS SAY</h1>
                    <h2 className="text-white text-5xl font-bold text-right mr-16">ABOUT US</h2>
                    <p class="text-white text-l ml-44 mt-7 text-right mr-16">"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra"
                    </p>
                    <p class="text-white text-l text-right mr-16 mt-16 ">MIKE SHINODA</p>
                    <p class="text-white text-l text-right mr-16  ">Company Executive Officer</p>
                </div>
                <div className="relative flex flex-col lg:justify-center lg:items-center justify-center items-center gap-4 lg:w-1/2 w-full lg:h-[550px] h-[600px]  bg-black opacity-80">
                    <div className="flex flex-row gap-4">
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-4.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked ? 'border-orange-500' : ''}`} onClick={handleClick} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-5.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked2 ? 'border-orange-500' : ''}`} onClick={handleClick2} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-6.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked3 ? 'border-orange-500' : ''}`} onClick={handleClick3} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-7.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked4 ? 'border-orange-500' : ''}`} onClick={handleClick4} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-8.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked5 ? 'border-orange-500' : ''}`} onClick={handleClick5} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-15.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked6 ? 'border-orange-500' : ''}`} onClick={handleClick6} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-16.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked7 ? 'border-orange-500' : ''}`} onClick={handleClick7} />
                        </div>
                        <div className="h-32 w-32 bg-gray-100  cursor-pointer" >
                            <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-17.jpg" alt="img" class={`border-8 border-gray-400 ${isClicked8 ? 'border-orange-500' : ''}`} onClick={handleClick8} />
                        </div>
                    </div>
                </div>

                <div className="h-10 w-10 bg-white absolute sm:left-[740px] lg:max-xl:left-[580px] md:max-lg:left-[400px] md:max-lg:mt-[490px] sm:mt-[250px] left-[250px] mt-[630px] sm:max-md:mt-[500px] sm:max-md:left-[300px] ">
                    <h1 className="text-center text-orange-500 font-roboto text-6xl mt-3">"</h1>

                </div>
            </div>
        </>
    )
}

export default Content3