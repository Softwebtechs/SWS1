import { Link, NavLink } from "react-router-dom";

const Part2 = () => {
    return (
        <>
            <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between px-48 items-center flex flex-col gap-6 justify-center">

                <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Services</h1>
                <div className='text-white md:flex-row flex-col'>
                    <div className="flex flex-row gap-4 ">
                        <span class=" text-s text-gray-500   tracking-wider">
                            <Link to="/">Home </Link></span>
                        <p class="text-gray-500">|</p>
                        <span class=" text-s text-gray-500 tracking-wider  ">
                            <Link to="services">Services</Link></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap  gap-5 justify-center items-center  mt-20 mb-5'>
                <div className=" group h-80 w-96   md:max-lg:h-80 md:max-lg:w-80  bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 p-5 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Electronic Materials</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Electronic Materials</h1>
                    </div>
                </div>

                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Building Management</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Building Management</h1>
                    </div>
                </div>


                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Power Systems</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Power Systems</h1>
                    </div>
                </div>

            </div>
            <div className='flex flex-wrap gap-5 justify-center items-center mb-5'>
                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Industry Tools</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Industry Tools</h1>
                    </div>
                </div>


                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Heavy Machinery</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Heavy Machinery</h1>
                    </div>
                </div>


                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Oil and Mineral Oil</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Oil and Mineral Oil</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-5 justify-center items-center mb-5'>
                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Auto Parts</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Auto Parts</h1>
                    </div>
                </div>


                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Medic Equipments</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Medic Equipments</h1>
                    </div>
                </div>


                <div className=" group h-80 w-96 md:max-lg:h-80 md:max-lg:w-80 bg-gray-300 hover:bg-orange-600 hover:opacity-60 flex flex-col items-end ">
                    <div className=" h-80 w-96 p-5 md:max-lg:h-80 md:max-lg:w-80 bg-orange-600 text-white  transition duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-5 ">
                        <h1 className="text-xl font-semibold font-poppins">Construction Tools</h1>
                        <p class=" text-center text-white font-roboto ">
                            In enim justo,rhonocus ut,imperdiet a,<br />venenatis vitae,justo.Nullam dictum felis,eu<br /> pede mollis,pretium.Integer tincidunt.
                        </p>
                        <a href="#" class="font-poppins">View Project &gt;</a>
                    </div>
                    <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center h-16 w-full   text-white  transition-opacity duration-500 group-hover:opacity-0">
                        <h1 className=" font-poppins text-xl tracking-wider">Construction Tools</h1>
                    </div>
                </div>
            </div >

        </>



    )
}

export default Part2;