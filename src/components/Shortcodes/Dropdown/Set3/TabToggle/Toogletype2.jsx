import React, { useState } from 'react';

const Toogletype2 = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleParagraph = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleParagraph1 = () => {
        setIsOpen1(!isOpen1);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const toggleParagraph2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(true);

    const toggleParagraph3 = () => {
        setIsOpen3(!isOpen3);
    };
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleParagraph4 = () => {
        setIsOpen4(!isOpen4);
    };
    const [isOpen5, setIsOpen5] = useState(false);

    const toggleParagraph5 = () => {
        setIsOpen5(!isOpen5);
    };


    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    STANDARD   <span className="text-blue-950">TOGGLE STYLE II</span>
                </h1>
            </div>

            <div className="md:flex md:flex-row flex flex-col md:px-32 px-7 md:max-xl:px-10 gap-5 mt-5">
                <div className="flex flex-col md:w-1/2 w-full  h-full gap-4 justify-center">
                    <div className="flex flex-col gap-2">

                        <div className="flex flex-row gap-2">
                            <p className="text-xl font-semibold text-blue-950 w-full">Accordion 1</p>
                            <div class="w-full flex justify-end items-end">
                                <button className="" onClick={toggleParagraph}>
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-950">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                        {isOpen && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>
                    <div className="flex flex-col gap-2">

                        <div className="flex flex-row gap-2">
                            <p className="text-xl font-semibold text-blue-950 w-full">Accordion 2</p>
                            <div class="w-full flex justify-end items-end">
                                <button className="" onClick={toggleParagraph1}>
                                    {isOpen1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-950">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                        {isOpen1 && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>
                    <div className="flex flex-col gap-2">

                        <div className="flex flex-row gap-2">
                            <p className="text-xl font-semibold text-blue-950 w-full">Accordion 3</p>
                            <div class="w-full flex justify-end items-end">
                                <button className="" onClick={toggleParagraph2}>
                                    {isOpen2 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-950">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                        {isOpen2 && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>


                </div>

                <div className="flex flex-col md:w-1/2 w-full  h-full gap-4 ">
                    <div className="flex flex-col  gap-2">
                        <div className="flex flex-row gap-2 ">

                            <button className={``} onClick={toggleParagraph3}>
                                {isOpen3 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-950">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                )}
                            </button>
                            <div class="flex justify-end items-end w-full">
                                <p className="text-xl font-semibold text-blue-950">Accordion 1</p>
                            </div>

                        </div>
                        {isOpen3 && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div className="flex flex-row gap-2 ">

                            <button className={``} onClick={toggleParagraph4}>
                                {isOpen4 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-950">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                )}
                            </button>
                            <div class="flex justify-end items-end w-full">
                                <p className="text-xl font-semibold text-blue-950">Accordion 1</p>
                            </div>

                        </div>
                        {isOpen4 && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>
                    <div className="flex flex-col  gap-2">
                        <div className="flex flex-row gap-2 ">

                            <button className={``} onClick={toggleParagraph5}>
                                {isOpen5 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-500  ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-blue-950">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                )}
                            </button>
                            <div class="flex justify-end items-end w-full">
                                <p className="text-xl font-semibold text-blue-950">Accordion 1</p>
                            </div>

                        </div>
                        {isOpen5 && <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>}
                    </div>


                </div>
            </div>
        </>
    )
}

export default Toogletype2;

