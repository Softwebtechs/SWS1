import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import './carousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Content5th = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-18.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-19.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-20.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-22.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-1.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-2.jpg",
        "https://patrai.wpengine.com/wp-content/uploads/2019/04/test-3.jpg",

        // Add more image URLs as needed
    ];
    const length = images.length;

    const handlePrevious = () => {
        const newIndex = (index - 1 + length) % length;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (index + 1) % length;
        setIndex(newIndex);
    };

    const handleDotClick = (index) => {
        setIndex(index);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >
                    SPECIAL <span className="text-blue-950">TESTIMONIAL CAROUSEL</span>
                </h1>
            </div>
            <div className="flex justify-center items-center md:px-56 px-5 mt-10">
                <p className="text-l text-xl text-center text-gray-300">
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra
                </p>
            </div>
            <div className="flex justify-center items-center">
                <div className=" w-[400px] flex flex-col justify-center items-center mt-10 h-72 ">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={120}
                        totalSlides={length}
                        isIntrinsicHeight={false}
                        isIntrinsicWidth={false}
                        infinite={true}
                        isPlaying={true}
                        lockOnWindowScroll={true}
                        dragEnabled={true}
                        touchEnabled={false}
                        visibleSlides={1}
                        step={1}
                    >
                        <div className="rounded-full  h-40 w-40">
                            <Slider>
                                <div className="relative">
                                    {images.map((image, i) => (
                                        <Slide key={i} index={i}>
                                            <img
                                                src={image}
                                                alt={`img${i + 1}`}
                                                className="md:h-40 h-40 md:w-40 w-40 md:max-lg:h-40 md:max-lg:w-40 lg:max-xl:w-40 rounded-full shadow-xl"
                                            />
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <div className="flex flex-col mt-3 gap-4">
                            <p className="text-orange-600 text-xl font-bold px-7">Jhone Doe</p>
                            <p className="text-l text-gray-700 px-10">Manager</p>
                        </div>
                        <div className="flex gap-2 absolute  mt-5">
                            {[...Array(length)].map((_, i) => (
                                <Dot
                                    key={i}
                                    slide={i}
                                    onClick={() => handleDotClick(i)}
                                    className={index === i ? 'dot-active' : ''}
                                />
                            ))}
                        </div>
                        <div className="flex flex-row justify-center items-center mt-5 px-10 md:max-lg:px-14 gap-2 absolute">
                            <ButtonBack onClick={handlePrevious}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400 hover:text-orange-600">
                                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                                </svg>
                            </ButtonBack>
                            <p className="text-xl font-bold">|</p>
                            <ButtonNext onClick={handleNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400 hover:text-orange-600">
                                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </>
    );
};

export default Content5th;
