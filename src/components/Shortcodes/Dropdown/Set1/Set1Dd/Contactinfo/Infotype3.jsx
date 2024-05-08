import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Infotype3 = () => {
    return (
        <>
            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >CONTACT INFO <span className="text-blue-950">TYPE 3</span></h1>
            </div>

            <div className=" xl:flex xl:flex-row flex flex-col md:gap-5 gap-10 sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col  gap-7">
                    <div className="group bg-orange-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-56 w-72 lg:max-xl:w-96">
                        <div className="border-2 w-64 lg:max-xl:w-80 h-56 mt-6 border-white flex flex-col gap-7 justify-center items-center">
                            <h1 class="text-xl text-white ">PHONE NUMBER</h1>

                            <div>
                                <p class="text-white font-semibold   text-center  ">Toll Free: <span class="text-white">1224 2234</span></p>
                                <p class="text-white font-semibold   text-center gap-2 ">Fax: <span class="text-white">1224 2234 225</span></p>

                            </div>
                            <div class="group-hover:invisible visible bg-white w-14 h-10 absolute mt-40 flex justify-center items-center">
                                <PhoneIcon
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        color: "#ff5e14",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                            <div class="group-hover:visible invisible">
                                <PhoneIcon
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="group bg-orange-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-56 w-72 lg:max-xl:w-96">
                        <div className="border-2 w-64 lg:max-xl:w-80 h-56 mt-6 border-white flex flex-col gap-7 justify-center items-center">
                            <h1 class="text-xl text-white ">MAIL US @</h1>

                            <div>
                                <p class=" font-roboto text-l text-center cursor-pointer text-white hover:underline">admin@domain.com </p>
                                <p class=" font-roboto text-l text-center cursor-pointer text-white hover:underline mt-1"> support@domain.com</p>
                            </div>
                            <div class="group-hover:invisible visible bg-white w-14 h-10 absolute mt-40 flex justify-center items-center">
                                <EmailIcon
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        color: "#ff5e14",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                            <div class="group-hover:visible invisible">
                                <EmailIcon
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7 ">
                    <div className="group bg-orange-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-56 w-72 lg:max-xl:w-96">
                        <div className="border-2 w-64 lg:max-xl:w-80 h-56 mt-6 border-white flex flex-col gap-7 justify-center items-center">
                            <h1 class="text-xl text-white ">OUR ADDRESS</h1>

                            <div>
                                <p class="text-white font-roboto text-l text-center ">625 @ David Blake Road, </p>
                                <p class="text-white font-roboto text-l   mt-1"> Adventureland, USA</p>
                            </div>
                            <div class="group-hover:invisible visible bg-white w-14 h-10 absolute mt-40 flex justify-center items-center">
                                <AddLocationAltIcon
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        color: "#ff5e14",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                            <div class="group-hover:visible invisible">
                                <AddLocationAltIcon
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="group bg-orange-500 flex flex-row md:gap-8 gap-4 justify-center items-center h-56 w-72 lg:max-xl:w-96">
                        <div className="border-2 w-64 lg:max-xl:w-80 h-56 mt-6 border-white flex flex-col gap-7 justify-center items-center">
                            <h1 class="text-xl text-white ">OPENING HOURS</h1>

                            <div>
                                <p class="text-white font-roboto text-l text-center ">Mon – Sat 9 am to 8 pm </p>
                                <p class="text-white font-roboto text-l mt-1"> Sun – 10 am to 3 pm</p>
                            </div>
                            <div class="group-hover:invisible visible bg-white w-14 h-10 absolute mt-40 flex justify-center items-center">
                                <AccessAlarmIcon
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        color: "#ff5e14",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                            <div class="group-hover:visible invisible">
                                <AccessAlarmIcon
                                    style={{
                                        height: "50px",
                                        width: "50px",
                                        color: "white",
                                        marginBottom: " 5px",
                                    }}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Infotype3