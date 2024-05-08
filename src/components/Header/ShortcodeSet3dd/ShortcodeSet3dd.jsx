import React from 'react'
import { NavLink } from "react-router-dom";

const ShortcodeSet3dd = () => {
    return (
        <>
            <div className=" w-56 -mt-8  bg-transparent    " />
            <div className="h-auto    w-64   shadow-xl bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/set3"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Miscellaneous
                    </NavLink>
                    <NavLink
                        to="/numbercounter"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Number Counter
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Pricing Table
                    </NavLink>
                    <NavLink
                        to="/progress"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Progress Bars
                    </NavLink>
                    <NavLink
                        to="/tabs"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Tabs & Toggles
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default ShortcodeSet3dd