
const Content1 =()=>{

    const checkboxicon =(
        <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="0 0 100 100"><path fill="orange" d="m92.038 24.333l-8.62-8.622a1.615 1.615 0 0 0-2.282 0L49.987 46.86l-6.07-6.068a1.614 1.614 0 0 0-2.282 0l-8.622 8.622a1.611 1.611 0 0 0 0 2.282l15.782 15.778c.302.302.712.473 1.141.473c.019 0 .037-.01.056-.01c.016 0 .033.009.05.009a1.61 1.61 0 0 0 1.141-.473l40.855-40.857c.63-.632.63-1.653 0-2.283"/><path fill="orange" d="M72.022 53.625v21.159H27.978V30.74h31.06l9.979-9.978H23.193v.007c-.023 0-.044-.007-.068-.007a5.118 5.118 0 0 0-5.113 5H18v54h.013A5.111 5.111 0 0 0 23 84.749v.013h54v-.013a5.11 5.11 0 0 0 4.987-4.987H82V43.647z"/></svg>

    );
    return(

        
        <>
        <div className=" flex   bg-white  h-86  mt-20 ">
        <div className=" flex flex-col  items-top text-blue-900  text-xl ml-60  ">
                <h1 class="font-bold"> Services</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                 
                    <span class ="text-gray-600  text-xs text-center">Electronic Material</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                
                    <span class ="text-gray-600  text-xs text-center">Building Management</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
         
                    <span class ="text-gray-600  text-xs text-center">Power System</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                     
                    <span class ="text-gray-600  text-xs text-center">Auto Parts</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
     
                    <span class ="text-gray-600  text-xs text-center">Heavy Machinery</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    
                    <span class ="text-gray-600  text-xs text-center">Oil-Minerals</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
         
                    <span class ="text-orange-500  text-xs text-center">Industry Tools</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                     
                    <span class ="text-gray-600  text-xs text-center">Media Equipments</span>
                </div>
                    <div className ="flex item-left space-x-2 mt-3" >
                 
                <span class ="text-gray-600  text-xs text-center">Construction Tools</span>
                    </div>
                

            </div>

            <div className=" flex flex-col  items-top text-orange-500  text-2xl ml-32  ">
                <h1 class="font-bold">Industry Tools</h1>
                <div className ="flex item-centre space-x-2 mt-6" >
                <span className ="text-gray-500 text-xs text-left mr-20">
                Industry tools refer to a diverse range of specialized equipment, software,and  instruments designed to facilitate and enhance various industrial <br/>processes across different sectors.These tools play a crucial role in improving efficiency, productivity, and overall performance in industrial settings.<br/>With the increasing emphasis on automation, industries employ tools like programmable logic controllers (PLCs), industrial robots, and SCADA<br/> systems to streamline processes and reduce human intervention. 
                </span>
                </div>

                <div className='flex flex-row mt-6  ' >
                        <div class="bg-white w-96 h-48">
                        <div  className ="flex flex-col item-top space-x-2 ">
                        <h2 className="text-blue-900 text -xl font-bold ">Beginning</h2>
                        <p class=" text-gray-500 text-xs mt-6 text-left ">Industries rely on various tools for the regular<br/> maintenance and repair of equipment.</p>
                        <div className ="flex item-centre space-x-2 mt-6" >
                        {checkboxicon} 
                        <span class ="text-blue-900  text-xs text-center">Effective resourcing </span>
                        </div>
                        <div className ="flex item-centre space-x-2 mt-3" >
                        {checkboxicon} 
                        <span class ="text-blue-900  text-xs text-center">Well-managed resources</span>
                        </div>
                        <div className ="flex item-centre space-x-2 mt-3" >
                        {checkboxicon} 
                        <span class ="text-blue-900  text-xs text-center">Quality resourcing killed</span>
                        </div>
                
                </div>
                        </div>
                        <div class="bg-white w-24 h-48">
                        
                        </div>
                        <div class="bg-gray-500 w-72 h-48">

                        </div>
                        
                    </div>
                    

            </div>

        </div>

        </>
    )
}

export default Content1;