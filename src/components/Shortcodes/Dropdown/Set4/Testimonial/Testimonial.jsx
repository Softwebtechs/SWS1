import React from 'react'
import { Link } from "react-router-dom";
import Testimonialtype2 from './Testimonialtype2';
import Testimonialtype3 from './Testimonialtype3';
import Testimonialtype4 from './Testimonialtype4';
import Testimomialtype5 from './Testimomialtype5';
import Testimonialtype6 from './Testimonialtype6';
import Testimonialtype7 from './Testimonialtype7';
import Testimonialtype8 from './Testimonialtype8';

const Testimonial = () => {
    return (
        <> <div style={{ backgroundColor: '#273272' }} className=" font-poppins  md:h-36 h-56   md:flex-row  md:justify-between md:px-48 px-7 items-center flex flex-col gap-6 justify-center">

            <h1 className="text-white font-semibold font-roboto md:ml-2 md:text-5xl text-5xl tracking-wider">Testimonial</h1>
            <div className='text-white md:flex-row flex-col'>
                <div className="flex flex-row gap-4 ">
                    <span class=" text-s text-gray-500 hover:text-white  tracking-wider">
                        <Link to="/">Home </Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 hover:text-white tracking-wider  ">
                        <Link to="shortcodes">Shortcodes</Link></span>
                    <p class="text-gray-500">|</p>
                    <span class=" text-s text-gray-500 tracking-wider  ">
                        Testimonial</span>
                </div>
            </div>
        </div>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-600 flex justify-center gap-4 ">
                    TESTIMONIAL <span className="text-blue-950">TYPE 1</span>
                </h1>
            </div>

            <div className="group flex flex-col justify-center items-center">
                <div className=" w-[400px]  flex flex-col justify-center items-center mt-10 h-full ">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-1.jpg" alt="img1" class="rounded-full h-32 w-32 border-4 border-gray-300" />
                    <div class="bg-gray-400 group-hover:bg-black m-4 rounded-full h-12 w-12 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
                            <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="  text-center flex flex-col justify-center items-center gap-4 h-full sm:w-[600px] w-96">
                    <p class="font-bold font-poppins">Curabitur consequat felis ipsum, ac ultrices mauris varius vel. Proin vel felis ultrices, maximus dolor sit amet, vehicula neque. Vivamus sed arcu sit amet eros suscipit rutrum hendrerit in diam.</p>
                    < p class="font-bold font-poppins">Catherine-CEO</p>

                </div>
            </div>

            <Testimonialtype2 />
            <Testimonialtype3 />
            <Testimonialtype4 />
            <Testimomialtype5 />
            <Testimonialtype6 />
            <Testimonialtype7 />
            <Testimonialtype8 />

            <div className="m-8 md:max-lg:w-[700px] bg-white md:p-24 p-5  h-auto gap-4 ">
                <h2 className=" text-xl font-semibold font-poppins text-black ">
                    Leave a Comment </h2>
                <p className="text-gray-700 font-roboto py-3">Your email address will not be published.</p>
                <p className="text-gray-700 font-roboto mb-4">Required fields are marked <span class="text-red-500">*</span></p>

                <form>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Comment<span class="text-red-500">*</span>
                        </label>
                        <textarea
                            id="comment"
                            name="comment"

                            className="w-full px-5 py-2 border outline-none "
                            rows="5"

                        ></textarea>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Name<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Email<span class="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 font-bold mb-2 font-roboto">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"

                            className="w-full px-5 py-2 border outline-none "

                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-blue-900 transition duration-1000 text-white font-normal py-4 px-11 focus:outline-none focus:shadow-outline"
                    >
                        Post Comment
                    </button>
                </form>
            </div>


        </>
    )
}

export default Testimonial