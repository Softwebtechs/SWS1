

const Part3 = ()=>{
    
        const checkboxicon =(
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-9" width="1em" height="1em" viewBox="0 0 100 100"><path fill="orange" d="m92.038 24.333l-8.62-8.622a1.615 1.615 0 0 0-2.282 0L49.987 46.86l-6.07-6.068a1.614 1.614 0 0 0-2.282 0l-8.622 8.622a1.611 1.611 0 0 0 0 2.282l15.782 15.778c.302.302.712.473 1.141.473c.019 0 .037-.01.056-.01c.016 0 .033.009.05.009a1.61 1.61 0 0 0 1.141-.473l40.855-40.857c.63-.632.63-1.653 0-2.283"/><path fill="orange" d="M72.022 53.625v21.159H27.978V30.74h31.06l9.979-9.978H23.193v.007c-.023 0-.044-.007-.068-.007a5.118 5.118 0 0 0-5.113 5H18v54h.013A5.111 5.111 0 0 0 23 84.749v.013h54v-.013a5.11 5.11 0 0 0 4.987-4.987H82V43.647z"/></svg>

        );
      
  return (
      <>
      <div className='flex xl:flex-row flex-col  font-poppins items-center mt-28 '>
                    <div className='xl:h-96 xl:w-1/2 h-96 w-full bg-gray-200 flex flex-col items-left'>
                        <h1 class ="font-bold text-4xl mt-20 ml-10 tracking-wider w-64 md:max-xl:w-full">Automotive Spares</h1>
                        <p class =" text-xs text-orange-500 ml-10 mt-10 font-roboto tracking-wider">Consumer Choice Award Winner For Best <br/> Industrial Production</p>
                        <button class =" bg-blue-900 text-white mt-10 h-10 w-24 ml-10 text-xs font-poppins hover:bg-white hover:text-black cursor-pointer">Read More</button>
                    </div>
                    

                    <div style={{ backgroundColor: '#273272' }} className='xl:h-96 xl:w-1/2 h-96 w-full  font-poppins flex flex-col  items-left ' >
                        <h1 class ="font-bold text-4xl mt-20 ml-10 text-white tracking-wider w-64 md:max-xl:w-full">Infrastructure Materials</h1>
                        <p class =" text-xs text-white ml-10 mt-10  tracking-wider font-roboto">Consumer Choice Award Winner For Best <br/> Industrial Production</p>
                        <button class =" bg-orange-600 text-white mt-10 h-10 w-24 ml-10 text-xs font-poppins hover:bg-white hover:text-black cursor-pointer">Read More</button>
                    </div>

                    
            
         </div>   
        

         <div className='flex xl:flex-row flex-col mb-10  ' >
         <div className="xl:h-96 xl:w-1/2 h-96 w-full flex bg-gray-200">
          <div style={{ backgroundColor: '#273272' }} className="xl:w-1/2 xl:h-96 h-full w-1/2"></div>
          <div className="relative bg-orange-500 xl:w-1/2 xl:h-96 h-full w-1/2 flex items-center">
            <div className="h-14 w-64 bg-white absolute -left-32  ">
                <h1 className="text-center text-orange-500 font-roboto text-3xl mt-3">Power <span className='text-blue-900'> Energy</span></h1>
            </div>
          </div>
        </div>
        
                    

                    <div className='xl:h-96 xl:w-1/2 h-96 w-full bg-gray-200  flex flex-col font-poppins items-left ' >
                        <p class ="font-bold text-s mt-10 ml-10 text-blue-900">More Services</p>
                        <h1 class =" text-4xl text-orange-500 ml-10 mt-1 font-bold">Quality Resorcing</h1>
                        <p class ="text-gray-600 text-left ml-10 mt-5 text-xs font-roboto ">Quality resourcing in the industry plays a pivotal role in ensuring the efficiency, effectiveness, and sustainability of business operations. It involves the strategic allocation and utilization of human, technological, and financial resources to achieve optimal outcomes.</p>
                        <div className ="flex item-centre space-x-2 mt-5" >
                        {checkboxicon} 
                        <span class ="text-gray-600  text-xs sm:text-center text:left font-roboto ">Effective resourcing ensures that individuals are placed in roles that align with their skills and expertise.</span>
                        </div>
                        <div className ="flex item-centre space-x-2 mt-3" >
                        {checkboxicon} 
                        <span class ="text-gray-600  text-xs sm:text-center text:left font-roboto ">Well-managed resources reduce bottlenecks and enhance overall productivity.</span>
                        </div>
                        <div className ="flex item-centre space-x-2 mt-3" >
                        {checkboxicon} 
                        <span class ="text-gray-600  text-xs sm:text-center text:left font-roboto ">Quality resourcing involves attracting, recruiting, and retaining skilled and competent individuals.</span>
                        </div>
                        <div className ="flex item-centre space-x-2 mt-3" >
                        {checkboxicon} 
                        <span class ="text-gray-600  text-xs  sm:text-center text:left font-roboto ">Up-to-date and well-maintained technology infrastructure is essential for competitiveness and operational efficiency.</span>
                        </div>
                    </div>
            
         </div>   
      </>
  )
}

export default Part3;


