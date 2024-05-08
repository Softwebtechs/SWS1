import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype5 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  5</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-20 py-10 lg:max-xl:px-56  ">

                <div className="group flex flex-col  gap-4 px-10 py-10 h-full  w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-3">
                        <div class="group-hover:border-orange-600 rounded-full border-2 border-blue-950 h-20 w-72 flex justify-center items-center">
                            <LanguageIcon style={{
                                color: "#273272",
                                height: "40px",
                                width: "40px",
                            }}
                            />
                        </div>
                        <div>
                            <h1 className="font-bold font-poppins text-blue-950 text-2xl">Perpat Corum</h1>
                            <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>

                    </div>


                </div>
                <div className="group flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-2">
                        <div class="group-hover:border-orange-600 rounded-full border-2 border-blue-950 h-20 w-72 flex justify-center items-center">
                            <AccessAlarmIcon style={{
                                color: "#273272",
                                height: "40px",
                                width: "40px",
                            }}
                            />
                        </div>
                        <div>
                            <h1 className="font-bold font-poppins text-blue-950 text-2xl">Confam tecum</h1>
                            <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                    </div>

                </div>


                <div className="group flex flex-col  gap-5 px-10 py-10 h-56 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-2">
                        <div class="group-hover:border-orange-600 rounded-full border-2 border-blue-950 h-20 w-72 flex justify-center items-center ">
                            <CatchingPokemonIcon style={{
                                color: "#273272",
                                height: "40px",
                                width: "40px",
                            }}
                            />
                        </div>
                        <div>
                            <h1 className="font-bold font-poppins  text-blue-950 text-2xl">Cuique Verso</h1>
                            <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Icontype5