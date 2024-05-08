import React from 'react'
import { NavLink } from "react-router-dom";

const ShortcodeSet4dd = () => {
    return (
        <>
            <div className=" w-56 -mt-8  bg-transparent    " />
            <div className="h-auto    w-64   shadow-xl bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/set4"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Team
                    </NavLink>
                    <NavLink
                        to="/testimonialcarousel"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Testimonial Carousel
                    </NavLink>
                    <NavLink
                        to="/testimonial"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Testimonial
                    </NavLink>
                    <NavLink
                        to="/timeline"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Timeline
                    </NavLink>
                    <NavLink
                        to="/typography"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Typography
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default ShortcodeSet4dd