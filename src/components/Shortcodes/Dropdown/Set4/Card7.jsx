import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

const Card7 = ({ image, name, position }) => {
    return (
        <>
            <div className=" group md:h-[550px] md:w-72 h-[600px] w-[380px] bg-gray-100 hover:shadow-xl shadow-xl relative">
                <div className="group-hover:rounded-b-full group-hover:border-8 group-hover:md:w-72 w-96 group-hover:md:h-32 h-40 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:opacity-20 "></div>

                <img src={image} alt="img2" className="md:w-40 md:h-40 h-40 w-40 rounded-full group-hover:border-8 group-hover:border-orange-500  mt-12 md:ml-14 ml-24 absolute inset-0 " />

                <div className="flex flex-col justify-center items-center md:mt-[150px] mt-[150px] group-hover:mt-[130px] ]gap-2 ">
                    <h1 class="text-xl font-bold font-poppins">{name}</h1>
                    <p class="text-l  font-poppins">{position}</p>
                    <div class="border-2 border-orange-500 w-12 mt-3 group-hover:border-blue-950 group-hover:w-16"></div>
                    <p class="text-gray-700   text-l py-5 px-10 text-center font-roboto">Ut enim admin ima quis nostrum exercitationem ullammas corporis suscipit laboriosam.</p>
                </div>
                <div class="invisible group-hover:visible flex flex-row bg-orange-500 h-10 md:w-72 w-96 md:mt-12 mt-24 md:gap-10 gap-14 md:px-8 px-12 cursor-pointer">
                    <div className="flex justify-center items-center ">
                        <TwitterIcon
                            style={{
                                color: "white",
                                marginBottom: " 3px",
                                marginRight: "4px",
                                width: "20px",
                                height: "20px"
                            }}
                            fontSize="small"
                        />
                    </div>
                    <div className=" flex justify-center items-center rounded ">
                        <svg class="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className=" flex justify-center items-center ">
                        <svg class=" w-5 h-5 text-white cursor-pointer " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 22a10 10 0 0 1-7.1-3A9.9 9.9 0 0 1 5 4.8C7 3 9.5 2 12.2 2h.2c2.4 0 4.8 1 6.6 2.6l-2.5 2.3a6.2 6.2 0 0 0-4.2-1.6c-1.8 0-3.5.7-4.8 2a6.6 6.6 0 0 0-.1 9.3c1.2 1.3 2.9 2 4.7 2h.1a6 6 0 0 0 4-1.1c1-.9 1.8-2 2.1-3.4v-.2h-6v-3.4h9.6l.1 1.9c-.1 5.7-4 9.6-9.7 9.6H12Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className=" flex justify-center items-center ">
                        <svg class="w-6 h-6 text-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd" />
                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                        </svg>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card7