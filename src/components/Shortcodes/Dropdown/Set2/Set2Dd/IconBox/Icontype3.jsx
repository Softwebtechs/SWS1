import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype3 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  3</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-10">
                <div className="group bg-white shadow-xl h-96 w-80 md:max-lg:h-full hover:bg-blue-950 flex justify-center items-center">
                    <div className="flex flex-col gap-7 justify-center items-center px-10 ">
                        <AccessAlarmIcon style={{
                            color: "black",
                            height: "50px",
                            width: "50px",
                        }}
                        />
                        <h1 className="font-bold text-2xl text-blue-950 font-poppins group-hover:text-orange-600">Perpat Corum</h1>
                        <p className="text-gray-500 text-center ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestas, cursus felis quis.</p>
                    </div>
                </div>
                <div class="flex justify-center items-center md:visible invisible">
                    <ArrowForwardIcon style={{ color: "#273272", fontSize: "50px", width: "" }} />
                </div>
                <div class="flex justify-center items-center md:invisible visible">
                    <ArrowDownwardIcon style={{ color: "#273272", fontSize: "50px", width: "" }} />
                </div>
                <div className="group bg-white shadow-xl h-96 w-80 flex justify-center items-center md:max-lg:h-full hover:bg-blue-950">
                    <div className="flex flex-col gap-7 justify-center items-center px-10 ">
                        <CatchingPokemonIcon style={{
                            color: "black",
                            height: "50px",
                            width: "50px",
                        }}
                        />
                        <h1 className="font-bold text-2xl text-blue-950 font-poppins group-hover:text-orange-600">Confam tecum</h1>
                        <p className="text-gray-500 text-center ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestas, cursus felis quis.</p>
                    </div>
                </div>
                <div class="flex justify-center items-center md:visible invisible">
                    <ArrowForwardIcon style={{ color: "#273272", fontSize: "50px", width: "" }} />
                </div>
                <div class="flex justify-center items-center md:invisible visible">
                    <ArrowDownwardIcon style={{ color: "#273272", fontSize: "50px", width: "" }} />
                </div>
                <div className="group bg-white shadow-xl h-96 w-80 flex justify-center items-center md:max-lg:h-full hover:bg-blue-950">
                    <div className="flex flex-col gap-7 justify-center items-center px-10 ">
                        <CurrencyExchangeIcon style={{
                            color: "black",
                            height: "50px",
                            width: "50px",
                        }}
                        />
                        <h1 className="font-bold text-2xl text-blue-950 font-poppins group-hover:text-orange-600">Cuique Verso</h1>
                        <p className="text-gray-500 text-center ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed get sit ame egestas, cursus felis quis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icontype3