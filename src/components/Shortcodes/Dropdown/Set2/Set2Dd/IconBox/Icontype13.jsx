import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Icontype13 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  13</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="group  border border-purple-700 h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <div class="group-hover:rounded-b-full border rounded-t-full   border-purple-700 flex justify-center items-center h-24 w-24 absolute -mt-[400px] ">
                            <AccessAlarmIcon style={{
                                color: "purple",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-semibold  font-poppins  mt-2">Perpat Corum</h1>
                        <h2 className=" ">17 Topics / 21 Replies</h2>
                        <div class="border-2 group-hover:border-purple-500 border-gray-200 w-12 mt-4"></div>
                        <div className=" flex justify-center items-center text-gray-700  text-center px-5">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</div>
                        <div class="flex flex-row gap-2">
                            <p class="group-hover:text-purple-600">Read More</p>
                            <ArrowForwardIcon style={{ color: "black", fontSize: "", width: "" }} />
                        </div>
                    </div>
                </div>
                <div className="group  border border-green-700 h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <div class="group-hover:rounded-b-full border rounded-t-full   border-green-700 flex justify-center items-center h-24 w-24 absolute -mt-[400px] ">
                            <CatchingPokemonIcon style={{
                                color: "green",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-semibold  font-poppins  mt-2">Confam tecum</h1>
                        <h2 className=" ">8 Topics / 6 Replies</h2>
                        <div class="border-2 group-hover:border-green-500 border-gray-200 w-12 mt-4"></div>
                        <div className=" flex justify-center items-center text-gray-700  text-center px-5">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</div>
                        <div class="flex flex-row gap-2">
                            <p class="group-hover:text-green-600">Read More</p>
                            <ArrowForwardIcon style={{ color: "black", fontSize: "", width: "" }} />
                        </div>
                    </div>
                </div>
                <div className="group  border border-orange-700 h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <div class="group-hover:rounded-b-full border rounded-t-full   border-orange-700 flex justify-center items-center h-24 w-24 absolute -mt-[400px] ">
                            <CurrencyExchangeIcon style={{
                                color: "brown",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-semibold  font-poppins  mt-2">Cuique Verso</h1>
                        <h2 className=" ">22 Topics / 19 Replies</h2>
                        <div class="border-2 group-hover:border-orange-700 border-gray-200 w-12 mt-4"></div>
                        <div className=" flex justify-center items-center text-gray-700  text-center px-5">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</div>
                        <div class="flex flex-row gap-2">
                            <p class="group-hover:text-orange-700">Read More</p>
                            <ArrowForwardIcon style={{ color: "black", fontSize: "", width: "" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icontype13