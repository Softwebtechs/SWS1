
import { NavLink } from "react-router-dom";
import ShortcodeSet1dd from "./ShortcodeSet1dd.jsx/ShortcodeSet1dd";
import { useState } from "react";
import ShortcodeSet2dd from "./ShortcodeSet2dd/ShortcodeSet2dd";
import ShortcodeSet3dd from "./ShortcodeSet3dd/ShortcodeSet3dd";
import ShortcodeSet4dd from "./ShortcodeSet4dd/ShortcodeSet4dd";


const ShortcodesDropdown = () => {
    const [isOpenSet1, setIsOpenSet1] = useState(false);

    const handleMouseEnterSet1 = () => {
        setIsOpenSet1(true);
    };

    const handleMouseLeaveSet1 = () => {
        setIsOpenSet1(false);
    };

    const [isOpenSet2, setIsOpenSet2] = useState(false);

    const handleMouseEnterSet2 = () => {
        setIsOpenSet2(true);
    };

    const handleMouseLeaveSet2 = () => {
        setIsOpenSet2(false);
    };
    const [isOpenSet3, setIsOpenSet3] = useState(false);

    const handleMouseEnterSet3 = () => {
        setIsOpenSet3(true);
    };

    const handleMouseLeaveSet3 = () => {
        setIsOpenSet3(false);
    };
    const [isOpenSet4, setIsOpenSet4] = useState(false);

    const handleMouseEnterSet4 = () => {
        setIsOpenSet4(true);
    };

    const handleMouseLeaveSet4 = () => {
        setIsOpenSet4(false);
    };
    return (
        <>
            <div className=" w-56 h-12  bg-transparent    " />
            <div className="h-auto    w-56    shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/set1"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                        onMouseEnter={handleMouseEnterSet1}
                        onMouseLeave={handleMouseLeaveSet1}
                    >
                        SET-1
                        <div className="relative ">
                            {isOpenSet1 && (
                                <div
                                    className="absolute z-10  right-[208px] "
                                    onMouseEnter={handleMouseEnterSet1}
                                    onMouseLeave={handleMouseLeaveSet1}
                                >
                                    <ShortcodeSet1dd />
                                </div>



                            )}
                        </div>
                    </NavLink>
                    <NavLink
                        to="/set2"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                        onMouseEnter={handleMouseEnterSet2}
                        onMouseLeave={handleMouseLeaveSet2}
                    >
                        SET-2
                        <div className="relative ">
                            {isOpenSet2 && (
                                <div
                                    className="absolute z-10  right-[208px] "
                                    onMouseEnter={handleMouseEnterSet2}
                                    onMouseLeave={handleMouseLeaveSet2}
                                >
                                    <ShortcodeSet2dd />
                                </div>



                            )}
                        </div>
                    </NavLink>
                    <NavLink
                        to="/set3"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                        onMouseEnter={handleMouseEnterSet3}
                        onMouseLeave={handleMouseLeaveSet3}
                    >
                        SET-3
                        <div className="relative ">
                            {isOpenSet3 && (
                                <div
                                    className="absolute z-10  right-[208px] "
                                    onMouseEnter={handleMouseEnterSet3}
                                    onMouseLeave={handleMouseLeaveSet3}
                                >
                                    <ShortcodeSet3dd />
                                </div>



                            )}
                        </div>
                    </NavLink>
                    <NavLink
                        to="/set4"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                        onMouseEnter={handleMouseEnterSet4}
                        onMouseLeave={handleMouseLeaveSet4}
                    >
                        SET-4
                        <div className="relative ">
                            {isOpenSet4 && (
                                <div
                                    className="absolute z-10  right-[208px] "
                                    onMouseEnter={handleMouseEnterSet4}
                                    onMouseLeave={handleMouseLeaveSet4}
                                >
                                    <ShortcodeSet4dd />
                                </div>



                            )}
                        </div>
                    </NavLink>

                </div>
            </div>
        </>

    )
};

export default ShortcodesDropdown;