import React from 'react'
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Infotype2 from './Infotype2';
import Infotype3 from './Infotype3';
import Infotype4 from './Infotype4';
import Infotype5 from './Infotype5';
import Infotype6 from './Infotype6';
import Infotype7 from './Infotype7';
import Infotype8 from './Infotype8';
import Infotype9 from './Infotype9';

const Contactinfo = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Contact Info</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Contact Info</span>
                    </div>
                </div>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-4 mt-32 md:px-40 md:max-lg:px-10 lg:max-xl:px-20 px-10 ">
                <div className="bg-gray-200 md:w-[800px] md:max-lg:w-[400px] lg:max-xl:w-[600px] w-full h-[550px]"></div>
                <div className="flex flex-col gap-7 px-3 py-3  h-[550px] md:w-[350px] w-full">
                    <div class="md:flex md:flex-col flex flex-row gap-2 ">
                        <h1 class="text-orange-500 md:text-5xl text-2xl font-bold font-poppins text-wider">CONTACT</h1>
                        <h2 class="text-orange-500 md:text-5xl text-2xl font-bold font-poppins text-wider flex gap-3">INFO<span class="text-blue-950">TYPE 1</span></h2>
                    </div>
                    <div className="flex item-centre space-x-2 ml-5" >
                        <PhoneIcon
                            style={{
                                height: "30px",
                                color: "#ff5e14",
                                marginBottom: " 5px",
                            }}

                        />
                        <div>
                            <p class="text-gray-700 font-semibold  text-xl text-center  ">Toll Free: <span class="text-gray-400">1224 2234</span></p>
                            <p class="text-gray-700 font-semibold  text-xl text-center gap-2 ">Fax: <span class="text-gray-400">1224 2234 225</span></p>

                        </div>

                    </div>
                    <div className="border-dashed border-gray-600 border"></div>
                    <div className="flex item-centre space-x-2 ml-5" >
                        <EmailIcon
                            style={{
                                height: "30px",
                                width: "25px",
                                color: "#ff5e14",
                                marginBottom: " 3px",
                                marginRight: "4px",
                            }}
                            fontSize="small"
                        />
                        <div>
                            <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline">admin@domain.com </p>
                            <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline mt-1"> support@domain.com</p>
                        </div>
                    </div>
                    <div className="border-dashed border-gray-600 border"></div>
                    <div className="flex item-centre space-x-2 ml-5" >
                        <AddLocationAltIcon
                            style={{
                                height: "30px",
                                width: "25px",
                                color: "#ff5e14",
                                marginBottom: " 3px",
                                marginRight: "4px",
                            }}
                            fontSize="small"
                        />
                        <div>
                            <p class="text-gray-700 font-roboto text-l text-center ">625 @ David Blake Road, </p>
                            <p class="text-gray-700 font-roboto text-l   mt-1"> Adventureland, USA</p>
                        </div>
                    </div>
                    <div className="border-dashed border-gray-600 border"></div>
                    <div className="flex item-centre space-x-2 ml-5" >
                        <AccessAlarmIcon
                            style={{
                                height: "30px",
                                width: "25px",
                                color: "#ff5e14",
                                marginBottom: " 3px",
                                marginRight: "4px",
                            }}
                            fontSize="small"
                        />
                        <div>
                            <p class="text-gray-700 font-roboto text-l text-center ">Mon – Sat 9 am to 8 pm </p>
                            <p class="text-gray-700 font-roboto text-l mt-1"> Sun – 10 am to 3 pm</p>
                        </div>
                    </div>

                </div>
            </div>

            <Infotype2 />
            <Infotype3 />
            <Infotype4 />
            <Infotype5 />
            <Infotype6 />
            <Infotype7 />
            <Infotype8 />
            <Infotype9 />

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

export default Contactinfo