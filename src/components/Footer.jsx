
const Footer = () => {
    const arrow =(
        <svg class="h-4 w-4 text-gray-500"  width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-500">
        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
      </svg>
    )
    const mail=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-500">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    )
    const address=(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-orange-500">
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
      
    )
    return (
        <>
    
        

        <div className=" flex  justify-center items-center bg-black  h-96 mt-24 ">
        <div className="h-96 w-60 bg-gray-300 ml-4 mb-24 drop-shadow-md flex flex-col gap-5">
            <div className="bg-orange-500 w-full h-12 ">
            <div  className="flex item-centre space-x-2 mt-4 ml-8">
                <span class= "text-white text-xs ">Follow Us :</span>
            <svg class="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
               <path fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
               </path>
            </svg>
            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd" />
            </svg>
            <svg class="w-4 h-4 fill-white " viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
             </svg>  
             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59"/></svg>
            </div>
            </div>

            <div  className="flex item-centre space-x-2 mt-2 ml-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-50 bg-orange-500 border border-orange-500 p-1 rounded-full">
            <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
          </svg>
          <span className="text-blue-900 font-bold tracking-wider text-xl">PATRAI</span>
          </div>
          <p className= "text-gray-600 text-xs text-left ml-5 text-xs">Nam quam nunc,blandit vel,luctus <br/> pulvinar id,Iorem.Etiam ultri<br/> cies nisi vel augue</p>
          <div className ="flex item-centre space-x-2 ml-5 " >
                    {address} 
                    <span class ="text-blue-900  text-xs text-left">Manufactory,2nd Cross Street,< br/>Newyork,USA 10205</span>
                </div>
                <div className ="flex item-centre space-x-2 ml-5" >
                    {phone} 
                    <span class ="text-blue-900  text-xs text-center">+00-123-456-7890 <br/>+00-123-456-7891</span>
                </div>
                <div className ="flex item-centre space-x-2 ml-5" >
                    {mail} 
                    <span class ="text-blue-900 font- text-xs text-center">admin@domain.com <br/> support@domain.com</span>
                </div>
          </div>
          
            
            
            <div className=" flex flex-col justify-center items-top text-gray-300 font-bold text-l ml-24 mb-15 ">
                <h1>Best Services</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Material Equipments</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Agriculture processing</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Mechanical Engineering</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Chemical Research</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Material Engineering</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Agriculture Processing</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Power & Energy</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Material Equipments</span>
                </div>
                    <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                <span class ="text-gray-600 font-bold text-xs text-center">Material Equipments</span>
                    </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                   <span class ="text-gray-600 font-bold text-xs text-center">Material Equipments</span>
                </div>

            </div>

            <div className=" flex flex-col justify-center items-top text-gray-300 font-bold text-l ml-24 mb-15 ">
                <h1>Quick Links</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Home</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Features</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">About us</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Services</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Projects</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">News</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Shop</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                    <span class ="text-gray-600 font-bold text-xs text-center">Career</span>
                </div>
                    <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                <span class ="text-gray-600 font-bold text-xs text-center">Faq</span>
                    </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {arrow} 
                   <span class ="text-gray-600 font-bold text-xs text-center">Contact us</span>
                </div>

            </div>

            <div className=" flex flex-col justify-center items-top text-gray-300 font-bold text-l ml-24 mb-24 ">
                <h1>Latest Tweets</h1>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-gray-600 font-bold text-xs text-left">Elon Musk has been sued for $128 million by former <br/> Twitter CEO Parag Agarwal and three other former executives<br/> over unpaid severance.</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-gray-600 font-bold text-xs text-left">Gautam Gambhir, on March 2, asked the BJP President <br/> to relieve him of his political duties ahead of the start <br/> of his stint as mentor of KKR in IPL 2024.</span>
                </div>
                <div className ="flex item-centre space-x-2 mt-3" >
                    {twitter} 
                    <span class ="text-gray-600 font-bold text-xs text-left">Sam Altman re-shared an old Twitter (now called X) <br/> exchange between him and Elon Musk. This <br/>comes days after Musk sued OpenAI.</span>
                </div>
            </div>
        </div>
        
        
        <div className=" flex justify-center items-center bg-blue-900 w-full h-12 ">
          <p className=" text-white text-xs text-center ">@2024. All Rights Reserved By Design Themes</p>
        </div>
            
        </>
    )
}

export default Footer;