import React from 'react'

import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype16 = () => {



    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  16</span></h1>
            </div>


            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div class="group h-56 w-64 [perspective:1000px]">
                        <div class="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex justify-center items-center [backface-visibility:hidden]">
                            <div class=" absolute inset-0 w-64 h-56 flex justify-center items-center bg-black border-2 border-orange-500">
                                <LanguageIcon style={{
                                    color: "white",
                                    height: "100px",
                                    width: "100px",
                                }} />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center gap-7">
                                    <h1 class="text-3xl font-bold">3 months</h1>
                                    <p class="text-4xl text-orange-500 font-bold">$ 1500/-</p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group h-56 w-64 [perspective:1000px]">
                        <div class="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex justify-center items-center [backface-visibility:hidden]">
                            <div class=" absolute inset-0 w-64 h-56 flex justify-center items-center bg-black border-2 border-orange-500">
                                <AccessAlarmIcon style={{
                                    color: "white",
                                    height: "100px",
                                    width: "100px",
                                }} />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center gap-7">
                                    <h1 class="text-3xl font-bold">3 months</h1>
                                    <p class="text-4xl text-orange-500 font-bold">$ 1500/-</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div class="group h-56 w-64 [perspective:1000px]">
                        <div class="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex justify-center items-center [backface-visibility:hidden]">
                            <div class=" absolute inset-0 w-64 h-56 flex justify-center items-center bg-black border-2 border-orange-500">
                                <CatchingPokemonIcon style={{
                                    color: "white",
                                    height: "100px",
                                    width: "100px",
                                }} />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center gap-7">
                                    <h1 class="text-3xl font-bold">3 months</h1>
                                    <p class="text-4xl text-orange-500 font-bold">$ 1500/-</p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group h-56 w-64 [perspective:1000px]">
                        <div class="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] flex justify-center items-center [backface-visibility:hidden]">
                            <div class=" absolute inset-0 w-64 h-56 flex justify-center items-center bg-black rounded-xl border-2 border-orange-500">
                                <CurrencyExchangeIcon style={{
                                    color: "white",
                                    height: "100px",
                                    width: "100px",
                                }} />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center gap-7">
                                    <h1 class="text-3xl font-bold">3 months</h1>
                                    <p class="text-4xl text-orange-500 font-bold">$ 1500/-</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Icontype16
