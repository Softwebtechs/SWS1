import React from 'react'

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype5A = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  5A</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col gap-7 sm:px-44 px-14 py-10 lg:max-xl:px-56  ">

                <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-2">
                        <AccessAlarmIcon style={{
                            color: "#ff5e14",
                            height: "30px",
                            width: "30px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppins text-orange-500">Customized Dish as u like</h1>
                            <h2 className="font-poppins text-blue-950 mt-2">PERFECT DISH FOR EVERYONE</h2>
                            <p class="text-gray-500 text-s mt-2">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>

                    </div>


                </div>
                <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-2">
                        <CatchingPokemonIcon style={{
                            color: "#ff5e14",
                            height: "30px",
                            width: "30px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppins text-orange-500">Faster Check-in Time</h1>
                            <h2 className="font-poppins text-blue-950 mt-2">BECOME A PRIVILEDGED USER</h2>
                            <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                    </div>

                </div>


                <div className=" flex flex-col  gap-5 px-10 py-10 h-56 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="flex flex-row gap-2">
                        <CurrencyExchangeIcon style={{
                            color: "#ff5e14",
                            height: "30px",
                            width: "30px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppins text-orange-500">Create your own Schedule</h1>
                            <h2 className="font-poppins text-blue-950 mt-2">ENJOY YOUR STAY</h2>
                            <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Icontype5A