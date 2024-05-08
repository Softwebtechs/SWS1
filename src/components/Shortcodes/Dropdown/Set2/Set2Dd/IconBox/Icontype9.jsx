import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype9 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  9</span></h1>

            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-10">
                <div className="group  bg-gray-200 h-full md:w-[650px] w-96 md:max-lg:h-full  flex flex-col md:flex md:flex-row  ">
                    <div className="flex  md:w-1/2 w-full md:h-96 h-[400px] bg-black  justify-center items-center ">
                        <CatchingPokemonIcon style={{
                            color: "white",
                            height: "90px",
                            width: "90px",
                        }}
                        />
                    </div>
                    <div className="flex  md:w-1/2 w-full md:h-96 h-full bg-gray-800  px-5 py-8 ">
                        <div className="flex flex-col gap-5">
                            <h1 className='text-white text-6xl font-bold '>520+</h1>
                            <p className='text-white text-xl font-bold '>Repeated Clients</p>
                            <p className='text-white text-l lg:mt-5 '>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Morbi in sem quis dui placerat ornare. Curabitur ullamcorper tricies nisi. Rhoncus, sem amet adipiscing sem neque sed ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className="group  bg-gray-200 h-full md:w-[600px] w-96 md:max-lg:h-full  flex flex-col md:flex md:flex-row  ">

                    <div className="flex  md:w-1/2 w-full md:h-96 h-[400px] bg-gray-800  px-5 py-8 ">
                        <div className="flex flex-col gap-5">
                            <h1 className='text-white text-6xl font-bold text-right'>351</h1>
                            <p className='text-white text-xl font-bold text-right'>Award Won</p>
                            <p className='text-white text-l lg:mt-5 text-right '>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Morbi in sem quis dui placerat ornare. Curabitur ullamcorper tricies nisi. Rhoncus, sem amet adipiscing sem neque sed ipsum.</p>
                        </div>
                    </div>
                    <div className="flex  md:w-1/2 w-full md:h-96 h-[400px] bg-black  justify-center items-center ">
                        <CurrencyExchangeIcon style={{
                            color: "white",
                            height: "90px",
                            width: "90px",
                        }}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Icontype9