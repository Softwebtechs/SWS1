import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype6 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  6</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-10">
                <div className="group   h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-7  px-5 py-5 ">
                        <div class="bg-orange-500 group-hover:bg-black flex justify-center items-center h-24 w-24">
                            <AccessAlarmIcon style={{
                                color: "white",
                                height: "50px",
                                width: "50px",
                            }}
                            />
                        </div>
                        <h1 class="text-xl font-bold">PERPAT CORUM</h1>
                        <p class="text-gary-200 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <div class="bg-orange-500 group-hover:bg-black h-12 w-24 flex justify-center items-center">
                            <button class="hover:bg-blue-950 h-12 w-24 text-white">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="group   h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-7  px-5 py-5 ">
                        <div class="bg-orange-500 group-hover:bg-black flex justify-center items-center h-24 w-24">
                            <CatchingPokemonIcon style={{
                                color: "white",
                                height: "50px",
                                width: "50px",
                            }}
                            />
                        </div>
                        <h1 class="text-xl font-bold">CONFAM TECUM</h1>
                        <p class="text-gary-200 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <div class="bg-orange-500 group-hover:bg-black h-12 w-24 flex justify-center items-center">
                            <button class="hover:bg-blue-950 h-12 w-24 text-white">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="group  h-96 w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-7  px-5 py-5 ">
                        <div class="bg-orange-500 group-hover:bg-black flex justify-center items-center h-24 w-24">
                            <CurrencyExchangeIcon style={{
                                color: "white",
                                height: "50px",
                                width: "50px",
                            }}
                            />
                        </div>
                        <h1 class="text-xl font-bold">CUIQUE VERSO</h1>
                        <p class="text-gary-200 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        <div class="bg-orange-500 group-hover:bg-black h-12 w-24 flex justify-center items-center">
                            <button class="hover:bg-blue-950 h-12 w-24 text-white">Read More</button>
                        </div>
                    </div>
                </div>



            </div>


        </>
    )
}

export default Icontype6