import React from 'react'
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';

function Shortcodes() {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Shortcodes</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="sortcodes">Shortcodes</Link></span>

                    </div>
                </div>
            </div>

            <div className="flex flex-col  lg:py-20 lg:px-56 py-20 px-7 font-poppins font-bold gap-7">
                <h1 className="md:text-5xl text-3xl text-orange-500" >Heading & <span className="text-blue-950">Title Tags</span></h1>
                <p className="text-5xl">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="text-4xl">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="text-3xl">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="text-2xl">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="text-xl">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="">LOREM IPSUM DOLOR SIT AMET</p>
                <p className="border b-2 mt-10 "></p>
            </div>

            <div className="md:flex md:flex-row flex-col md:justify-center md:items-center  " >
                <div class="flex flex-col font-poppins gap-5 font-bold ">
                    <h1 className="md:text-5xl text-3xl text-orange-500 ml-[300px] sm:ml-[200px] " >Heading <span className="text-blue-950">1</span></h1>
                    <p className="text-4xl md:w-[450px] w-80 md:ml-0 ml-40">LOREM IPSUM DOLOR SIT <span class="md:ml-80 ml-0">AMET</span></p>
                    <h1 className="md:text-5xl text-3xl  text-orange-500 ml-[300px]  sm:ml-[200px]" >Heading <span className="text-blue-950">2</span></h1>
                    <p className="text-4xl md:w-[480px] w-80 md:ml-0 ml-40">LOREM IPSUM DOLOR SIT <span class="md:ml-80 ml-0"> AMET</span></p>
                    <h1 className="md:text-5xl text-3xl  text-orange-500 ml-[300px]  sm:ml-[200px]" >Heading <span className="text-blue-950">3</span></h1>
                    <p className="text-3xl md:w-[450px] w-80 md:ml-0 ml-40">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl  text-orange-500 ml-[300px]  sm:ml-[200px]" >Heading <span className="text-blue-950">4</span></h1>
                    <p className="text-2xl md:w-full w-80 md:ml-24 ml-40">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl  text-orange-500 ml-[300px]  sm:ml-[200px]" >Heading <span className="text-blue-950">5</span></h1>
                    <p className="text-xl  w-80 md:ml-40 ml-40">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl  text-orange-500 ml-[300px]  sm:ml-[200px]" >Heading <span className="text-blue-950">6</span></h1>
                    <p className="text-l md:ml-[220px] ml-56 w-80 ">LOREM IPSUM DOLOR SIT AMET</p>


                </div>
                <div class="flex flex-col font-poppins gap-5 font-bold  sm:max-md:px-44 sm:px-0 sm:py-0 py-10 px-10">
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">1</span></h1>
                    <p className="text-4xl  md:w-[500px] w-80">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">2</span></h1>
                    <p className="text-4xl  md:w-[450px] w-80">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">3</span></h1>
                    <p className="text-3xl  md:w-[450px] w-80">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">4</span></h1>
                    <p className="text-2xl  md:w-[450px] w-80">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">5</span></h1>
                    <p className="text-xl  md:w-[450px] w-80">LOREM IPSUM DOLOR SIT AMET</p>
                    <h1 className="md:text-5xl text-3xl text-orange-500" >Heading <span className="text-blue-950">6</span></h1>
                    <p className="text-l  md:w-[450px] w-80">LOREM IPSUM DOLOR SIT AMET</p>


                </div>

            </div>
            <div className="border b-2 mt-20 ml-24 mr-24"></div>
            <div className="flex flex-col justify-center items-center gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">1</span></h1>
                <p className="text-5xl  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">2</span></h1>
                <p className="text-4xl  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">3</span></h1>
                <p className="text-3xl  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">4</span></h1>
                <p className="text-2xl  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">5</span></h1>
                <p className="text-xl  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>
                <h1 className="md:text-5xl text-3xl text-orange-500 flex justify-center gap-4" >Heading <span className="text-blue-950">6</span></h1>
                <p className="text-l  md:w-full w-80  flex justify-center ">LOREM IPSUM DOLOR SIT AMET</p>


            </div>
            <div className="border b-2 px-56 py-16 mt-20 ">
                <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-bold font-poppins mt-10">

                    <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 3</span></h1>
                    <p className="md:text-5xl text-3xl  md:w-full w-80  flex justify-center text-blue-950 gap-4">Lorem <span className="text-orange-500">ipsum dolor</span></p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 2</span></h1>
            </div>

            <div className="flex flex-col md:flex md:flex-row md:px-32 md:py-20 px-14 py-10 font-poppins gap-5">
                <div className="flex flex-col font-bold justify-center items-center">
                    <p class="md:text-3xl text-2xl">Curabitur lectus libero</p>
                    <p class="md:text-6xl text-4xl text-blue-900 justify-center   ">Lorem ipsum dolor</p>
                </div>
                <p className=" border b-2  b-gray-400"></p>
                <p className="text-blue-900 text-l mt-14 justify-center items-center">Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>

            </div>

            <div className="border b-2 mt-20 ml-24 mr-24"></div>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 3</span></h1>
            </div>
            <div className="flex flex-col md:flex md:flex-row md:px-64 md:py-20 px-14 py-10 font-poppins md:gap-64 gap-20">
                <div className="flex flex-col font-bold justify-center items-center ">
                    <h1 class="md:text-4xl text-3xl">Lorem ipsum dolor</h1>
                    <p class="md:text-xl text-xl justify-center">Lorem ipsum dolor</p>
                </div>
                <div className="flex flex-col font-bold justify-center items-center ">
                    <h1 class="md:text-4xl text-3xl">Lorem ipsum dolor</h1>
                    <p class="md:text-xl text-xxl justify-center">Lorem ipsum dolor</p>
                </div>
            </div>
            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 4</span></h1>
                <div className="bg-gray-400 flex justify-center items-center ">
                    <style>
                        {`
          /* Custom CSS for ribbon shape and gradient */
          .ribbon::before,
          .ribbon::after {
            content: '';
            width: 80px;
            height: 100%;
            background-color: gray;
            position: absolute;
            z-index: -1;
            top: 20px;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 25% 50%);
            background-image: linear-gradient(45deg, transparent 50%, gray 50%);
            background-size: 20px 20px;
            background-repeat: no-repeat;
            background-position: bottom right;
          }

          .ribbon::before {
            left: -60px;
          }

          .ribbon::after {
            right: -60px;
            transform: scaleX(-1);
          }
        `}
                    </style>
                    <h1 className="ribbon relative mx-auto mb-2 py-2 px-10 text-center bg-gray-400 text-black text-4xl font-semibold">
                        Ribbon Heading
                    </h1>
                </div>
            </div >

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 5</span></h1>
                <div className=" border b-2 text-2xl  b-black justify-center items-center "></div>
                <p class="md:text-5xl text-3xl justify-center items-center">Lorem ipsum dolor</p>
            </div>
            <div className=" border b-2  border-black mt-10 w-10 justify-center items-center ml-[700px] "></div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 6</span></h1>

                <p class="md:text-5xl text-3xl justify-center items-center">Lorem ipsum dolor</p>
            </div>
            <div className=" border b-2  border-black mt-10 w-10 justify-center items-center ml-[700px] "></div>
            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 7</span></h1>
                <p class="md:text-5xl text-xl justify-center items-center">WHO WE ARE</p>
                <p class="md:text-5xl text-xl justify-center items-center">Lorem ipsum dolor</p>
            </div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 8</span></h1>
                <p class="text-2xl text-blue-900 justify-center items-center">OUR CONTACT DETAILS</p>
                <p class="text-5xl text-orange-500 justify-center items-center">Contact</p>
            </div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 9</span></h1>
            </div>
            <div className="flex flex-row md:px-40 md:py-20 px-14 py-10 gap-4 font-bold">
                <p className=" border b-5  border-orange-400"></p>
                <p className="text-4xl w-56 ">Lorem Ipsum</p>
                <div className="md:w-[900px] w-96 h-14 bg-gray-200"></div>
            </div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 10</span></h1>

            </div>
            <div className=" flex w-[1300px] h-16 ml-20 mr-32 mt-5">
                <div className="bg-orange-500 h-16 md:w-1/2 w-72 text-white md:text-4xl text-2xl flex justify-center items-center font-bold">Lorem ipsum dolor</div>
                <div className="bg-gray-300 md:w-full w-10 h-16"></div>
            </div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 11</span></h1>

            </div>
            <div className=" flex w-[1300px] h-16 ml-20 mr-32 mt-5">
                <div className="bg-black h-16 md:w-1/2 w-72 text-white md:text-4xl text-2xl flex justify-center items-center font-bold">Lorem ipsum dolor</div>
                <div className="bg-gray-200 md:w-full w-10 h-16"></div>
            </div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 12</span></h1>

                <p class="md:text-5xl text-3xl justify-center items-center">Lorem ipsum dolor</p>
            </div>
            <div className=" border b-2  border-black mt-10 w-10 justify-center items-center ml-[700px] "></div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 13</span></h1>

                <p class="md:text-5xl text-3xl justify-center items-center">Lorem ipsum dolor</p>
            </div>
            <div className=" border b-2  border-black mt-10 w-10 justify-center items-center ml-[700px] animate-plus "></div>

            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <div className="flex flex-col justify-center items-center md:gap-7 gap-5 font-bold font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 text-orange-500 flex justify-center gap-4 " >TITLE <span className="text-blue-950">TYPE 14</span></h1>

                <p class="md:text-5xl text-3xl justify-center items-center">Lorem ipsum dolor</p>
            </div>
            <p>
                <RemoveIcon
                    style={{
                        height: "60px",
                        width: "80px",
                        color: "black",
                        marginBottom: " 5px",
                    }}

                    className=" font-xxl w-44"
                />

            </p>
            <div className=" border b-2  border-black mt-10 w-10 justify-center items-center ml-[700px] "></div>
            <div className="border b-2 md:mt-20 mt-10 md:ml-24 md:mr-24 ml-10 mr-10"></div>
            <h1 className="md:text-4xl text-3xl md:w-full w-80 text-orange-500 md:flex md:justify-center md:items-center flex justify-center items-center gap-4 mt-7 font-semibold md:ml-0 ml-24" >TABLES</h1>
            <div className="container  md:px-32 px-7 py-8">
                <table className="w-full  bg-white shadow-md  overflow-hidden">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-2 px-4">Header 1</th>
                            <th className="py-2 px-4">Header 2</th>
                            <th className="py-2 px-4">Header 3</th>
                            <th className="py-2 px-4">Header 4</th>
                            <th className="py-2 px-4">Header 5</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                        <tr className="bg-gray-100    ">
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>


                        </tr>
                        <tr>
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="container  md:px-32 px-7 py-8">
                <table className="w-full bg-white shadow-md  overflow-hidden">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-2 px-4">Header 1</th>
                            <th className="py-2 px-4">Header 2</th>
                            <th className="py-2 px-4">Header 3</th>
                            <th className="py-2 px-4">Header 4</th>

                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                        <tr className="bg-gray-100    ">
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>



                        </tr>
                        <tr>
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>

                        </tr>
                        <tr className="bg-gray-100">
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>

                        </tr>
                        <tr>
                            <td className="py-2 px-4 text-center ">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>
                            <td className="py-2 px-4 text-center">Division</td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <h1 className="md:text-6xl text-3xl md:w-full w-80 text-orange-500 md:flex md:justify-center md:items-center flex justify-center items-center gap-4 mt-7 font-semibold md:ml-0 ml-24" >TOOLTIP</h1>
            <div className="md:flex md:flex-row flex flex-col md:px-32 px-16 py-20 md:gap-56 gap-4 ">
                <div className="bg-white hover:bg-black text-black hover:text-white  cursor-pointer flex justify-center items-center h-12 w-32">
                    Toottip in Top
                </div>
                <div className="bg-white hover:bg-black text-black hover:text-white  cursor-pointer flex justify-center items-center h-12 w-32">
                    Toottip in Right
                </div>
                <div className="bg-white hover:bg-black text-black hover:text-white  cursor-pointer flex justify-center items-center h-12 w-[150px]">
                    Toottip in Bottom
                </div>
                <div className="bg-white hover:bg-black text-black hover:text-white  cursor-pointer flex justify-center items-center h-12 w-32">
                    Toottip in Left
                </div>

            </div>

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

export default Shortcodes