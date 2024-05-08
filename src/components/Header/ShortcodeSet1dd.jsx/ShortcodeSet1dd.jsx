
import { NavLink } from "react-router-dom";


const ShortcodeSet1dd = () => {
    return (
        <>
            <div className=" w-56 -mt-8  bg-transparent    " />
            <div className="h-auto    w-64   shadow-xl bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/set1"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Blockquotes
                    </NavLink>
                    <NavLink
                        to="/button"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Button & Lists
                    </NavLink>
                    <NavLink
                        to="/carousel"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Carousel
                    </NavLink>
                    <NavLink
                        to="/columns"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Columns
                    </NavLink>
                    <NavLink
                        to="/contactinfo"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Contact Info
                    </NavLink>

                </div>
            </div>
        </>

    )
};

export default ShortcodeSet1dd;