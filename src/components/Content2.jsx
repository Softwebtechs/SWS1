

const Content2 =()=>{
    return(
        <>
        <div className=" flex   bg-white  h-60  mt-5">
        <div className=" flex flex-col  items-top bg-gray-300  w-44 h-56 ml-60  ">
            <h1 class="text-blue-900 font-bold text-l ml-5 mt-6 ">Broucher</h1>
            <p class= "text-gray-500 text-left text-xs ml-5 mt-5 mr-5"> It  is a promotional document created by a company or organization.</p>
            <button class="bg-blue-900 text-white text-xs h-7 w-28 ml-5 mt-5">Docs Files</button>
            <button class="bg-orange-600 text-white text-xs h-7 w-28 ml-5 mt-2">Pdf Files</button>
        </div>

        <div className=" flex flex-col  items-top ml-20 mr-20">
          <p class="text-gray-500 text-xs text-left">Industry tools refer to a diverse range of specialized equipment, software,and  instruments designed to facilitate and enhance various industrial <br/>processes across different sectors.These tools play a crucial role in improving efficiency, productivity, and overall performance in industrial settings.</p>
          <h1 class=" text-orange-500 text-2xl font-bold mt-8 ">Our Best Solutions</h1>
          <div className='flex flex-row gap-7  items-center mt-3 '>
                    <div className='h-32 w-56 bg-blue-900 flex flex-col justify-center items-center'>
                    <svg class="h-14 w-14 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                            <h1 class="text-white text-center text-l">Advanced <br/>Technology</h1>
                        
                    </div>

                    <div className='h-32 w-56 bg-orange-600  flex flex-col justify-center items-center ' >
                    <svg class="h-14 w-14 text-gray-100"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                     </svg>

                    <h1 class="text-white text-center text-l">Expert <br/>Engineers</h1>
                        
                    </div>

                    <div className='h-32 w-56 bg-blue-900 flex flex-col items-center justify-center  '>
                    <svg class="h-14 w-14 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" />  <path d="M9 17h6" />  <path d="M13 6h5l3 5v6h-2" /></svg>
                        
                         <h1 class="text-white text-center text-l ">Delivery <br/> on Time</h1>
                    
                    </div>
                    </div>
        </div>
        </div>
        
        </>
    )
}

export default Content2;