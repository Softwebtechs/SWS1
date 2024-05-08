import React from 'react'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Pricingtype1 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl w-full  font-bold text-orange-500 flex justify-center gap-4 " >PRICING TABLE -  <span className="text-blue-950">MINIMAL</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="flex flex-col gap-7 group  border border-gray-200 h-[600px] w-[400px] md:max-lg:h-full justify-center items-center  ">

                    <div className=" rotate-45 rounded bg-gray-200 group-hover:bg-orange-500 flex justify-center items-center h-20 w-20  ">
                        <MilitaryTechIcon style={{
                            color: "black",
                            height: "60px",
                            width: "60px",
                        }}
                            class="-rotate-45" />
                    </div>
                    <h1 className="text-xl font-poppins font-semibold">Heading</h1>
                    <p className="">Torquent per conubia nostra</p>
                    <div className="bg-gray-200 w-full h-40 flex flex-col justify-center items-center gap-4 group-hover:bg-orange-500">
                        <p>Starting At</p>
                        <p className="text-4xl font-bold">$3.99 <span className="text-sm">/ MO</span></p>
                    </div>
                    <button className="flex justify-center items-center bg-gray-200 h-14 w-40 group-hover:text-white group-hover:bg-orange-500 ">Get Started Now</button>

                </div>
                <div className="flex group flex-col justify-center items-center gap-7 border border-gray-200 h-[600px] w-[400px] md:max-lg:h-full   ">

                    <div className=" rotate-45 rounded  bg-orange-500 flex justify-center items-center h-20 w-20  ">
                        <EmojiEventsIcon style={{
                            color: "black",
                            height: "60px",
                            width: "60px",
                        }}
                            class="-rotate-45" />
                    </div>
                    <h1 className="text-xl font-poppins font-semibold">Heading</h1>
                    <p className="">Torquent per conubia nostra</p>
                    <div className=" w-full h-40 flex flex-col justify-center items-center gap-4 bg-orange-500">
                        <p>Starting At</p>
                        <p className="text-4xl font-bold">$3.99 <span className="text-sm">/ MO</span></p>
                    </div>
                    <button className="flex justify-center items-center  h-14 w-40 group-hover:text-white bg-orange-500 ">Get Started Now</button>

                </div>
                <div className="flex group flex-col justify-center items-center gap-7 border border-gray-200 h-[600px] w-[400px] md:max-lg:h-full   ">

                    <div className=" rotate-45 rounded bg-gray-200 group-hover:bg-orange-500 flex justify-center items-center h-20 w-20  ">
                        <MilitaryTechIcon style={{
                            color: "black",
                            height: "60px",
                            width: "60px",
                        }}
                            class="-rotate-45" />
                    </div>
                    <h1 className="text-xl font-poppins font-semibold">Heading</h1>
                    <p className="">Torquent per conubia nostra</p>
                    <div className="bg-gray-200 w-full h-40 flex flex-col justify-center items-center gap-4 group-hover:bg-orange-500">
                        <p>Starting At</p>
                        <p className="text-4xl font-bold">$3.99 <span className="text-sm">/ MO</span></p>
                    </div>
                    <button className="flex justify-center items-center bg-gray-200 h-14 w-40 group-hover:text-white group-hover:bg-orange-500 ">Get Started Now</button>

                </div>
            </div>
        </>
    )
}

export default Pricingtype1