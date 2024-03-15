import logo from '../image/logo.png'
//import logo2 from '../image/logo2.png'
//import logo3 from '../image/logo3.png'
//import logo6 from '../image/logo6.png'

const Part4 =()=>{
    return(
        <>
        <div className='gap-10 '>
                <div className='flex flex-col justify-center item-center  text-blue-900'>
                    <h1 className='font-semibold text-3xl text-center'>Our Client  <span className='text-orange-500'>Around the World</span></h1>
                    <p className='mt-5 text-center text-xs text-gray-500'>Donec pedejusto,fringilla vel,aliquet nec, vultiptate eget,arcu,In enim justo,rhonus,ut,imperdiet a, <br/> <span class=" text-xs text-centre">venenatis vitae,justo. Nullam dictum felis eu pede mollis pretium.</span></p>
                </div>
        </div>

        <div className=" flex justify-center item-center gap-10 w-3/4 h-1/2  ml-60 mt-10">
           <img src={logo} alt="logo" className="w-3/4 h-3/4  " />
           {/*<img src={logo2} alt="logo-2"  className=" w-full h-full mr-7  " />
           <img src={logo3} alt="logo-3"  className=" w-full h-full mr-7  " />*/}

        </div>

        {/*<div className=" flex justify-center item-center gap-10 w-32 h-32  ml-72">
           <img src={logo6} alt="logo-6" className="w-full h-full object-cover " />
    </div>*/}
        
        
        </>
    )
}

export default Part4;