import React, { useState } from 'react';

const Toggletype4 = () => {

    const [isOpen1, setIsOpen1] = useState(true);


    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
    };
    const [isOpen2, setIsOpen2] = useState(false);


    const toggleAccordion2 = () => {
        setIsOpen2(!isOpen2);
    };
    const [isOpen3, setIsOpen3] = useState(false);


    const toggleAccordion3 = () => {
        setIsOpen3(!isOpen3);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    FRAMED   <span className="text-blue-950">ACCORDION TYPE 3</span>
                </h1>
            </div>

            <div className="flex flex-col mt-10 md:px-32 px-10">
                <div className="flex flex-col">
                    <button className="border border-gray-300 h-full w-full py-4 px-4 flex justify-start" onClick={toggleAccordion1}>
                        <p className={`text-blue-950 font-semibold text-xl ${isOpen1 ? 'text-black' : ''}`}  >Accordion 1</p>
                    </button>

                    {isOpen1 && (
                        <div className="border border-gray-300 border-l-2 border-l-orange-500 h-full w-full py-5 px-3">
                            <p className="text-gray-500 text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <button className="border border-gray-300 h-full w-full py-4 px-4 flex justify-start" onClick={toggleAccordion2}>
                        <p className={`text-blue-950 font-semibold text-xl ${isOpen2 ? 'text-black' : ''}`}>Accordion 2</p>
                    </button>

                    {isOpen2 && (
                        <div className="border border-gray-300 border-l-2 border-l-orange-500 h-full w-full py-5 px-3">
                            <p className="text-gray-500 text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <button className="border border-gray-300 h-full w-full py-4 px-4 flex justify-start" onClick={toggleAccordion3}>
                        <p className={`text-blue-950 font-semibold text-xl ${isOpen1 ? 'text-black' : ''}`}>Accordion 3</p>
                    </button>

                    {isOpen3 && (
                        <div className="border border-gray-300 border-l-2 border-l-orange-500 h-full w-full py-5 px-3">
                            <p className="text-gray-500 text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Toggletype4;
