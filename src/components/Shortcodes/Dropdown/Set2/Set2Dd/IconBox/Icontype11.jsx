import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype11 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  11</span></h1>

            </div>

            <div className=" lg:flex lg:flex-row flex flex-col   sm:px-44 px-24 py-14 lg:max-xl:px-14 md:max-lg:gap-5 md:gap-0 gap-20 ">
                <div class="lg:flex lg:flex-row  md:max-lg:flex md:max-lg:flex-row flex flex-col md:gap-0 gap-20 ">
                    <div className=" flex flex-col justify-center items-center bg-orange-500 gap-4  h-72 w-full md:w-80 lg:max-xl:w-72">
                        <div class="rounded-full bg-black flex justify-center items-center h-24 w-24 absolute -mt-72 ">
                            <LanguageIcon style={{
                                color: "white",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins text-white mt-6">Perpat Corum</h1>

                        <div className=" flex justify-center items-center text-white  text-center px-5">Mauris purus leo, volutpat dapibus sagitt scelerisque pharetra odio. Sed dictum, nunc sed congue cursus, mauris.</div>
                        <button class="w-32 h-14 flex bg-black hover:bg-blue-950 text-white justify-center items-center absolute mt-72">Click Here</button>
                    </div>
                    <div className=" flex flex-col justify-center items-center bg-orange-600 gap-4  h-72 w-full md:w-80 lg:max-xl:w-72">
                        <div class="rounded-full bg-black flex justify-center items-center h-24 w-24 absolute -mt-72 ">
                            <AccessAlarmIcon style={{
                                color: "white",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins text-white mt-6">CONFAM TECUM</h1>

                        <div className=" flex justify-center items-center text-white  text-center px-5">Mauris purus leo, volutpat dapibus sagitt scelerisque pharetra odio. Sed dictum, nunc sed congue cursus, mauris.</div>
                        <button class="w-32 h-14 flex bg-black hover:bg-blue-950 text-white justify-center items-center absolute mt-72">Click Here</button>
                    </div>



                </div>
                <div class="lg:flex lg:flex-row  md:max-lg:flex md:max-lg:flex-row flex flex-col md:gap-0 gap-20 ">
                    <div className=" flex flex-col justify-center items-center bg-orange-700 gap-4  h-72 w-full md:w-80 lg:max-xl:w-72">
                        <div class="rounded-full bg-black flex justify-center items-center h-24 w-24 absolute -mt-72 ">
                            <CatchingPokemonIcon style={{
                                color: "white",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins text-white mt-6">CUIQUE VERSO</h1>

                        <div className=" flex justify-center items-center text-white  text-center px-5">Mauris purus leo, volutpat dapibus sagitt scelerisque pharetra odio. Sed dictum, nunc sed congue cursus, mauris.</div>
                        <button class="w-32 h-14 flex bg-black hover:bg-blue-950 text-white justify-center items-center absolute mt-72">Click Here</button>
                    </div>
                    <div className=" flex flex-col justify-center items-center bg-orange-800 gap-4  h-72 w-full md:w-80 lg:max-xl:w-72">
                        <div class="rounded-full bg-black flex justify-center items-center h-24 w-24 absolute -mt-72 ">
                            <CurrencyExchangeIcon style={{
                                color: "white",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins text-white mt-6">VIDEUR FUISE</h1>

                        <div className=" flex justify-center items-center text-white  text-center px-5">Mauris purus leo, volutpat dapibus sagitt scelerisque pharetra odio. Sed dictum, nunc sed congue cursus, mauris.</div>
                        <button class="w-32 h-14 flex bg-black hover:bg-blue-950 text-white justify-center items-center absolute mt-72">Click Here</button>
                    </div>



                </div>

            </div >
        </>
    )
}

export default Icontype11