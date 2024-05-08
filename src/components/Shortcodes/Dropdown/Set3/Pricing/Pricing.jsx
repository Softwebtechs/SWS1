import React from 'react'
import { Link } from "react-router-dom";
import Pricingtype1 from './Pricingtype1';
import Pricingtype2 from './Pricingtype2';
import Pricingtype3 from './Pricingtype3';
import Pricingtype4 from './Pricingtype4';
import Pricingtype5 from './Pricingtype5';
import Pricingtype7 from './Pricingtype7';
import Pricingtype8 from './Pricingtype8';
import Pricingtype9 from './Pricingtype9';
import Pricingtype6 from './Pricingtype6';

const Pricing = () => {
    return (
        <> <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

            <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Pricing Table</h1>
            <div className='text-white md:flex-row flex-col'>
                <div className="flex flex-row gap-4 ">
                    <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                        <Link to="/">Home </Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                        <Link to="shortcodes">Shortcodes</Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 tracking-wider  ">
                        Pricing Table</span>
                </div>
            </div>
        </div>
            <Pricingtype1 />
            <Pricingtype2 />
            <Pricingtype3 />
            <Pricingtype4 />
            <Pricingtype5 />
            <Pricingtype6 />
            <Pricingtype7 />
            <Pricingtype8 />
            <Pricingtype9 />
        </>
    )
}

export default Pricing