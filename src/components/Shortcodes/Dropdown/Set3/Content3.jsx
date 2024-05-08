import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const Content3 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 " >TWITTER <span className="text-blue-950">TWEETS</span></h1>
            </div>
            <div className="border border-black w-full mt-20 relative ">

            </div>
            <div className="flex justify-center items-center  ">
                <TwitterIcon
                    style={{
                        height: "70px",
                        width: "70px",
                        color: "white",
                        marginBottom: " 6px",
                        marginRight: "7px",
                    }}
                    className="border rounded-full bg-black px-2 py-2 absolute "
                />
            </div>
            <div className="flex justify-center items-center py-20 text-gray-700">
                <p>No Twitter Tweets found.</p>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 " >SEPRATOR  <span className="text-blue-950">TYPES</span></h1>
            </div>
            <div className="flex justify-center items-center">
                <div className=" border border-orange-500 w-10 mt-10  "></div>
            </div>
            <div className=" border border-gray-100  mt-14 ml-32 mr-32  "></div>
            <div className=" border-dashed border border-black  mt-14 ml-32 mr-32 "></div>
            <div className=" border border-dotted border-black  mt-14 ml-32 mr-32 "></div>
            <div className="flex justify-center items-center">
                <div className=" border-2 border-black w-40 mt-14  "></div>
            </div>
            <div className="flex justify-center items-center">
                <div className=" border border-black w-40 mt-1  "></div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className=" border border-gray w-16 mt-14 mr-2 "></div>
                <div className=" border  rounded-none rotate-45 h-3 bg-orange-500 w-3 mt-14  "></div>
                <div className=" border border-gray w-16 mt-14 ml-2 "></div>
            </div>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 1</span></h1>
            </div>
            <div className="lg:flex lg:flex-row md:max-lg:px-40 flex flex-col mt-14 ">
                <div className="flex justify-center items-center w-[550px] h-32 bg-orange-600">
                    <h1 className="text-4xl font-bold text-white">NEWSLETTER</h1>
                </div>
                <div className="lg:flex lg:flex-row flex flex-col justify-center items-center lg:h-32 h-72 lg:w-[1000px] w-[550px] bg-black">
                    <div className="lg:flex lg:flex-row flex flex-col gap-10 mr-5">

                        <div className="">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="w-[270px] h-12 px-5 py-2 border text-black outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                className="w-[270px] h-12 px-5 py-2 border outline-none focus:border-blue-500"
                            />

                        </div>
                        <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                            <button className="hover:bg-blue-950 bg-orange-600 h-12 w-24  lg:flex gap-3 items-center justify-center text-white ">
                                Subscribe

                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 2</span></h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-7">
                <h1 class="text-4xl font-bold ">Newsletter</h1>
                <p class="text-gray-400 md:px-0 px-5 text-center mt-2">This is dummy content This is dummy content. This is dummy content. This is dummy content This is dummy content..</p>
            </div>
            <div className="md:flex md:flex-row flex flex-col items-center md:ml-44  mt-10 lg:h-32 h-72 lg:w-[1200px] w-[550px] md:max-lg:w-[950px] md:max-lg:h-[200px] md:max-lg:ml-10 lg:max-xl:ml-10">
                <div className="md:flex md:flex-row flex flex-col gap-10 mr-5">

                    <div className="mt-4 md:mt-0">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-[400px] md:max-lg:w-[270px] lg:max-xl:w-[300px]  h-12 px-5 py-2  text-black outline-none focus:border-blue-500 bg-gray-200  border-l-4 border-orange-500"
                        />
                    </div>
                    <div className="">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-[400px] md:max-lg:w-[270px] lg:max-xl:w-[300px]  h-12 px-5 py-2  outline-none focus:border-blue-500 bg-gray-200 border-l-4 border-orange-500"
                        />
                    </div>
                    <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                        <button className="hover:bg-blue-950 bg-orange-500 h-12 w-[300px] md:max-lg:w-[270px] lg:max-xl:w-[300px]  flex gap-3 items-center justify-center  text-white ">
                            Subscribe Now

                        </button>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 3</span></h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-7">
                <h1 class="text-4xl font-bold ">Newsletter</h1>
                <p class="text-gray-400 md:px-0 px-5 text-center mt-2">This is dummy content This is dummy content. This is dummy content. This is dummy content This is dummy content..</p>
            </div>

            <div className="md:flex md:flex-row flex flex-col justify-center items-center md:ml-72  mt-10 lg:h-32 h-72 lg:w-[950px] w-[550px] md:max-lg:w-[950px] md:max-lg:h-[200px] md:max-lg:ml-10 lg:max-xl:ml-10 bg-gray-200">
                <div className="md:flex md:flex-row flex flex-col gap-10 mr-5">

                    <div className="">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-[270px] h-12 px-5 py-2 border text-black outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-[270px] h-12 px-5 py-2 border outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                        <button className="hover:bg-blue-950 bg-orange-600 h-12 w-[270px]  flex gap-3 items-center justify-center  text-white ">
                            Subscribe to Email Updates

                        </button>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 4</span></h1>
            </div>
            <div className="flex flex-col ml-32 mt-7">
                <h1 class="text-4xl font-bold ">Newsletter</h1>
                <p class="text-gray-400 md:px-0 px-5  mt-2">This is dummy content This is dummy content. This is dummy content. This is dummy content This is dummy content..</p>
            </div>
            <div className="md:flex md:flex-row flex flex-col items-center md:ml-32   mt-5 lg:h-32 h-72 lg:w-[1200px] w-[550px] md:max-lg:w-[950px] md:max-lg:h-[200px] md:max-lg:ml-10 lg:max-xl:ml-10">
                <div className="md:flex md:flex-row flex flex-col gap-10 mr-5">

                    <div className="mt-4 md:mt-0">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="md:w-[600px] w-[400px] md:max-lg:w-[390px] lg:max-xl:w-[450px]  h-12 px-5 py-2  text-black outline-none focus:border-blue-600  border"
                        />
                    </div>
                    <div className="">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="md:w-[600px] w-[400px] md:max-lg:w-[390px] lg:max-xl:w-[450px]  h-12 px-5 py-2  outline-none focus:border-blue-600  border"
                        />
                    </div>


                </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                <button className="hover:bg-blue-950 bg-orange-500 h-12 w-[200px] md:max-lg:w-[270px] lg:max-xl:w-[300px]  flex gap-3 items-center justify-center  text-white ">
                    Subscribe Now

                </button>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 5</span></h1>
            </div>
            <div className="flex  justify-center items-center">
                <div className="flex flex-col md:w-[600px] w-[400px]  justify-center items-center h-[400px]  border-8 border-gray-400 mt-7">
                    <h1 class="text-4xl font-bold ">Newsletter</h1>
                    <p class="text-gray-400 md:px-10 px-5 text-center  mt-2">Sign-up to get the latest offers and news and stay updated. Note:</p>
                    <p class="text-gray-400 md:px-10 px-5 font-roboto mt-2">We do not spam</p>
                    <div className=" mt-7 flex flex-col gap-7  ">

                        <div className="">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                className="md:w-[500px] w-[300px] h-12 px-5 py-2 border rounded-md  text-black outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                className="md:w-[500px] w-[300px] h-12 px-5 py-2 border rounded-md outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                            <button className="hover:bg-blue-950 bg-orange-600 h-12 md:w-[500px] w-[300px] rounded-md flex gap-3 items-center justify-center  text-white ">
                                Subscribe Now

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 6</span></h1>
            </div>
            <div className="flex flex-col justify-center items-center mt-7">
                <h1 class="text-4xl font-bold ">Newsletter</h1>
                <p class="text-gray-400 md:px-0 px-5 text-center mt-2">This is dummy content This is dummy content. This is dummy content. This is dummy content This is dummy content..</p>
            </div>
            <div className="flex justify-center items-center ">
                <div className=" md:h-20 h-32 w-[800px] flex justify-center items-center ">
                    <div className="md:flex md:flex-row flex flex-col gap-5 ">


                        <div className="">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                className="md:w-[550px] w-[370px] md:max-lg:w-[370px] lg:max-xl:w-[550px] text-xl rounded-md  h-12 px-5 py-2  outline-none focus:border-blue-500 border bg-gray-200 "
                            />
                        </div>
                        <div className="lg:flex lg:justify-center lg:items-center flex justify-center items-center">
                            <button className="hover:bg-blue-950 bg-orange-500 h-12 w-[200px] md:max-lg:w-[200px] lg:max-xl:w-[200px]  flex gap-3 items-center justify-center rounded-md text-white ">
                                Subscribe Now

                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins ">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-600 flex justify-center gap-4 mt-20" >NEWSLETTER  <span className="text-blue-950">TYPE 7</span></h1>
            </div>
            <div className="flex  justify-center items-center mt-5">
                <div className="flex flex-col w-full  justify-center items-center h-[450px] gap-5  bg-blue-950 mt-3">
                    <h1 class="text-5xl font-bold text-white ">Newsletter</h1>
                    <p class="text-white md:px-32 px-5 text-center  mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <div className=" md:flex md:flex-row flex flex-col mt-7  gap-7  ">


                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email Address"
                                className="md:w-[500px] w-[400px] h-16 px-5 py-2 border  outline-none focus:border-indigo-500"
                            />
                            <NearMeOutlinedIcon
                                style={{
                                    height: "30px",
                                    color: "gray",
                                    marginBottom: " 2px",
                                    marginRight: "2px",
                                }}
                                className="absolute  right-4 mt-8 transform -translate-y-1/2 cursor-pointer" />
                        </div>
                        <div className="bg-black flex flex-col text-s font-roboto  justify-center items-center text-center text-white md:h-20 h-10 md:w-64 w-96">
                            <p>Join 138,554 who are already getting the benefits</p>

                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Content3