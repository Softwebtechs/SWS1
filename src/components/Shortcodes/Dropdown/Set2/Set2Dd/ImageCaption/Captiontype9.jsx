import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import CatchingPokemon from '@mui/icons-material/CatchingPokemon';

const Captiontype9 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  9</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="group relative  h-[370px] w-[400px] md:max-lg:h-full  flex hover:bg-black hover:opacity-40">
                    <div className="flex flex-col  gap-3  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-8-1.jpg" alt="" class="w-[400px] h-[300px] group " />
                        <div className="bg-orange-500  h-14 w-14 absolute group-hover:invisible flex justify-center items-center">
                            <LanguageIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                        <h1 class="text-2xl font-bold text-blue-950 text-center group-hover:bg-orange-600 h-20 w-full group-hover:text-white">Nibh Euismod
                        </h1>
                    </div>
                    <div className=" h-full w-full md:max-lg:h-80 md:max-lg:w-80 p-5 absolute bg-black text-white  transition duration-300 opacity-0 hover:opacity-60 flex flex-col justify-center items-center gap-5 ">

                        <p class=" text-center text-white font-roboto font-bold opacity-100">
                            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                        </p>

                    </div>
                </div>
                <div className="group relative  h-[370px] w-[400px] md:max-lg:h-full  flex hover:bg-black hover:opacity-40">
                    <div className="flex flex-col  gap-3  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-4-1.jpg" alt="" class="w-[400px] h-[300px] group " />
                        <div className="bg-orange-500  h-14 w-14 absolute group-hover:invisible flex justify-center items-center">
                            <AccessAlarmIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                        <h1 class="text-2xl font-bold text-blue-950 text-center group-hover:bg-orange-600 h-20 w-full group-hover:text-white">Nibh Euismod
                        </h1>
                    </div>
                    <div className=" h-full w-full md:max-lg:h-80 md:max-lg:w-80 p-5 absolute bg-black text-white  transition duration-300 opacity-0 hover:opacity-60 flex flex-col justify-center items-center gap-5 ">

                        <p class=" text-center text-white font-roboto opacity-100">
                            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                        </p>

                    </div>
                </div>
                <div className="group relative  h-[370px] w-[400px] md:max-lg:h-full  flex hover:bg-black hover:opacity-40">
                    <div className="flex flex-col  gap-3  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-4-3.jpg" alt="" class="w-[400px] h-[300px] group " />
                        <div className="bg-orange-500  h-14 w-14 absolute group-hover:invisible flex justify-center items-center">
                            <CatchingPokemon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                        <h1 class="text-2xl font-bold text-blue-950 text-center group-hover:bg-orange-600 h-20 w-full group-hover:text-white">Nibh Euismod
                        </h1>
                    </div>
                    <div className=" h-full w-full md:max-lg:h-80 md:max-lg:w-80 p-5 absolute bg-black text-white  transition duration-300 opacity-0 hover:opacity-60 flex flex-col justify-center items-center gap-5 ">

                        <p class=" text-center text-white font-roboto opacity-100">
                            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Captiontype9