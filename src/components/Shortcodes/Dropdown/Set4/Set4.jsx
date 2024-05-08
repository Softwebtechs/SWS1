import React from 'react'
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from './Card';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card8 from './Card8';
import Card9 from './Card9';
import Card7 from './Card7';

function Set4() {
    const image1 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team1-1.jpg"
    const image2 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team1-2.jpg"
    const image3 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team1-3.jpg"
    const image4 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team1-4.jpg"
    const image7 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team3-1.jpg"
    const image8 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team3-2.jpg"
    const image9 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team3-3.jpg"
    const image10 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team3-4.jpg"
    const image11 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team4-1.jpg"
    const image12 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team4-2.jpg"
    const image13 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team4-3.jpg"
    const image14 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team4-4.jpg"
    const image15 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team5-1.jpg"
    const image16 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team5-2.jpg"
    const image17 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team5-3.jpg"
    const image18 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team5-4.jpg"
    const image19 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team6-1.jpg"
    const image20 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team6-2.jpg"
    const image21 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team6-4.jpg"
    const image22 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team6-3.jpg"
    const image23 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team8-1.jpg"
    const image24 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team8-2.jpg"
    const image25 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team8-3.jpg"
    const image26 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team8-4.jpg"
    const image27 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team9-1.jpg"
    const image28 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team9-2-.jpg"
    const image29 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team9-3.jpg"
    const image30 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team7-1.jpg"
    const image31 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team7-2.jpg"
    const image32 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team7-3.jpg"
    const image33 = "https://patrai.wpengine.com/wp-content/uploads/2019/04/team7-4.jpg"


    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Team</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Team</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 1</span></h1>
            </div>

            <div className="lg:flex lg:flex-row flex flex-col gap-5  md:px-40 px-10 py-10">
                <Card
                    image={image1}
                    name={"Jhones Thomas"}
                    position={"Team Lead"} />
                <Card
                    image={image2}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card
                    image={image3}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card
                    image={image4}
                    name={"Will Smith"}
                    position={"Asst Manager"} />
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 2</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10">
                <div class="bg-white border-2 border-solid border-gray-200 hover:border-orange-500 hover:shadow-lg h-80 sm:w-[700px] w-[400px]">
                    <div class="flex flex-row gap-10">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team2-1.jpg" alt="img1" class="h-72 w-40 mt-3 ml-3" />
                        <div class="flex flex-col mt- 5">
                            <div className="flex flex-col justify-center items-left mt-12 gap-2">
                                <h1 class="text-xl font-bold font-poppins">Jhones Thomes</h1>
                                <p class="text-l  font-poppins">Team Lead</p>
                                <div class="flex flex-row gap-4">
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <TwitterIcon
                                            style={{
                                                color: "white",
                                                marginBottom: " 3px",
                                                marginRight: "4px",
                                                width: "20px",
                                                height: "20px"
                                            }}
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class=" w-5 h-5 text-white cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class="w-6 h-6 text-white dark:text-white hover:bg-blue-950 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                            <p class="sm:mt-7 mt-4 text-left text-gray-700 mr-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white border-2 border-solid border-gray-200 hover:border-orange-500 hover:shadow-lg h-80 sm:w-[700px] w-[400px]">
                    <div class="flex flex-row gap-10">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team2-2.jpg" alt="img2" class="h-72 w-40 mt-3 ml-3" />
                        <div class="flex flex-col mt- 5">
                            <div className="flex flex-col justify-center items-left mt-12 gap-2">
                                <h1 class="text-xl font-bold font-poppins">Chris Lohan</h1>
                                <p class="text-l  font-poppins">Hr Manager</p>
                                <div class="flex flex-row gap-4">
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <TwitterIcon
                                            style={{
                                                color: "white",
                                                marginBottom: " 3px",
                                                marginRight: "4px",
                                                width: "20px",
                                                height: "20px"
                                            }}
                                            fontSize="small"
                                        />
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class=" w-5 h-5 text-white cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="hover:bg-blue-950 bg-orange-500 w-8 h-8 flex justify-center items-center rounded cursor-pointer">
                                        <svg class="w-6 h-6 text-white dark:text-white hover:bg-blue-950 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd" />
                                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                                        </svg>
                                    </div>

                                </div>
                            </div>
                            <p class="sm:mt-7 mt-4 text-left text-gray-700 mr-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at.</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 3</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card3
                    image={image7}
                    name={"Jhones Thomas"}
                    position={"Team Lead"} />
                <Card3
                    image={image8}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card3
                    image={image9}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card3
                    image={image10}
                    name={"Will Smith"}
                    position={"Asst Manager"} />

            </div>
            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 4</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">

                <Card4
                    image={image11}
                    name={"Jhones Thomas"}
                    position={"Team Lead"} />
                <Card4
                    image={image12}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card4
                    image={image13}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card4
                    image={image14}
                    name={"Will Smith"}
                    position={"Asst Manager"} />
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 5</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card5
                    image={image15}
                    name={"Jhones Thomas"}
                    position={"Team Lead"} />
                <Card5
                    image={image16}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card5
                    image={image17}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card5
                    image={image18}
                    name={"Will Smith"}
                    position={"Asst Manager"} />
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 6</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col md:gap-7 gap-20 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card6
                    image={image19}
                    name={"Lindsay Lohan"}
                    position={"Marketing"} />
                <Card6
                    image={image20}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card6
                    image={image21}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card6
                    image={image22}
                    name={"Will Smith"}
                    position={"Asst Manager"} />

            </div>
            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 7</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card7
                    image={image30}
                    name={"Jhones Thames"}
                    position={"Team Lead"} />
                <Card7
                    image={image31}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card7
                    image={image32}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card7
                    image={image33}
                    name={"Will Smith"}
                    position={"Asst Manager"} />
            </div>


            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 8</span></h1>
            </div>
            <div className=" lg:flex lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card8
                    image={image23}
                    name={"Jhones Thames"}
                    position={"Team Lead"} />
                <Card8
                    image={image24}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card8
                    image={image25}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
                <Card8
                    image={image26}
                    name={"Will Smith"}
                    position={"Asst Manager"} />
            </div>

            <div className="flex flex-col justigy-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >TEAM <span className="text-blue-950">TYPE 9</span></h1>
            </div>
            <div className=" md:flex md:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7 sm:px-40 px-5 py-10 lg:max-xl:px-10  ">
                <Card9
                    image={image27}
                    name={"Jhones Thames"}
                    position={"Team Lead"} />
                <Card9
                    image={image28}
                    name={"Chris Lohan"}
                    position={"Hr Manager"} />
                <Card9
                    image={image29}
                    name={"Daniel Craig"}
                    position={"Tech Analyst"} />
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

export default Set4