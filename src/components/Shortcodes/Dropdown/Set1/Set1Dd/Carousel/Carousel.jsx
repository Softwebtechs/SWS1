import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import './carousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Content2nd from './Content2nd';
import Content3 from './Content3';
import Content4th from './Content4th';
import Content5th from './Content5th';
const Carousel = () => {

    const [index, setIndex] = useState(0);
    const length = 3;
    const handlePrevious = () => {
        const newIndex = (index - 1 + length) % length;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (index + 1) % length;
        setIndex(newIndex);
    };

    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Carousel</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                            <Link to="shortcodes">Shortcodes</Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            Carousel</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >Testimonal <span className="text-blue-950">Carousel</span></h1>
            </div>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={120}

                totalSlides={3}
                isIntrinsicHeight={false}
                isIntrinsicWidth={false}
                infinite={true}
                isPlaying={true}
                lockOnWindowScroll={true}
                dragEnabled={true}
                touchEnabled={false}
                visibleSlides={1}
                step={1}
                mod={3}
                className="mt-10 md:w-[1200px] w-[400px] lg:max-xl:w-[900px] md:max-lg:w-[700px] md:h-64 h-full md:ml-32 ml-10 cursor-move  "
            >
                <Slider>
                    <Slide index={0} >
                        <div className=" ">
                            <div className="flex flex-col ">
                                <div className=" flex flex-row md:w-1200px md:h-32 h-64  px-10 py-7 bg-gray-100 gap-4">
                                    <div className="text-6xl  text-gray-400">"</div>
                                    <div className="text-gray-700 text-xl">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci.</p>
                                    </div>

                                </div>
                                <div className="md:flex md:flex-row flex flex-col md:gap-[700px] lg:max-xl:gap-[400px] md:max-lg:gap-[200px] md:px-10  py-7 ">
                                    <div className=" flex justify-center items-center flex-row h-32 w-96 lg:max-xl:w-[400px] md:max-lg:w-[500px] gap-7 ">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-1.jpg" alt="img1" className="rounded-full h-20 w-20 " />
                                        <div className="flex justify-center  items-center">
                                            <h1 className="text-l">Michael J Stomas</h1>
                                            <p className="text-s ml-3 text-gray-700 "> - Business women</p>
                                        </div>
                                    </div>
                                    <div className="  flex justify-center items-center cursor-pointer ">
                                        <ButtonBack onClick={handlePrevious}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                            </svg>
                                        </ButtonBack>
                                        <ButtonNext onClick={handleNext}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </ButtonNext>


                                    </div>

                                </div>

                            </div>

                        </div>
                    </Slide>
                    <Slide index={1} >
                        <div className=" ">
                            <div className="flex flex-col ">
                                <div className=" flex flex-row w-1200px md:h-32 h-64 px-10 py-7 bg-gray-100 gap-4">
                                    <div className="text-6xl  text-gray-400">"</div>
                                    <div className="text-gray-700 text-xl">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci.</p>
                                    </div>

                                </div>
                                <div className="md:flex md:flex-row flex flex-col md:gap-[700px] lg:max-xl:gap-[400px] md:max-lg:gap-[200px] md:px-10 py-7 ">
                                    <div className=" flex justify-center items-center flex-row h-32 w-96 gap-7 lg:max-xl:w-[400px] md:max-lg:w-[500px] ">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-2.jpg" alt="img1" className="rounded-full h-20 w-20 " />
                                        <div className="flex justify-center  items-center">
                                            <h1 className="text-l">Michael J Stomas</h1>
                                            <p className="text-s ml-3 text-gray-700 "> - Business women</p>
                                        </div>
                                    </div>
                                    <div className="  flex justify-center items-center cursor-pointer ">
                                        <ButtonBack onClick={handlePrevious}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                            </svg>
                                        </ButtonBack>
                                        <ButtonNext onClick={handleNext}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </ButtonNext>


                                    </div>

                                </div>

                            </div>

                        </div>
                    </Slide>
                    <Slide index={2} >
                        <div className="  ">
                            <div className="flex flex-col ">
                                <div className=" flex flex-row w-1200px md:h-32 h-64 px-10 py-7 bg-gray-100 gap-4">
                                    <div className="text-6xl  text-gray-400">"</div>
                                    <div className="text-gray-700 text-xl">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id augue vitae odio accumsan condimentum id in urna. Integer sit amet felis sit amet magna dignissim pharetra ut eget orci.</p>
                                    </div>

                                </div>
                                <div className="md:flex md:flex-row flex flex-col md:gap-[700px] lg:max-xl:gap-[400px] md:max-lg:gap-[200px] md:px-10 py-7 ">
                                    <div className=" flex justify-center items-center flex-row h-32 w-96 gap-7 lg:max-xl:w-[400px] md:max-lg:w-[500px] ">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-3.jpg" alt="img1" className="rounded-full h-20 w-20 " />
                                        <div className="flex justify-center  items-center">
                                            <h1 className="text-l">Michael J Stomas</h1>
                                            <p className="text-s ml-3 text-gray-700 "> - Business women</p>
                                        </div>
                                    </div>
                                    <div className="  flex justify-center items-center cursor-pointer ">
                                        <ButtonBack onClick={handlePrevious}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                            </svg>
                                        </ButtonBack>
                                        <ButtonNext onClick={handleNext}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-gray-700 hover:text-orange-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </ButtonNext>


                                    </div>

                                </div>

                            </div>

                        </div>
                    </Slide>
                </Slider>
            </CarouselProvider>



            <Content2nd />
            <Content3 />
            <Content4th />
            <Content5th />

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

export default Carousel