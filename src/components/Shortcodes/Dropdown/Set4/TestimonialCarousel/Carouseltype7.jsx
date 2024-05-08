import React from 'react'
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel7 = ({ image, name }) => {
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

            <div class="group flex flex-col gap-5  py-10 ">
                <div class="flex justify-center items-center ">
                    <img src={image} alt="img" class="rounded-full w-44 h-44 group-hover:border group-hover:border-orange-600 group-hover:px-2 group-hover:py-2" />
                </div>
                <p class="text-gray-500 text-center ">Y.O.L.O dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                <div class="border border-orange-600 group-hover:border-2"></div>
                <div class="flex flex-row justify-center items-center gap-3">
                    <h1 class="font-bold text-3xl text-gray-500">KAREN LANE ,</h1>
                    <h2 class="text-l text-gray-500">Home Maker</h2>
                </div>

                <div className=" flex  mt-4   ">
                    <ButtonBack onClick={handlePrevious}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-300 hover:text-orange-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </ButtonBack>
                    <ButtonNext onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-gray-300 hover:text-orange-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </ButtonNext>


                </div>
            </div>





        </>
    )
}

const Carouseltype7 = () => {


    return (
        <> <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

            <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >Carousel -<span className="text-blue-950">Type 7</span></h1>
        </div>


            <div class="md:flex md:flex-row flex flex-col md:px-44 px-14 md:max-lg:px-10 gap-7 mt-7">
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
                    className="   md:w-[600px] w-96 h-[500px]  cursor-move  "
                >
                    <Slider>
                        <Slide index={0}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-23.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={1}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-5.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={2}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-6.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>

                    </Slider>

                </CarouselProvider>
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
                    className="   md:w-[600px] w-96 h-[500px]  cursor-move  "
                >
                    <Slider>
                        <Slide index={0}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-26.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={1}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-8.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={2}>
                            <Carousel7
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-11.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>

                    </Slider>

                </CarouselProvider>

            </div >



        </>
    )
}

export default Carouseltype7