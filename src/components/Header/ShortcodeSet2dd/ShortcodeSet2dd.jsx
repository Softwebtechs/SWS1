import React from 'react'
import { NavLink } from "react-router-dom";

const ShortcodeSet2dd = () => {
    return (
        <>
            <div className=" w-56 -mt-8  bg-transparent    " />
            <div className="h-auto    w-64   shadow-xl bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/set2"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Content Shortcodes
                    </NavLink>
                    <NavLink
                        to="/custom"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Custom Posts
                    </NavLink>
                    <NavLink
                        to="/fancybox"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Fancy Boxes
                    </NavLink>
                    <NavLink
                        to="/icon"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Icon Boxes
                    </NavLink>
                    <NavLink
                        to="/imagecaption"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Image with Caption
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default ShortcodeSet2dd