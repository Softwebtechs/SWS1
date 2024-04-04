
import { NavLink } from "react-router-dom";

const ServiceDropdown = () => {
    return (
        <>
            <div className=" w-56 h-12  bg-transparent absolute   " />
            <div className="absolute    w-56 z-10   shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-700 ">
                <div className="py-1 flex flex-col gap-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <NavLink
                        to="/electronic"
                        className="w-full border-b-2 border-gray-200  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Electronic Materials
                    </NavLink>
                    <NavLink
                        to="/bm"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Building Management
                    </NavLink>
                    <NavLink
                        to="/ps"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Power Systems
                    </NavLink>
                    <NavLink
                        to="/it"
                        className=" w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Industry Tools
                    </NavLink>
                    <NavLink
                        to="/hm"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Heavy Machinery
                    </NavLink>
                    <NavLink
                        to="/oil"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Oil and Mineral oil
                    </NavLink>
                    <NavLink
                        to="/ap"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Auto Parts
                    </NavLink>
                    <NavLink
                        to="/me"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Medic Equipments
                    </NavLink>
                    <NavLink
                        to="/ct"
                        className="w-full border-b-2 border-gray-200 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        role="menuitem"
                    >
                        Construction Tools
                    </NavLink>
                </div>
            </div>
        </>

    )
};

export default ServiceDropdown;