import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const images = [
    'https://patrai.wpengine.com/wp-content/uploads/2019/03/sidebar-filler-img-1.jpg',
    'https://patrai.wpengine.com/wp-content/uploads/2019/03/sidebar-filler-img-2.jpg',
    'https://patrai.wpengine.com/wp-content/uploads/2019/04/sidebar-filler-img-3.jpg',
    'https://patrai.wpengine.com/wp-content/uploads/2019/04/sidebar-filler-img-4.jpg',
]



const Electronic = () => {

    const checkboxicon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="orange" d="m92.038 24.333l-8.62-8.622a1.615 1.615 0 0 0-2.282 0L49.987 46.86l-6.07-6.068a1.614 1.614 0 0 0-2.282 0l-8.622 8.622a1.611 1.611 0 0 0 0 2.282l15.782 15.778c.302.302.712.473 1.141.473c.019 0 .037-.01.056-.01c.016 0 .033.009.05.009a1.61 1.61 0 0 0 1.141-.473l40.855-40.857c.63-.632.63-1.653 0-2.283" /><path fill="orange" d="M72.022 53.625v21.159H27.978V30.74h31.06l9.979-9.978H23.193v.007c-.023 0-.044-.007-.068-.007a5.118 5.118 0 0 0-5.113 5H18v54h.013A5.111 5.111 0 0 0 23 84.749v.013h54v-.013a5.11 5.11 0 0 0 4.987-4.987H82V43.647z" /></svg>

    );

    const [activeDiv, setActiveDiv] = useState(1);
    const [activeIcon, setActiveIcon] = useState(1);

    const toggleVisibility = (index) => {
        setActiveDiv(prevActiveDiv => (prevActiveDiv === index ? null : index));
        setActiveIcon(index);
    };

    const [currentIndex, setCurrentIndex] = useState(0);


    const goToPreviousSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };




    return (


        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-4xl tracking-wider">Electronic Materials</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="services">Services</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Electronic Materials</span>
                    </div>
                </div>
            </div>
            <div className=" md:flex md:flex-row flex-col  mt-20 ">
                <div className=" md:flex  md:flex-col flex-col  bg-white  h-full w-96  lg:ml-32 ml-10">
                    <div className=" flex flex-col  items-top text-blue-950    ">
                        <h1 class="font-bold font-poppins text-2xl"> Services</h1>
                        <ul className="flex flex-col   items-left  space-x-2 mt-3" >

                            <li class="text-gray-600 font-roboto  text-s text-left ">
                                <NavLink
                                    to="/electronic"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >
                                    Electronic Material
                                </NavLink>

                            </li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3">
                                <NavLink
                                    to="/bm"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >
                                    Building Management
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-leftmt-3 ">
                                <NavLink
                                    to="/ps"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Power System
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3">
                                <NavLink
                                    to="/ap"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Auto Parts
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3 ">
                                <NavLink
                                    to="/hm"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Heavy Machinery
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3">
                                <NavLink
                                    to="/oil"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >
                                    Oil and Mineral-Oil</NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3">
                                <NavLink
                                    to="/it"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Industry Tools
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3 ">
                                <NavLink
                                    to="/me"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Medic Equipments</NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                            <li class="text-gray-600 font-roboto text-s text-left mt-3">
                                <NavLink
                                    to="/ct"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"
                                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-500   lg:p-0`
                                    }
                                >

                                    Construction Tools
                                </NavLink></li>
                            <div class="border  bg-gray-50 mt-3 "></div>

                        </ul>
                    </div>
                    <div className=" flex flex-col  items-top bg-gray-300  md:w-64 md:h-96 w-96 h-96 mt-10  ">
                        <h1 class="text-blue-950 font-bold text-l ml-5 mt-6 font-poppins ">Broucher</h1>
                        <p class="text-gray-500 text-left text-xs font-roboto ml-5 mt-5 mr-5"> It  is a promotional document created by a company or organization.</p>
                        <p class="text-gray-500 text-left text-xs font-roboto ml-5 mt-5 mr-5"> It  is a promotional document created by a company or organization.</p>
                        <p class="text-gray-500 text-left text-xs font-roboto ml-5 mt-5 mr-5"> It  is a promotional document created by a company or organization.</p>
                        <button class="bg-blue-950 text-white text-xs font-poppins h-7 w-28  mt-5 md:ml-14 ml-32 hover:bg-orange-600 cursor-pointer">Docs Files</button>
                        <button class="bg-orange-600 text-white font-poppins text-xs h-7 w-28 md:ml-14 ml-32 mt-2 hover:bg-blue-950 cursor-pointer">Pdf Files</button>
                    </div>

                    <div className=" flex flex-col  items-top bg-orange-600  md:w-64 md:h-64 w-96 h-72 mt-10 ">
                        <h1 class="text-white font-bold text-l ml-5 mt-6 font-poppins">Contact Us ?</h1>
                        <p class="text-white text-left text-xs font-roboto ml-5 mt-5 mr-5"> It  is a promotional document created by a company or organization.</p>
                        <p class="text-white text-left text-xs font-roboto ml-5 mt-5 mr-5">23 New York,10 Hudson Yards</p>
                        <p class="text-white text-left text-xs font-roboto ml-5 mt-5 mr-5">+(00) 1800-567-8990</p>
                        <p class="text-white text-left font-roboto text-xs ml-5 mt-5 mr-5 hover:text-blue-950 cursor-pointer">office@domain.com</p>
                    </div>


                </div>
                <div class="flex flex-col h-auto">
                    <div className=" flex flex-col  items-top text-orange-500   lg:ml-32 ml-10 md:mt-0 mt-14">
                        <h1 class="font-bold font-poppins text-2xl  ">Electronic Materials</h1>
                        <div className="flex item-centre space-x-2 mt-6" >
                            <span className="text-gray-500 font-roboto text-s text-left mr-24  w-96 lg:w-full lg:max-xl:w-[600px]">
                                Industry tools refer to a diverse range of specialized equipment, software,and  instruments designed to facilitate and enhance various industrial processes across different sectors.These tools play a crucial role in improving efficiency, productivity, and overall performance in industrial settings.With the increasing emphasis on automation, industries employ tools like programmable logic controllers (PLCs), industrial robots, and SCADA systems to streamline processes and reduce human intervention.
                            </span>
                        </div>

                        <div className='flex lg:flex-row flex-col mt-6  ' >
                            <div class="bg-white w-96 h-48">
                                <div className="flex flex-col item-top space-x-2 ">
                                    <h2 className="text-blue-900 text -xl font-poppins font-semibold ">Servicing the Computer</h2>
                                    <p class=" text-gray-500 text-s mt-6  font-roboto text-left w-72 xl:w-96 ">Industries rely on various tools for the regular maintenance and repair of equipment.</p>
                                    <div className="flex item-centre space-x-2 mt-6" >
                                        {checkboxicon}
                                        <span class="text-blue-900 font-roboto text-s text-center">Effective resourcing </span>
                                    </div>
                                    <div className="flex item-centre space-x-2 mt-3" >
                                        {checkboxicon}
                                        <span class="text-blue-900  font-roboto text-s text-center">Well-managed resources</span>
                                    </div>
                                    <div className="flex item-centre space-x-2 mt-3" >
                                        {checkboxicon}
                                        <span class="text-blue-900 font-roboto text-s text-center">Quality resourcing killed</span>
                                    </div>

                                </div>
                            </div>
                            {/*<div class="bg-white md:w-24 md:h-48  mt-20 ">
                        
    </div>*/}
                            <div class="bg-gray-500 w-96 h-64 lg:ml-10 lg:max-xl:h-44  lg:max-xl:w-64 lg:max-xl:ml-5 mt-16 ">
                            </div>

                        </div>




                    </div>
                    <div className=" flex flex-col  items-top lg:ml-32 ml-10 md:mr-32 lg:max-xl:w-[600px] ">
                        <p class="text-gray-500 text-s text-left font-roboto xl:w-full w-96 mt-5 lg:max-xl:w-[600px]">Industry tools refer to a diverse range of specialized equipment, software,and  instruments designed to facilitate and enhance various industrial processes across different sectors.These tools play a crucial role in improving efficiency, productivity, and overall performance in industrial settings.</p>
                        <h1 class=" text-orange-500 text-2xl font-bold mt-8 font-poppins ">Our Best Solutions</h1>
                        <div className='lg:flex lg:flex-row flex flex-col gap-7   lg:items-center mt-3 '>
                            <div className='lg:h-56 lg:w-64 w-96 h-40 bg-blue-950 flex flex-col justify-center items-center md:mr-0 mr-10  hover:bg-orange-600 cursor-pointer'>
                                <svg class="h-14 w-14 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                <h1 class="text-white text-center font-poppins text-l lg:w-32 w-full">Advanced Technology</h1>

                            </div>

                            <div className='lg:h-56 lg:w-64 w-96 h-40 bg-blue-950  flex flex-col justify-center items-center md:mr-0 mr-10  hover:bg-orange-600 cursor-pointer ' >
                                <svg class="h-14 w-14 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>

                                <h1 class="text-white text-center font-poppins text-l lg:w-32 w-full">Expert Engineers</h1>

                            </div>

                            <div className='lg:h-56 lg:w-64 w-96 h-40 bg-blue-950 flex flex-col items-center justify-center md:mr-0 mr-10  hover:bg-orange-600 cursor-pointer'>
                                <svg class="h-14 w-14 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />  <path d="M9 17h6" />  <path d="M13 6h5l3 5v6h-2" /></svg>

                                <h1 class="text-white text-center font-poppins text-l lg:w-32 w-full ">Delivery  on Time</h1>

                            </div>
                        </div>
                    </div>
                    <div className=" flex  flex-col items-top lg:ml-32 ml-10  mr-20">

                        <h1 class=" text-orange-500 text-2xl font-bold mt-5 font-poppins">What We Can Do</h1>
                        <p class="text-gray-500 text-s text-left font-roboto mt-3 xl:w-full w-96 lg:max-xl:w-[600px]">Industry tools refer to a diverse range of specialized equipment, software,and  instruments designed to facilitate and enhance various industrial processes across different sectors.These tools play a crucial role in improving efficiency, productivity, and overall performance in industrial settings.</p>

                        <div className=" md:flex md:flex-row  ">
                            <div class="bg-white md:w-full w-full h-12">
                                <div className="flex  space-x-2 mt-6" >
                                    <span class={` text-orange-600 text-s font-bold text-left font-poppins lg:max-xl:w-96 ${activeIcon === 3 ? ' text-orange-600' : 'text-blue-950'}`}>Industrial profit grow faster in eight months</span>


                                    <div className="flex items-centre  ">
                                        <button className="focus:outline-none" onClick={() => toggleVisibility(1)}>
                                            {activeDiv === 1 ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-600  lg:ml-[500px] lg:max-xl:ml-0 ml-2 mr-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                            </svg>

                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-950 lg:ml-[500px] lg:max-xl:ml-0 ml-2 mr-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>


                                </div>

                            </div>

                        </div>
                        <div class="border  bg-gray-50 mt-6 w-full lg:max-xl:w-96 "></div>
                        {activeDiv === 1 && (
                            <div  >

                                <p class="text-gray-500 text-s text-left mt-6 font-roboto xl:w-full w-96 lg:max-xl:w-[600px]">Profit is a key metric for assessing the performance and viability of industrial businesses. It indicates the efficiency of operations, ability  generate revenue, and overall financial health.Higher industrial profits generally signify successful management, effective production processes, and strong demand for products or services. </p>
                            </div>
                        )}
                    </div>
                    <div class=" flex flex-col items-top lg:ml-32 ml-10 mt-5 mr-20">
                        <div className=" flex flex-row">
                            <div class="bg-white lg:w-full w-[400px] h-12">
                                <div className="flex item-centre space-x-2 " >
                                    <span class={` text-blue-950 text-s font-bold text-left font-poppins lg:max-xl:w-[600px] ${activeIcon === 2 ? ' text-orange-600' : 'text-blue-950'}`}>We work to reduce air emissions associated with our operations</span>

                                    <div className="flex items-centre space-x-2 ">
                                        <button className="focus:outline-none" onClick={() => toggleVisibility(2)}>
                                            {activeDiv === 2 ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-600  lg:ml-[338px] lg:max-xl:ml-0 ml-2 mr-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                            </svg>

                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-950 lg:ml-[338px] lg:max-xl:ml-0 ml-2 mr-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            )}

                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="border  bg-gray-50 mt-6 xl:mt-0 w-full lg:max-xl:w-96 "></div>
                        {activeDiv === 2 && (
                            <div  >

                                <p class="text-gray-500 text-s text-left mt-2 font-roboto xl:w-full w-96 lg:max-xl:w-[600px] mb-4">Profit is a key metric for assessing the performance and viability of industrial businesses. It indicates the efficiency of operations, ability  generate revenue, and overall financial health.Higher industrial profits generally signify successful management, effective production processes, and strong demand for products or services. </p>
                            </div>
                        )}
                        <div className=" flex flex-row ">
                            <div class="bg-white lg:w-full w-[400px] h-12 ">
                                <div className="flex item-centre   lg:mt-4 mt-7" >
                                    <span className={`text-s font-bold text-left font-poppins lg:max-xl:w-[600px] ${activeIcon === 3 ? ' text-orange-600' : 'text-blue-950'}`}>A brilliant record in responding to complex customer requirements</span>

                                    <div className="flex items-centre  ">

                                        <button className="focus:outline-none" onClick={() => toggleVisibility(3)}>
                                            {activeDiv === 3 ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-600  lg:ml-[328px] lg:max-xl:ml-0 ml-2 mr-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                            </svg>

                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-950 lg:ml-[328px] lg:max-xl:ml-0 ml-2 mr-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            )}
                                        </button>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="border  bg-gray-50 mt-12 xl:mt-4 w-full lg:max-xl:w-96 "></div>
                        {activeDiv === 3 && (
                            <div>

                                <p class="text-gray-500 text-s text-left mt-2 font-roboto xl:w-full w-96 lg:max-xl:w-[600px] ">Profit is a key metric for assessing the performance and viability of industrial businesses. It indicates the efficiency of operations, ability  generate revenue, and overall financial health.Higher industrial profits generally signify successful management, effective production processes, and strong demand for products or services. </p>
                            </div>
                        )}
                        <div className='md:flex md:flex-row flex flex-col gap-7  items-center xl:mt-10 mt-12 lg:ml-10 cursor-move relative ' >
                            <div className='slide-container md:max-lg:h-40 md:max-lg:w-44  lg:max-xl:h-56  lg:max-xl:w-64    h-72 w-96 bg-gray-500 flex flex-col items-left relative cursor-move' >
                                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-96 h-72 cursor-move" />
                                <div className="absolute inset-0 md:max-lg:h-[141px] md:max-lg:w-[160px] lg:max-xl:h-[205px]  lg:max-xl:w-[240px] h-[270px] w-[365px] bg-blue-950 mt-2 lg:max-xl:ml-2 md:max-lg:ml-2 ml-2 hover:bg-blue-950 hover:opacity-60 transition duration-300 opacity-0  flex flex-col justify-center items-center cursor-move  " ></div>
                                <div class=" bg-blue-950  hover:bg-orange-600 cursor-pointer w-12 h-14 lg:mt-32 md:max-lg:mt-14 lg:max-xl:mt-20 mt-24 absolute -left-4 flex justify-center items-center drop-shadow-md  " onClick={goToPreviousSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white  ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                </div>
                                <div class=" bg-blue-950 md:hidden hover:bg-orange-600 text-white cursor-pointer w-12 h-14 lg:mt-14 mt-24 flex  justify-center items-center drop-shadow-md md:max-lg:mt-8 md:max-lg:ml-[145px] absolute -right-4 lg:max-xl:ml-[225px]" onClick={goToNextSlide}>
                                    <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            <div className='cursor-move slide-container md:max-lg:h-40 md:max-lg:w-44 lg:max-xl:h-56  lg:max-xl:w-64  h-72 w-96 bg-gray-500 md:flex hidden  flex-col justify-center items-center  items-right relative' >
                                <img src={images[(currentIndex + 1) % images.length]} alt={`Slide ${(currentIndex + 1) % images.length}`} className="w-96 h-72 cursor-move" />
                                <div className="absolute inset-0 md:max-lg:h-[141px] md:max-lg:w-[158px] lg:max-xl:h-[205px]  lg:max-xl:w-[240px] h-[270px] w-[365px]   bg-blue-950 mt-2 ml-2 hover:bg-blue-950 hover:opacity-60 transition duration-300 opacity-0  flex flex-col cursor-move  " ></div>

                                <div class=" bg-blue-950 hover:bg-orange-600 text-white cursor-pointer w-12 h-14 lg:mt-7 mt-24 flex  justify-center items-center drop-shadow-md md:max-lg:mt-1 md:max-lg:ml-[145px] absolute -right-4 lg:max-xl:ml-[225px]" onClick={goToNextSlide}>
                                    <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                    </svg>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div >



        </>
    )
}

export default Electronic;