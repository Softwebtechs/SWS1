import React from 'react'
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel3 = ({ image, name }) => {
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

            <div class="group flex flex-col  px-5 py-5 gap-8">
                <img src={image} alt="" class="rounded-full h-24 w-24 group-hover:border-4 group-hover:border-orange-500 "></img>
                <div class="flex flex-row">
                    <p class="font-semibold text-xl">Angelina</p>
                    <p class="">- Director of Ramsey& Co</p>
                </div>
                <p class="text-gray-700 text-l font-roboto mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <div className="    ">
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

const Carouseltype3 = () => {


    return (
        <> <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

            <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >Carousel -<span className="text-blue-950">Type 3</span></h1>
        </div>


            <div class="md:flex md:flex-row flex flex-col md:px-44 px-14 md:max-lg:px-10 gap-10 mt-7">
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
                    className="  md:w-1/2 w-full h-96 cursor-move  "
                >
                    <Slider>
                        <Slide index={0}>
                            <Carousel3
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-12.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={1}>
                            <Carousel3
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-5.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={2}>
                            <Carousel3
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
                    className="  md:w-1/2 w-full h-96 cursor-move  "
                >
                    <Slider>
                        <Slide index={0}>
                            <Carousel3
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-7.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={1}>
                            <Carousel3
                                image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-8.jpg"}
                                name={"Jhones Thomas"}
                            />
                        </Slide>
                        <Slide index={2}>
                            <Carousel3
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

export default Carouseltype3