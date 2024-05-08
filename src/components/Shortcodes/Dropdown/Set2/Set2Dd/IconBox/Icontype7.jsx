import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Icontype7 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  7</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-10">
                <div className="group   h-80 w-[400px] md:max-lg:h-full  flex justify-center items-center ">
                    <div className="flex flex-col gap-7  justify-center items-center ">
                        <AccessAlarmIcon style={{
                            color: "#ff5e14",
                            height: "90px",
                            width: "90px",
                        }}
                        />
                        <h1 className=" text-2xl  font-poppins group-hover:text-orange-500">Perpat Corum</h1>
                        <div className="visible group-hover:invisible"><ArrowForwardIcon style={{ fontsize: "30px" }} /></div>
                        <div className="invisible group-hover:visible flex justify-center items-center text-gray-500 px-5 text-center -mt-10">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
                    </div>
                </div>
                <div className="group   h-80 w-[400px] md:max-lg:h-full  flex justify-center items-center ">
                    <div className="flex flex-col gap-7  justify-center items-center ">
                        <CatchingPokemonIcon style={{
                            color: "#ff5e14",
                            height: "90px",
                            width: "90px",
                        }}
                        />
                        <h1 className=" text-2xl  font-poppins group-hover:text-orange-500 ">Confam Tecum</h1>
                        <div className="visible group-hover:invisible"><ArrowForwardIcon style={{ fontsize: "30px" }} /></div>
                        <div className="invisible group-hover:visible flex justify-center items-center text-gray-500 px-5 text-center -mt-10">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
                    </div>
                </div>
                <div className="group   h-80 w-[400px] md:max-lg:h-full  flex justify-center items-center ">
                    <div className="flex flex-col gap-7  justify-center items-center ">
                        <CurrencyExchangeIcon style={{
                            color: "#ff5e14",
                            height: "90px",
                            width: "90px",
                        }}
                        />
                        <h1 className=" text-2xl  font-poppins group-hover:text-orange-500 ">Cuique Verso</h1>
                        <div className="visible group-hover:invisible"><ArrowForwardIcon style={{ fontsize: "30px" }} /></div>
                        <div className="invisible group-hover:visible flex justify-center items-center text-gray-500 px-5 text-center -mt-10">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Icontype7