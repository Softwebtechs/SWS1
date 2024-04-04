import logo from '../../image/logo.png'
//import logo2 from '../image/logo2.png'
//import logo3 from '../image/logo3.png'
//import logo6 from '../image/logo6.png'

const Part4 =()=>{
    return(
        <>
        <div className='gap-10 '>
                <div className='flex flex-col justify-center item-center  text-orange-500'>
                    <h1 className='font-semibold text-3xl text-center font-poppins'>Our Clients  <span className='text-blue-900'>Around the World</span></h1>
                    <p className='  mt-5 text-center text-xs font-roboto text-gray-500'>Donec pedejusto,fringilla vel,aliquet nec, vultiptate eget,arcu,In enim justo,rhonus,ut,imperdiet a, <br/> <span class=" text-xs text-centre">venenatis vitae,justo. Nullam dictum felis eu pede mollis pretium.</span></p>
                </div>
        </div>

        <div className=" flex justify-center item-center gap-10 xl:w-3/4 xl:h-1/2 h-1/2 w-3/4  xl:ml-60 sm:ml-32 ml-14  mt-10">
           <img src={logo} alt="logo" className="sm:w-3/4 sm:h-3/4 w-96 h-96 ml-9 flex  " />
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