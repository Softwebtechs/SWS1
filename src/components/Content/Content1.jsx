import React from 'react'

const Content1 = () => {
    return (
        <>
            <div className='flex h-screen bg-white justify-center  mt-10'>
                <div className='flex flex-row gap-4'>
                    <div className='gap-4'>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-blue-900 font-bold text-4xl mb-9'>We Are Expert In <br /><span className='text-orange-500'>Different Solutions</span></h1>
                            <p>... icon img</p>
                        </div>
                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-4'>
                                <div className='h-52 w-80 bg-gray-400 text-xl'></div>
                                <h1 className='text-blue-900 text-xl font-medium'>Material Engineering</h1>
                                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur <br />  adipisicing elit.  Quis quos quisquam, <br /> repellendus voluptatem cupiditate sequi <br />totam culpa.</p>
                                <p className='text-orange-500 text-sm'>Read more &lt </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='h-52 w-80 bg-gray-400 text-xl'></div>
                                <h1 className='text-blue-900 text-xl font-medium'>Oil & Chemical</h1>
                                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur <br />  adipisicing elit.  Quis quos quisquam, <br /> repellendus voluptatem cupiditate sequi <br />totam culpa.</p>
                                <p className='text-orange-500 text-sm'>Read more &lt </p>
                            </div>
                        </div>
                    </div>
                    <div className="m-8 bg-white p-8 drop-shadow-xl h-3/4">
                        <h2 className="text-xl font-semibold text-orange-500 mb-9">Get your Free <br /><span className='text-blue-900'>Consultation & Guote</span></h2>
                        <form>
                            <div className="mb-4">
                                <input type="text" id="name" name="name" placeholder="Name*" className="w-full px-3 py-2 border text-black outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <input type="email" id="email" name="email" placeholder="Email*" className="w-full px-3 py-2 border outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <select id="service" name="service" className="w-full px-3 py-2 border  outline-none focus:border-blue-500">
                                    <option value="">Service Required</option>
                                    <option value="service1">Service 1</option>
                                    <option value="service2">Service 2</option>
                                    <option value="service3">Service 3</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <textarea id="message" name="message" placeholder="Your Text*" className="w-full px-3 py-3 border outline-none focus:border-blue-500"></textarea>
                            </div>
                            <p className='mb-10'>* Need to fill marked. Make a call for more <br />
                                details required.</p>
                            <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white font-normal py-2 px-11 focus:outline-none focus:shadow-outline">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Content1
