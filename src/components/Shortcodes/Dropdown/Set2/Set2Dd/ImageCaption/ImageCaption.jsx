import React from 'react'
import { Link } from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Captiontype2 from './Captiontype2';
import Captiontype3 from './Captiontype3';
import Captiontype4 from './Captiontype4';
import Captiontype5 from './Captiontype5';
import Captiontype6 from './Captiontype6';
import Captiontype7 from './Captiontype7';
import Captiontype7B from './Captiontype7B';
import Captiontype8 from './Captiontype8';
import Captiontype9 from './Captiontype9';
import ImageFlip from './ImageFlip';

const ImageCaption = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Image With Caption</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Image With Caption</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  1</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="group bg-gray-50 h-[580px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5   ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-1-1.jpg" alt="" class="w-[400px] h-[300px] " />
                        <div class="w-0 h-0 absolute md:ml-[228px] ml-[240px] md:max-lg:ml-[100px] lg:max-xl:ml-[206px] mt-[170px] 
                        border-l-[160px] border-l-transparent
                        border-b-[135px] border-b-white
                        border-r-[0px] border-r-transparent rotate-10">
                        </div>

                        <div class="w-0 h-0  absolute md:ml-[238px] ml-[250px] md:max-lg:ml-[110px] lg:max-xl:ml-[216px] mt-44 
                        border-l-[150px] border-l-transparent
                        border-b-[125px] border-b-orange-500 group-hover:border-b-blue-950
                        border-r-[0px] border-r-transparent rotate-10">
                            <div class="flex justify-end items-end mt-14 mr-10">
                                <AccessAlarmIcon style={{
                                    color: "white",
                                    height: "50px",
                                    width: "50px"
                                }}
                                />
                            </div>
                        </div>
                        <div class="px-3">
                            <h1 class="text-2xl text-blue-950 font-bold ">Vimus eumod soles</h1>
                            <h2 class="text-gray-700 text-xl">Videur Fuise</h2>
                        </div>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Read More</p>
                        <button class="w-32 h-14 bg-orange-500 group-hover:bg-blue-950 text-white">Read More</button>

                    </div>
                </div>
                <div className="group bg-gray-50 h-[580px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5   ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-1-2.jpg" alt="" class="w-[400px] h-[300px] " />
                        <div class="w-0 h-0 absolute md:ml-[228px] ml-[240px] md:max-lg:ml-[100px] lg:max-xl:ml-[206px]  mt-[170px] 
                        border-l-[160px] border-l-transparent
                        border-b-[135px] border-b-white
                        border-r-[0px] border-r-transparent rotate-10">
                        </div>

                        <div class="w-0 h-0  absolute md:ml-[238px] ml-[250px] md:max-lg:ml-[110px] lg:max-xl:ml-[216px] mt-44 
                        border-l-[150px] border-l-transparent
                        border-b-[125px] border-b-orange-500 group-hover:border-b-blue-950
                        border-r-[0px] border-r-transparent rotate-10">
                            <div class="flex justify-end items-end mt-14 mr-10">
                                <CatchingPokemonIcon style={{
                                    color: "white",
                                    height: "50px",
                                    width: "50px"
                                }}
                                />
                            </div>
                        </div>
                        <div class="px-3">
                            <h1 class="text-2xl text-blue-950 font-bold ">Phlus molis nulla</h1>
                            <h2 class="text-gray-700 text-xl">Confam tecum</h2>
                        </div>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Read More</p>
                        <button class="w-32 h-14 bg-orange-500 group-hover:bg-blue-950 text-white">Read More</button>

                    </div>
                </div>
                <div className="group bg-gray-50 h-[580px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5   ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-1-3.jpg" alt="" class="w-[400px] h-[300px] " />
                        <div class="w-0 h-0 absolute  md:ml-[228px] ml-[240px] md:max-lg:ml-[100px] lg:max-xl:ml-[206px]  mt-[170px] 
                        border-l-[160px] border-l-transparent
                        border-b-[135px] border-b-white
                        border-r-[0px] border-r-transparent rotate-10">
                        </div>

                        <div class="w-0 h-0  absolute md:ml-[238px] ml-[250px] md:max-lg:ml-[110px] lg:max-xl:ml-[216px] mt-44 
                        border-l-[150px] border-l-transparent
                        border-b-[125px] border-b-orange-500 group-hover:border-b-blue-950
                        border-r-[0px] border-r-transparent rotate-10">
                            <div class="flex justify-end items-end mt-14 mr-10">
                                <CurrencyExchangeIcon style={{
                                    color: "white",
                                    height: "50px",
                                    width: "50px"
                                }}
                                />
                            </div>
                        </div>
                        <div class="px-3">
                            <h1 class="text-2xl text-blue-950 font-bold ">Donec Morbi ereos</h1>
                            <h2 class="text-gray-700 text-xl">Perpat Corum</h2>
                        </div>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Read More</p>
                        <button class="w-32 h-14 bg-orange-500 group-hover:bg-blue-950 text-white">Read More</button>

                    </div>
                </div>
            </div>

            <Captiontype2 />
            <Captiontype3 />
            <Captiontype4 />
            <Captiontype5 />
            <Captiontype6 />
            <Captiontype7 />
            <Captiontype7B />
            <Captiontype8 />
            <Captiontype9 />
            <ImageFlip />
        </>
    )
}

export default ImageCaption