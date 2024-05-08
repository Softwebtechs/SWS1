import React from 'react'
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import './carousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Content4th = () => {
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

    const [index1, setIndex1] = useState(0);
    const length1 = 3;
    const handlePrevious1 = () => {
        const newIndex1 = (index1 - 1 + length1) % length1;
        setIndex1(newIndex1);
    };

    const handleNext1 = () => {
        const newIndex1 = (index1 + 1) % length1;
        setIndex1(newIndex1);
    };
    const currentSlideNumber = index + 1;
    const currentSlideNumber1 = index1 + 1;
    return (
        <>
            <div className=" md:flex md:flex-row flex flex-col gap-7 md:m-32 m-10 md:max-lg:m-7 lg:max-xl:m-16">

                <div className=" flex flex-col justify-center items-center gap-8 md:h-[550px] h-[500px] md:w-[600px] w-[450px] md:max-lg:h-[500px] md:max-lg:w-[450px] lg:max-xl:w-[500px]">
                    <div classname="w-full h-14">
                        <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >IMAGE <span className="text-blue-950">CAROUSEL</span></h1>
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
                    >
                        <div className="border border-orange-500 md:h-[350px] h-[300px] md:max-lg:h-[300px] md:max-lg:w-[400px] md:w-[600px] w-[450px] lg:max-xl:w-[500px]">

                            <Slider>
                                <div className=" relative ">
                                    <Slide index={0}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-1.jpg" alt="img1" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                    <Slide index={1}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-2.jpg" alt="img2" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                    <Slide index={2}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-3.jpg" alt="img3" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <div class="flex flex-row justify-center items-center md:px-44 px-32 md:max-lg:px-32 gap-3 absolute">
                            <ButtonBack onClick={handlePrevious}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-700 hover:text-orange-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            </ButtonBack>
                            <p className="text-5xl text-gray-600 font-bold">{currentSlideNumber}/{length}</p>

                            <ButtonNext onClick={handleNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10  text-gray-700 hover:text-orange-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
                <div className=" flex flex-col justify-center items-center gap-8 md:h-[550px] h-[500px] md:w-[600px] w-[450px] md:max-lg:h-[500px] md:max-lg:w-[450px] lg:max-xl:w-[500px]">
                    <div classname="w-full h-14">
                        <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >IMAGE <span className="text-blue-950">CAROUSEL</span></h1>
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
                    >
                        <div className="border border-orange-500 md:h-[350px] h-[300px] md:max-lg:h-[300px] md:max-lg:w-[400px] md:w-[600px] w-[450px] lg:max-xl:w-[500px]">

                            <Slider>
                                <div className=" relative ">
                                    <Slide index1={0}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-4.jpg" alt="img1" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                    <Slide index1={1}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-5.jpg" alt="img2" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                    <Slide index1={2}>
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-carousel-6.jpg" alt="img3" className="m-4 md:h-[310px] h-[270px] md:w-[570px] w-[410px] md:max-lg:h-[270px] md:max-lg:w-[370px] lg:max-xl:w-[470px]" />
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <div class="flex flex-row justify-center items-center md:px-44 px-32 md:max-lg:px-32 gap-3 absolute">
                            <ButtonBack onClick={handlePrevious1}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-gray-700 hover:text-orange-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            </ButtonBack>
                            <p className="text-5xl text-gray-600 font-bold">{currentSlideNumber1}/{length1}</p>

                            <ButtonNext onClick={handleNext1}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10  text-gray-700 hover:text-orange-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>



            </div >
        </>
    )
}

export default Content4th