import React from 'react'
import { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel6 = ({ image, name }) => {
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
            <div class=" md:flex md:flex-row flex flex-col border  md:h-80 mt-10">
                <div class="md:invisible visible flex flex-row  md:w-0 w-[600px] gap-5 px-5 items-center bg-gray-200">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-11.jpg" alt="" class="rounded-full h-24 w-24" />
                    <div class="flex flex-col gap-3">
                        <p class="font-bold font-xl ">Kenu Reeves</p>
                        <p class="text-gray-500">-Web Designer</p>
                    </div>
                </div>
                <div class="flex flex-row gap-10 justify-center items-center h-full w-full px-20 py-10 bg-gray-50">
                    <p class="text-gray-500 text-9xl">"</p>
                    <p class="text-gray-700 text-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                </div>
                <div class="md:visible invisible flex flex-row  w-[900px] gap-5 px-5 items-center bg-gray-200">
                    <img src={image} alt="" class="rounded-full h-24 w-24" />
                    <div class="flex flex-col gap-3">
                        <p class="font-bold font-xl ">Kenu Reeves</p>
                        <p class="text-gray-500">-Web Designer</p>
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
            </div>





        </>
    )
}

const Carouseltype6 = () => {


    return (
        <> <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

            <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >Carousel -<span className="text-blue-950">Type 6</span></h1>
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
                className="   w-full md:h-80 h-[400px] md:max-lg:h-[300px] cursor-move  "
            >
                <Slider>
                    <Slide index={0}>
                        <Carousel6
                            image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-23.jpg"}
                            name={"Jhones Thomas"}
                        />
                    </Slide>
                    <Slide index={1}>
                        <Carousel6
                            image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-5.jpg"}
                            name={"Jhones Thomas"}
                        />
                    </Slide>
                    <Slide index={2}>
                        <Carousel6
                            image={"https://patrai.wpengine.com/wp-content/uploads/2019/04/test-6.jpg"}
                            name={"Jhones Thomas"}
                        />
                    </Slide>

                </Slider>

            </CarouselProvider>






        </>
    )
}

export default Carouseltype6