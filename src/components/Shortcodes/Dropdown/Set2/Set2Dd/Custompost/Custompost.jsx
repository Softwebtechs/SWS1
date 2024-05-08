import React from 'react'
import { Link } from "react-router-dom";
import TodayIcon from '@mui/icons-material/Today';

const Custompost = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Custom Posts</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Custom Posts</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >Protfolio  <span className="text-blue-950">2 Columns</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-7 px-40 py-20">
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
            </div>

            {/*Column 3*/}
            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >Protfolio  <span className="text-blue-950">3 Columns</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-7 px-40 py-20">
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
            </div>

            {/* 4 column*/}

            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >Protfolio  <span className="text-blue-950">3 Columns</span></h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col gap-7 px-40 py-20">
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat">
                    <img src="https://akv-ia.com/wp-content/uploads/2023/11/img-pisch-2.jpeg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0   bg-black bg-fixed opacity-0 transition duration-300  hover:opacity-70 flex justify-center items-center text-5xl text-white ">
                        <div class="text-8xl w-32 h-32 flex justify-center items-center text-white cursor-pointer">+</div>
                    </div>
                </div>
            </div>

            {/*Blog 1*/}

            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >Blog  <span className="text-blue-950">2 Columns</span></h1>
            </div>

            <div className="md:flex md:flex-row  flex flex-col gap-7 md:px-40 md:max-lg:px-16 lg:max-xl:px-20 px-10 py-20">
                <div className="group  relative overflow-hidden  md:w-[650px] h-full w-96 md:max-lg:w-[600px] lg:max-xl:w-[620px] bg-gray-100  bg-cover bg-no-repeat">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/01/blog-1-1000x682.jpg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out h-[450px] md:w-[650px]" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 overflow-hidden h-[473px] md:w-[650px] w-96  bg-gray-200 bg-fixed opacity-0 transition duration-300  group-hover:opacity-40 flex justify-center items-center text-5xl text-white ">

                    </div>
                    <div class="flex flex-col gap-5 px-10 py-7">
                        <h1 class="font-bold text-xl">Puzzle Knowledge</h1>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</p>
                    </div>
                    <div class="border border-gray-300 w-full"></div>
                    <div class="flex flex-row py-5 px-5 md:gap-20 md:max-lg:gap-5">
                        <div class="flex flex-row gap-2">
                            <div class="text-gray-700">By</div>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="img1" class="h-8 w-8" />
                            <span class="text-orange-500 hover:text-gray-700">Admin</span>
                        </div>
                        <div class="flex flex-row gap-2 md:ml-44 ml-20 lg:max-xl:ml-32 md:max-lg:ml-2">
                            <TodayIcon />
                            <p class="text-gray-700"> April 24, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden  md:w-[650px] h-full w-96 md:max-lg:w-[600px] lg:max-xl:w-[620px] bg-gray-100  bg-cover bg-no-repeat">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/01/blog-2-1-1000x682.jpg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out h-[450px] md:w-[650px]" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-[473px] md:w-[650px] w-96  bg-gray-200 bg-fixed opacity-0 transition duration-300  group-hover:opacity-40 flex justify-center items-center text-5xl text-white ">

                    </div>
                    <div class="flex flex-col gap-5 px-10 py-7">
                        <h1 class="font-bold text-xl">Electric Power Station</h1>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</p>
                    </div>
                    <div class="border border-gray-300 w-full"></div>
                    <div class="flex flex-row py-5 px-5 md:gap-20 md:max-lg:gap-5">
                        <div class="flex flex-row gap-2">
                            <div class="text-gray-700">By</div>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="img1" class="h-8 w-8" />
                            <span class="text-orange-500 hover:text-gray-700">Admin</span>
                        </div>
                        <div class="flex flex-row gap-2 md:ml-44 ml-20 lg:max-xl:ml-32 md:max-lg:ml-2">
                            <TodayIcon />
                            <p class="text-gray-700"> April 24, 2024</p>
                        </div>
                    </div>
                </div>


            </div>

            {/*Blog 2*/}
            <div className="flex flex-col md:px-40 px-10  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl  w-full font-bold text-orange-500 flex  gap-4 " >Blog  <span className="text-blue-950">3 Columns</span></h1>
            </div>

            <div className="md:flex md:flex-row  flex flex-col gap-7 md:px-40 md:max-lg:px-5 lg:max-xl:px-14 px-10 py-20">
                <div className="group  relative overflow-hidden  md:w-[650px] h-full w-96 md:max-lg:w-[600px] lg:max-xl:w-[620px] bg-gray-100  bg-cover bg-no-repeat">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/01/blog-1-1000x682.jpg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out h-[450px] md:w-[650px]" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 overflow-hidden h-[473px] md:w-[650px] w-96  bg-gray-200 bg-fixed opacity-0 transition duration-300  group-hover:opacity-40 flex justify-center items-center text-5xl text-white ">

                    </div>
                    <div class="flex flex-col gap-5 px-10 py-7">
                        <h1 class="font-bold text-xl">Puzzle Knowledge</h1>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</p>
                    </div>
                    <div class="border border-gray-300 w-full"></div>
                    <div class="flex flex-row py-5 px-5 md:max-lg:px-2 md:gap-7 md:max-lg:gap-5">
                        <div class="flex flex-row gap-1">
                            <div class="text-gray-700">By</div>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="img1" class="h-8 w-8" />
                            <span class="text-orange-500 hover:text-gray-700">Admin</span>
                        </div>
                        <div class="flex flex-row gap-2 md:ml-16 ml-20 lg:max-xl:ml-7 md:max-lg:ml-2">
                            <TodayIcon />
                            <p class="text-gray-700"> April 24, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden  md:w-[650px] h-full w-96 md:max-lg:w-[600px] lg:max-xl:w-[620px] bg-gray-100  bg-cover bg-no-repeat">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/01/blog-2-1-1000x682.jpg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out h-[450px] md:w-[650px]" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-[473px] md:w-[650px] w-96  bg-gray-200 bg-fixed opacity-0 transition duration-300  group-hover:opacity-40 flex justify-center items-center text-5xl text-white ">

                    </div>
                    <div class="flex flex-col gap-5 px-10 py-7">
                        <h1 class="font-bold text-xl">Electric Power Station</h1>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</p>
                    </div>
                    <div class="border border-gray-300 w-full"></div>
                    <div class="flex flex-row py-5 px-5 md:max-lg:px-2 md:gap-4 lg:max-xl:gap-10 md:max-lg:gap-5">
                        <div class="flex flex-row gap-2">
                            <div class="text-gray-700">By</div>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="img1" class="h-8 w-8" />
                            <span class="text-orange-500 hover:text-gray-700">Admin</span>
                        </div>
                        <div class="flex flex-row gap-2  ml-20 lg:max-xl:ml-0 md:max-lg:ml-2">
                            <TodayIcon />
                            <p class="text-gray-700"> April 24, 2024</p>
                        </div>
                    </div>
                </div>
                <div className="group  relative overflow-hidden  md:w-[650px] h-full w-96 md:max-lg:w-[600px] lg:max-xl:w-[620px] bg-gray-100  bg-cover bg-no-repeat">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/01/blog-3-1-750x512.jpg" alt="img1" class="  group-hover:scale-110 transition duration-300 ease-in-out h-[450px] md:w-[650px]" />
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-[473px] md:w-[650px] w-96  bg-gray-200 bg-fixed opacity-0 transition duration-300  group-hover:opacity-40 flex justify-center items-center text-5xl text-white ">

                    </div>
                    <div class="flex flex-col gap-5 px-10 py-7">
                        <h1 class="font-bold text-xl">Changing Engine Gear</h1>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi...</p>
                    </div>
                    <div class="border border-gray-300 w-full"></div>
                    <div class="flex flex-row py-5 px-5 md:max-lg:px-2 md:gap-3 lg:max-xl:gap-10 md:max-lg:gap-5">
                        <div class="flex flex-row gap-2">
                            <div class="text-gray-700">By</div>
                            <img src="https://t3.ftcdn.net/jpg/03/62/56/24/360_F_362562495_Gau0POzcwR8JCfQuikVUTqzMFTo78vkF.jpg" alt="img1" class="h-8 w-8" />
                            <span class="text-orange-500 hover:text-gray-700">Admin</span>
                        </div>
                        <div class="flex flex-row gap-2  ml-20 lg:max-xl:ml-0 md:max-lg:ml-2">
                            <TodayIcon />
                            <p class="text-gray-700"> April 24, 2024</p>
                        </div>
                    </div>
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

export default Custompost