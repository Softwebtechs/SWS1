import React from 'react'

const Timelinetype1 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >VERTICAL TIMELINE -<span className="text-blue-950">Type 2</span></h1>
            </div>

            <div class="flex flex-row justify-center items-center gap-7 mt-10">
                <div class="flex flex-col gap-20 ">
                    <div class="flex flex-col gap-1 justify-end items-end ">
                        <h1 class="text-2xl text-orange-500 font-bold">00:00</h1>
                        <h2 class="font-bold text-2xl">The Cocktail Hour</h2>
                    </div>
                    <div class="flex flex-col gap-1 justify-end items-end ">
                        <h1 class="text-2xl text-orange-500 font-bold">01:20</h1>
                        <h2 class="font-bold text-2xl">Cheers & Toasts</h2>
                    </div>
                    <div class="flex flex-col gap-1 justify-end items-end ">
                        <h1 class="text-2xl text-orange-500 font-bold">02:45</h1>
                        <h2 class="font-bold text-2xl">Party Time</h2>
                    </div>
                    <div class="flex flex-col gap-1 justify-end items-end ">
                        <h1 class="text-2xl text-orange-500 font-bold">04:15</h1>
                        <h2 class="font-bold text-2xl">Shake a Leg</h2>
                    </div>
                    <div class="flex flex-col gap-1 justify-end items-end ">
                        <h1 class="text-2xl text-orange-500 font-bold">05:00</h1>
                        <h2 class="font-bold text-2xl">Final Farewell</h2>
                    </div>
                </div>
                <div class="border-2 border-gray-200 h-[800px]"></div>
                <div class="flex flex-col gap-20 ">
                    <div class="flex flex-col gap-1  ">
                        <h1 class="text-2xl text-orange-500 font-bold">01:00</h1>
                        <h2 class="font-bold text-2xl">Newlyweds Arrival/First Dance</h2>
                    </div>
                    <div class="flex flex-col gap-1  ">
                        <h1 class="text-2xl text-orange-500 font-bold">01:30</h1>
                        <h2 class="font-bold text-2xl">Mangia, Mangia</h2>
                    </div>
                    <div class="flex flex-col gap-1  ">
                        <h1 class="text-2xl text-orange-500 font-bold">04:00</h1>
                        <h2 class="font-bold text-2xl">Cake Cutting</h2>
                    </div>
                    <div class="flex flex-col gap-1  ">
                        <h1 class="text-2xl text-orange-500 font-bold">04:45</h1>
                        <h2 class="font-bold text-2xl">Last Dance</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Timelinetype1