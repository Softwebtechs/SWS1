import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import Carouseltype2 from './Carouseltype2';
import Carouseltype3 from './Carouseltype3';
import Carouseltype4 from './Carouseltype4';
import Carouseltype5 from './Carouseltype5';
import Carouseltype7 from './Carouseltype7';
import Carouseltype6 from './Carouseltype6';
import Carouseltype8 from './Carouseltype8';

const TestimonialCarousel = () => {
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
        <><div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

            <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-3xl tracking-wider">Testimonial Carousel</h1>
            <div className='text-white md:flex-row flex-col'>
                <div className="flex flex-row gap-4 ">
                    <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                        <Link to="/">Home </Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                        <Link to="shortcodes">Shortcodes</Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 tracking-wider  ">
                        Testimonial Carousel</span>
                </div>
            </div>
        </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >Carousel -<span className="text-blue-950">Type 1</span></h1>
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
                className="mt-10 md:w-[1200px] w-[400px] lg:max-xl:w-[900px] md:max-lg:w-[700px] md:h-96 h-full md:ml-32 ml-10 cursor-move  "
            >
                <Slider>
                    <Slide index={0} >

                        <div className="group flex flex-col justify-center items-center">
                            <div className=" w-[400px]  flex flex-col justify-center items-center mt-10 h-full ">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-1.jpg" alt="img1" class="rounded-full h-32 w-32 border-4 border-gray-300" />
                                <div class="bg-gray-400 group-hover:bg-black m-4 rounded-full h-12 w-12 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                                        <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="  text-center flex flex-col justify-center items-center gap-4 h-full sm:w-[600px] w-96">
                                <p class="font-bold font-poppins">Curabitur consequat felis ipsum, ac ultrices mauris varius vel. Proin vel felis ultrices, maximus dolor sit amet, vehicula neque. Vivamus sed arcu sit amet eros suscipit rutrum hendrerit in diam.</p>
                                < p class="font-bold font-poppins">Catherine-CEO</p>
                                <div className="   ">
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
                    </Slide>
                    <Slide index={1} >

                        <div className="group flex flex-col justify-center items-center">
                            <div className=" w-[400px]  flex flex-col justify-center items-center mt-10 h-full ">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-2.jpg" alt="img1" class="rounded-full h-32 w-32 border-4 border-gray-300" />
                                <div class="bg-gray-400 group-hover:bg-black m-4 rounded-full h-12 w-12 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                                        <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="  text-center flex flex-col justify-center items-center gap-4 h-full sm:w-[600px] w-96">
                                <p class="font-bold font-poppins">Curabitur consequat felis ipsum, ac ultrices mauris varius vel. Proin vel felis ultrices, maximus dolor sit amet, vehicula neque. Vivamus sed arcu sit amet eros suscipit rutrum hendrerit in diam.</p>
                                < p class="font-bold font-poppins">Catherine-CEO</p>
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
                    </Slide>
                    <Slide index={2} >

                        <div className="group flex flex-col justify-center items-center">
                            <div className=" w-[400px]  flex flex-col justify-center items-center mt-10 h-full ">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-3.jpg" alt="img1" class="rounded-full h-32 w-32 border-4 border-gray-300" />
                                <div class="bg-gray-400 group-hover:bg-black m-4 rounded-full h-12 w-12 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                                        <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="  text-center flex flex-col justify-center items-center gap-4 h-full sm:w-[600px] w-96">
                                <p class="font-bold font-poppins">Curabitur consequat felis ipsum, ac ultrices mauris varius vel. Proin vel felis ultrices, maximus dolor sit amet, vehicula neque. Vivamus sed arcu sit amet eros suscipit rutrum hendrerit in diam.</p>
                                < p class="font-bold font-poppins">Catherine-CEO</p>
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
                    </Slide>
                </Slider>
            </CarouselProvider>

            <Carouseltype2 />
            <Carouseltype3 />
            <Carouseltype4 />
            <Carouseltype5 />
            <Carouseltype6 />
            <Carouseltype7 />
            <Carouseltype8 />
        </>
    )
}

export default TestimonialCarousel