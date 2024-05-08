import React from 'react'
import { useState } from 'react';
import './carousel.css';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Content2nd = () => {
    const [index, setIndex] = useState(0);
    const length = 6;
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
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >PARTNERS <span className="text-blue-950">CAROUSEL</span></h1>
            </div>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={6}
                visibleSlides={3}
                infinite={true}
                isPlaying={true}
                step={1}
                mod={6}

                className="mt-10 w-[1200px] h-96 md:ml-32 ml-14 mb-14 cursor-move"
            >
                <Slider className="">
                    <div className=" relative ">
                        <Slide index={0}>

                            <div style={{ height: 400, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-8.jpg" alt="img-1" />
                            </div>

                        </Slide>
                        <Slide index={1}>
                            <div style={{ height: 500, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-7.jpg" alt="img-2" />
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div style={{ height: 500, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-6.jpg" alt="img-3" />
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div style={{ height: 500, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-5.jpg" alt="img-4" />
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div style={{ height: 500, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-8.jpg" alt="img-5" />
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div style={{ height: 500, margin: 10, background: "yellow" }}>
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/team-7.jpg" alt="img-6" />
                            </div>

                        </Slide>



                    </div>

                </Slider >
                <div className="flex justify-center items-center mt-10">
                    <div className="flex mt-[40px] justify-center items-center   absolute    cursor-pointer">
                        <ButtonBack onClick={handlePrevious}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-700 hover:text-orange-500 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </ButtonBack>
                        <ButtonNext onClick={handleNext}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8  text-gray-700 hover:text-orange-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </ButtonNext>
                    </div>
                </div>

            </CarouselProvider >



        </>
    )
}

export default Content2nd