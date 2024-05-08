import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype4 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  4</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col   sm:px-44 px-24 py-10 lg:max-xl:px-56 md:max-lg:mt-80 ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col  ">
                    <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-80 lg:max-xl:w-96">
                        <div className="flex flex-row gap-2">
                            <LanguageIcon style={{
                                color: "#ff5e14",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                            <div>
                                <h1 className="font-bold font-poppins">Perpat Corum</h1>
                                <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                            </div>

                        </div>


                    </div>
                    <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-80 lg:max-xl:w-96">
                        <div className="flex flex-row gap-2">
                            <AccessAlarmIcon style={{
                                color: "#ff5e14",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                            <div>
                                <h1 className="font-bold font-poppins">Perpat Corum</h1>
                                <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col  ">
                    <div className=" flex flex-col  gap-5 px-10 py-10 h-56 w-full md:w-80 lg:max-xl:w-96">
                        <div className="flex flex-row gap-2">
                            <CatchingPokemonIcon style={{
                                color: "#ff5e14",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                            <div>
                                <h1 className="font-bold font-poppins">Perpat Corum</h1>
                                <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                            </div>
                        </div>

                    </div>
                    <div className=" flex flex-col  gap-4 px-10 py-10 h-56 w-full md:w-80 lg:max-xl:w-96">
                        <div className="flex flex-row gap-2">
                            <CurrencyExchangeIcon style={{
                                color: "#ff5e14",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                            <div>
                                <h1 className="font-bold font-poppins">Perpat Corum</h1>
                                <p class="text-gray-500 text-s mt-3">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Icontype4