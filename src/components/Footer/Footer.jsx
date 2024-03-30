import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Patrai from '../../image/patrai logo.png'
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    const arrow =(
        <svg class="h-4 w-4 text-zinc-400"  width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
    )

    const twitter =(
        <svg
            class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
            </path>
        </svg>
    )

    const phone=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-600">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
      </svg>
    )
    const mail=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-600">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
    const address=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-600">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
      
    )
    return (
        <>
    
        

        <div className=" xl:flex xl:flex-row flex flex-col  justify-center items-center bg-black font-roboto xl:h-96 h-full w-full xl:mt-32  mt-24 relative ">
        <div className="  h-96 xl:w-72 w-5/6 bg-gray-200 xl:mr-[1000px] xl:mb-24  mb-10 drop-shadow-md flex flex-col gap-5 absolute -top-10">
            <div className="bg-orange-600 w-full h-14 ">
            <div  className="flex item-centre  space-x-2 mt-4 xl:ml-8 md:ml-96 ml-14">
                <span class= "text-white text-xs font-poppins  ">Follow Us :</span>
                <TwitterIcon
                style={{
                  color: "white",
                  marginBottom: " 3px",
                  marginRight: "4px",
                  width:"17px",
                  height:"17px",
                  
                }}
                fontSize="small"
                className="hover:bg-blue-950 cursor-pointer"
              />
            <svg class="w-4 h-4 text-white hover:bg-blue-950 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd" />
            </svg>
            <InstagramIcon
                style={{
                  color: "white",
                  marginBottom: " 3px",
                  marginRight: "4px",
                  width:"17px",
                  height:"17px"
                }}
                fontSize="small"
                className="hover:bg-blue-950 cursor-pointer"
              />
            <svg class="w-4 h-4 text-white dark:text-white hover:bg-blue-950 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
             </svg>  
             <svg className="hover:bg-blue-950 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59"/></svg>
            </div>
            </div>

            <div  className="flex item-centre space-x-2 mt-2 ml-5 ">
            <Link to="/" className="flex items-center">
            <img src={Patrai} alt="patrai"  className=" xl:w-17 xl:h-7 w-32 h-10   " />
            </Link>
          </div>
          <p className= " text-gray-600 text-xs text-left ml-5 text-xs w-64 md:max-xl:w-full ">Nam quam nunc,blandit vel,luctus  pulvinar,  id Iorem.Etiam ultri cies nisi vel augue</p>
          <div className ="flex item-centre space-x-2 ml-5 " >
                    {address} 
                    <span class ="text-blue-950  text-xs text-left w-56 md:max-xl:w-full ">Manufactory,2nd Cross Street,Newyork,USA 10205</span>
                </div>
                <div className ="flex item-centre space-x-2 ml-5" >
                    {phone}
                    <div> 
                    <p class ="text-blue-950  text-xs text-center cursor-pointer hover:text-orange-500 hover:underline ">+00-123-456-7890</p>
                    <p class="text-blue-950  text-xs text-center cursor-pointer hover:text-orange-500 hover:underline mt-2">
                    +00-123-456-7891 </p>
                    </div>
                    
                </div>
                
                <div className ="flex item-centre space-x-2 ml-5" >
                    {mail} 
                    <div>
                    <p class ="text-blue-950 font-roboto text-xs text-center cursor-pointer hover:text-orange-500 hover:underline">admin@domain.com </p>
                    <p class= "text-blue-950 font-roboto text-xs text-center cursor-pointer hover:text-orange-500 hover:underline mt-2"> support@domain.com</p>
                    </div>
                </div>
          </div>
          
            
            <div class=" md:flex md:flex-row flex-col  ">
            <div className=" flex flex-col justify-left items-top text-gray-200  text-l xl:ml-80 xl:mt-10 mt-96  ml-28  ">
                <h1 class= "font-poppins">Best Services</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Material Equipments</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class =" text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Agriculture processing</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Mechanical Engineering</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Chemical Research</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Material Engineering</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Agriculture Processing</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Power & Energy</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Material Equipments</span>
                </div>
                    <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Material Equipments</span>
                    </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                   <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Material Equipments</span>
                </div>

            </div>

            <div className=" flex flex-col justify-top items-top text-gray-200  text-l ml-32  md:max-xl:mt-96   mb-14 mt-10 ">
                <h1 class= "font-poppins md:mt-0 mt-4 ">Quick Links</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center ">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-white" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:text-white cursor-pointer lg:border-0  lg:p-0`
                      }
                    >Home
                    </NavLink>
                    </span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">Features</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-white" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:text-white cursor-pointer lg:border-0  lg:p-0`
                      }
                    >About us
                    </NavLink>
                    </span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400  text-xs text-center hover:text-white cursor-pointer">
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-white" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:text-white cursor-pointer lg:border-0  lg:p-0`
                      }
                      >Services
                    </NavLink>
                      </span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-white" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:text-white cursor-pointer lg:border-0  lg:p-0`
                      }
                    >Projects
                    </NavLink>
                    </span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">News</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Shop</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Career</span>
                </div>
                    <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">Faq</span>
                    </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                   <span class ="text-zinc-400 text-xs text-center hover:text-white cursor-pointer">
                   <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-white" : "text-gray-500"
                        }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:text-white cursor-pointer lg:border-0  lg:p-0`
                      }
                    >Contact us
                    </NavLink>
                    </span>
                </div>

            </div>

            <div className=" flex flex-col justify-center items-left text-gray-200  text-l ml-24  md:max-xl:mt-96   mb-5">
                <h1 class= "font-poppins">Latest Tweets</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-zinc-400 text-xs text-left">Elon Musk has been sued for $128 million by former <br/> Twitter CEO Parag Agarwal and three other former executives<br/> over unpaid severance.</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-zinc-400 text-xs text-left">Gautam Gambhir, on March 2, asked the BJP President <br/> to relieve him of his political duties ahead of the start <br/> of his stint as mentor of KKR in IPL 2024.</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-zinc-400 text-xs text-left">Sam Altman re-shared an old Twitter (now called X) <br/> exchange between him and Elon Musk. This <br/>comes days after Musk sued OpenAI.</span>
                </div>
            </div>
        </div>
        </div>
        
        
        <div style={{ backgroundColor: '#273272' }} className=" flex justify-center items-center  w-full h-12 ">
          <p className=" text-white text-xs text-center font-roboto">@2024. All Rights Reserved By <span class="hover:text-red-500 cursor-pointer">Design Themes </span></p>
        </div>
            
        </>
    )
}

export default Footer;