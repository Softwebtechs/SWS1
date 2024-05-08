import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Infotype5 = () => {
    return (
        <>
            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >CONTACT INFO <span className="text-blue-950">TYPE 5</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col md:gap-5 gap-10 sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col  gap-7">
                    <div className="group hover:bg-orange-700 flex flex-row md:gap-8 gap-4 justify-center items-center h-80 w-72 lg:max-xl:w-96">
                        <div className="flex flex-col justify-center items-center gap-4 ">

                            <div class=" rounded-full bg-orange-700 group-hover:bg-white w-32 h-32  flex justify-center items-center ">
                                <PhoneIcon
                                    style={{
                                        height: "70px",
                                        width: "70px",
                                        color: "black",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>

                            <h1 class="font-bold font-poppins text-xl group-hover:text-white">TALK TO US</h1>
                            <div>
                                <p class="text-gray-700 font-semibold group-hover:text-white">Toll Free: <span class="text-gray-400 group-hover:text-white">1224 2234</span></p>
                                <p class="text-gray-700 font-semibold group-hover:text-white gap-2 ">Fax: <span class="text-gray-400 group-hover:text-white">1224 2234 225</span></p>

                            </div>
                        </div>
                    </div>
                    <div className="group hover:bg-blue-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-80 w-72 lg:max-xl:w-96">
                        <div className="flex flex-col justify-center items-center gap-4 ">

                            <div class=" rounded-full bg-blue-500 group-hover:bg-white w-32 h-32  flex justify-center items-center ">
                                <EmailIcon
                                    style={{
                                        height: "70px",
                                        width: "70px",
                                        color: "black",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>

                            <h1 class="font-bold font-poppins text-l group-hover:text-white">MAIL US @</h1>
                            <div>
                                <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline group-hover:text-white">admin@domain.com </p>
                                <p class="hover:text-gray-700 font-roboto text-l text-center cursor-pointer text-orange-600 hover:underline mt-1 group-hover:text-white"> support@domain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col  gap-7">
                    <div className="group hover:bg-pink-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-80 w-72 lg:max-xl:w-96">
                        <div className="flex flex-col justify-center items-center gap-4 ">

                            <div class=" rounded-full bg-pink-500 group-hover:bg-white w-32 h-32  flex justify-center items-center ">
                                <AddLocationAltIcon
                                    style={{
                                        height: "70px",
                                        width: "70px",
                                        color: "black",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>

                            <h1 class="font-bold font-poppins text-l group-hover:text-white">OUR LOCATION</h1>
                            <div>
                                <p class="text-gray-700 font-roboto text-l text-center group-hover:text-white">625 @ David Blake Road, </p>
                                <p class="text-gray-700 font-roboto text-l group-hover:text-white text-center  mt-1"> Adventureland, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="group hover:bg-green-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-80 w-72 lg:max-xl:w-96">
                        <div className="flex flex-col justify-center items-center gap-4 ">

                            <div class=" rounded-full bg-green-500 group-hover:bg-white w-32 h-32  flex justify-center items-center ">
                                <AccessAlarmIcon
                                    style={{
                                        height: "70px",
                                        width: "70px",
                                        color: "black",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>

                            <h1 class="font-bold font-poppins text-l group-hover:text-white">OPENING HOURS</h1>
                            <div>
                                <p class="text-gray-700 font-roboto text-l text-center group-hover:text-white ">Mon – Sat 9 am to 8 pm </p>
                                <p class="text-gray-700 font-roboto text-l mt-1 group-hover:text-white"> Sun – 10 am to 3 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infotype5