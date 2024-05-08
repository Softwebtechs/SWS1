import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const Captiontype8 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  8</span></h1>
            </div>

            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border border-gray-200 hover:shadow-xl   h-[480px] w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-8-1.jpg" alt="" class="h-64 w-full group-hover:shadow-xl" />
                        <div class="flex flex-col gap-3 w-full h-44 mt-12">
                            <h1 class="text-2xl font-bold text-blue-950 text-center  ">Nibh Euismod</h1>
                            <p class="text-gray-500 text-center text-l px-5 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestasquis.</p>
                        </div>

                        <div className="bg-orange-500 rounded-full h-14 w-14 absolute mt-[480px] flex justify-center items-center">
                            <LanguageIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                    </div>
                    <div className=" group flex flex-col border border-gray-200 hover:shadow-xl   h-[480px] w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-8-2.jpg" alt="" class="h-64 w-full group-hover:shadow-xl" />
                        <div class="flex flex-col gap-3 w-full h-44 mt-12">
                            <h1 class="text-2xl font-bold text-blue-950 text-center  ">Nibh Euismod</h1>
                            <p class="text-gray-500 text-center text-l px-5 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestasquis.</p>
                        </div>

                        <div className="bg-orange-500 rounded-full h-14 w-14 absolute mt-[480px] flex justify-center items-center">
                            <AccessAlarmIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                    </div>
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border border-gray-200 hover:shadow-xl   h-[480px] w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-8-3.jpg" alt="" class="h-64 w-full group-hover:shadow-xl" />
                        <div class="flex flex-col gap-3 w-full h-44 mt-12">
                            <h1 class="text-2xl font-bold text-blue-950 text-center  ">Nibh Euismod</h1>
                            <p class="text-gray-500 text-center text-l px-5 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestasquis.</p>
                        </div>

                        <div className="bg-orange-500 rounded-full h-14 w-14 absolute mt-[480px] flex justify-center items-center">
                            <CatchingPokemonIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                    </div>
                    <div className=" group flex flex-col border border-gray-200 hover:shadow-xl   h-[480px] w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-8-4.jpg" alt="" class="h-64 w-full group-hover:shadow-xl" />
                        <div class="flex flex-col gap-3 w-full h-44 mt-12">
                            <h1 class="text-2xl font-bold text-blue-950 text-center  ">Nibh Euismod</h1>
                            <p class="text-gray-500 text-center text-l px-5 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestasquis.</p>
                        </div>

                        <div className="bg-orange-500 rounded-full h-14 w-14 absolute mt-[480px] flex justify-center items-center">
                            <CurrencyExchangeIcon style={{
                                color: "white",
                                height: "30px",
                                width: "30px",
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Captiontype8
