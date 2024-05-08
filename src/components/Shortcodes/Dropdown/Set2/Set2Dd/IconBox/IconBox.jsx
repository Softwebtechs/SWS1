import React from 'react'
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Icontype2 from './Icontype2';
import Icontype3 from './Icontype3';
import Icontype4 from './Icontype4';
import Icontype5 from './Icontype5';
import Icontype5A from './Icontype5A';
import Icontype6 from './Icontype6';
import Icontype7 from './Icontype7';
import Icontype8 from './Icontype8';
import Icontype9 from './Icontype9';
import Icontype10 from './Icontype10';
import Icontype11 from './Icontype11';
import Icontype12 from './Icontype12';
import Icontype13 from './Icontype13';
import Icontype14 from './Icontype14';
import Icontype15 from './Icontype15';
import Icontype16 from './Icontype16';

const IconBox = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Icon Boxes</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Icon Boxes</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  1</span></h1>
            </div>


            <div className=" lg:flex lg:flex-row flex flex-col w-full md:h-96 h-full py-14  ">
                <div class="lg:flex lg:flex-row md:max-lg:flex md:max-lg:flex-row ">
                    <div className=" bg-white h-96 border border-gray-200 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-end items-end ">
                        <div className="flex flex-col gap-7 px-9 py-7 ">
                            <LanguageIcon style={{
                                color: "#ff5e14",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins">Perpat Corum</h1>
                            <div className="border-2 border-orange-600 w-8"></div>
                            <p className="text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                        <div className="absolute  hover:scale-110">
                            <LanguageIcon style={{
                                color: "#d3d3d3",
                                height: "90px",
                                width: "90px",
                            }}
                            />
                        </div>
                    </div>
                    <div className=" bg-white h-96 border border-gray-200 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-end items-end ">
                        <div className="flex flex-col gap-7 px-9 py-7 ">
                            <AccessAlarmIcon style={{
                                color: "#ff5e14",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins">Confal lecum</h1>
                            <div className="border-2 border-orange-600 w-8"></div>
                            <p className="text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                        <div className="absolute  hover:scale-110">
                            <AccessAlarmIcon style={{
                                color: "#d3d3d3",
                                height: "90px",
                                width: "90px",
                            }}
                            />
                        </div>
                    </div>

                </div>
                <div class="lg:flex lg:flex-row md:max-lg:flex md:max-lg:flex-row ">
                    <div className=" bg-white h-96 border border-gray-200 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-end items-end ">
                        <div className="flex flex-col gap-7 px-9 py-7 ">
                            <CatchingPokemonIcon style={{
                                color: "#ff5e14",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins">Cuique Verso</h1>
                            <div className="border-2 border-orange-600 w-8"></div>
                            <p className="text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                        <div className="absolute  hover:scale-110">
                            <CatchingPokemonIcon style={{
                                color: "#d3d3d3",
                                height: "90px",
                                width: "90px",
                            }}
                            />
                        </div>
                    </div>
                    <div className=" bg-white h-96 border border-gray-200 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-end items-end ">
                        <div className="flex flex-col gap-7 px-9 py-7 ">
                            <CurrencyExchangeIcon style={{
                                color: "#ff5e14",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins">Videur Fuise</h1>
                            <div className="border-2 border-orange-600 w-8"></div>
                            <p className="text-gray-500 ">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.</p>
                        </div>
                        <div className="absolute  hover:scale-110">
                            <CurrencyExchangeIcon style={{
                                color: "#d3d3d3",
                                height: "90px",
                                width: "90px",
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Icontype2 />
            <Icontype3 />
            <Icontype4 />
            <Icontype5 />
            <Icontype5A />
            <Icontype6 />
            <Icontype7 />
            <Icontype8 />
            <Icontype9 />
            <Icontype10 />
            <Icontype11 />
            <Icontype12 />
            <Icontype13 />
            <Icontype14 />
            <Icontype15 />
            <Icontype16 />

            <div className="m-8 md:max-lg:w-[700px] bg-white md:p-24 p-5  h-auto gap-4 ">
                <h2 className=" text-xl font-semibold font-poppins text-black ">
                    Leave a Comment </h2>
                <p className="text-gray-700 font-roboto py-3">Your email address will not be published.</p>
                <p className="text-gray-700 font-roboto mb-4">Required fields are marked <span class="text-red-500">*</span></p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Comment<span class="text-red-500">*</span>
                        </label>
                        <textarea
                            id="comment"
                            name="comment"

                            className="w-full px-5 py-2 border outline-none "
                            rows="5"

                        ></textarea>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Name<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Email<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-blue-900 transition duration-1000 text-white font-normal py-4 px-11 focus:outline-none focus:shadow-outline"
                    >
                        Post Comment
                    </button>
                </form>
            </div>


        </>
    )
}

export default IconBox