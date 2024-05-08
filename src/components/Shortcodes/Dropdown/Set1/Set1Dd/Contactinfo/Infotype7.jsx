import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Infotype7 = () => {
    return (
        <>
            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >CONTACT INFO <span className="text-blue-950">TYPE 7</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7 ">
                    <div className="group flex flex-col">
                        <div className=" border border-orange-500 group-hover:border-black flex flex-row md:gap-8 gap-4 justify-center items-center h-40 w-72 lg:max-xl:w-96">
                            <div className="flex flex-col justify-center items-center gap-4 ">
                                <h1 class="font-bold font-poppins text-l">TALK TO US</h1>
                                <div>
                                    <p class="text-gray-700 font-semibold     ">Toll Free: <span class="text-gray-400">1224 2234</span></p>
                                    <p class="text-gray-700 font-semibold    gap-2 ">Fax: <span class="text-gray-400">1224 2234 225</span></p>

                                </div>
                            </div>
                        </div>
                        <div className="group  bg-orange-500 group-hover:bg-black flex  justify-center items-center h-16 w-72 lg:max-xl:w-96">
                            <PhoneIcon
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    color: "white",
                                    marginBottom: " 5px",
                                }}

                            />
                        </div>

                    </div>
                    <div className="group flex flex-col">
                        <div className=" border border-orange-500 group-hover:border-black flex flex-row md:gap-8 gap-4 justify-center items-center h-40 w-72 lg:max-xl:w-96">
                            <div className="flex flex-col justify-center items-center gap-4 ">
                                <h1 class="font-bold font-poppins text-l">MAIL US @</h1>
                                <div>
                                    <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline">admin@domain.com </p>
                                    <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline mt-1"> support@domain.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="group  bg-orange-500 group-hover:bg-black flex  justify-center items-center h-16 w-72 lg:max-xl:w-96">
                            <EmailIcon
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    color: "white",
                                    marginBottom: " 5px",
                                }}

                            />
                        </div>

                    </div>

                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7 ">
                    <div className="group flex flex-col">
                        <div className=" border border-orange-500 group-hover:border-black flex flex-row md:gap-8 gap-4 justify-center items-center h-40 w-72 lg:max-xl:w-96">
                            <div className="flex flex-col justify-center items-center gap-4 ">
                                <h1 class="font-bold font-poppins text-l">OUR LOCATION</h1>
                                <div>
                                    <p class="text-gray-700 font-roboto text-l text-center ">625 @ David Blake Road, </p>
                                    <p class="text-gray-700 font-roboto text-l   mt-1"> Adventureland, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="group  bg-orange-500 group-hover:bg-black flex  justify-center items-center h-16 w-72 lg:max-xl:w-96">
                            <AddLocationAltIcon
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    color: "white",
                                    marginBottom: " 5px",
                                }}

                            />
                        </div>

                    </div>
                    <div className="group flex flex-col">
                        <div className=" border border-orange-500 group-hover:border-black flex flex-row md:gap-8 gap-4 justify-center items-center h-40 w-72 lg:max-xl:w-96">
                            <div className="flex flex-col justify-center items-center gap-4 ">
                                <h1 class="font-bold font-poppins text-l">OPENING HOURS</h1>
                                <div>
                                    <p class="text-gray-700 font-roboto text-l text-center ">Mon – Sat 9 am to 8 pm </p>
                                    <p class="text-gray-700 font-roboto text-l mt-1"> Sun – 10 am to 3 pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="group  bg-orange-500 group-hover:bg-black flex  justify-center items-center h-16 w-72 lg:max-xl:w-96">
                            <AccessAlarmIcon
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    color: "white",
                                    marginBottom: " 5px",
                                }}

                            />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Infotype7