/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { MdOutlineCheckBox, MdKeyboardArrowRight  } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import React from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";


const data = [
  { label: 'Production', value: 80 },
  { label: 'Export & Import', value: 70 },
  { label: 'Customer Satisfaction', value: 90 },
  { label: 'Utilization Rate', value: 60 },
];

const About = () => {

    const BarGraph = ({ data }) => {
    return (
      <div className="mt-10 flex flex-col justify-start items-start gap-6 w-[500px]">
        {data.map((item) => (
          <div key={item.label} className="flex flex-col justify-start items-start w-[600px]  mt-1">
            <div className="2xl:w-[600px] w-[500px] flex justify-between items-center gap-8">
            <p className=" text-white text-lg font-semibold mb-[5px]">{item.label}</p>
            <p className="text-white text-lg font-semibold ">{item.value}%</p>
            </div>
           <div className="2xl:w-[600px]  w-[500px] bg-white ">
           <div className="bg-blue-950 h-[10px] border-1 flex justify-end items-center " style={{ width: `${item.value}%`  }}>
           </div>
         
          
            </div>
          </div>
        ))}
      </div>
    );
  };
  

const SmallCard =({num, icon, text}) => {
  return (
    <div className="h-[170px] xl:w-[270px] md:w-[380px] w-[420px] shadow-xl border-2 border-slate-100 flex flex-row  justify-between items-center ml-10 hover:shadow-2xl">
      <div className="flex flex-col gap-3 justify-start items-start ml-5 ">
        <h1 className="text-orange-600 text-5xl font-bold ">{num}</h1>
        <p className="text-blue-900 font-semibold text-lg">{text}</p>
      </div>
      <div className="text-slate-100 text-9xl ">{icon}</div>
    </div>

  )
}


const Card1= ({image, name, title, icon1, icon2, icon3, icon4 }) =>{
           return (
            <div className="group flex flex-col justify-center items-center">
            <div className=" relative cursor-pointer pt-3 2xl:w-[300px] w-[250px] overflow-hidden">
            <div className="h-[325px] overflow-hidden">
            <div className=" absolute inset-0 flex translate-y-[-100%] flex-col items-center justify-center 
               px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
              <div className="group bg-blue-900 opacity-[0.7] h-[400px] w-[300px]">
              <div className="flex justify-center items-center mt-[120px]">
              <BsPlusLg className="text-gray-500 font-extralight
             h-[80px] w-[80px]  group-hover:rotate-180 "/>
           </div>
              </div>
            </div> 
            <img 
              src={image} 
              alt=''
              className="h-[325px] w-[300px]  2xl:w-[600px] mb-7"
              />
            </div>
          </div>
               
               
              <div className=" relative cursor-pointer pt-3 2xl:w-[300px] w-[250px] overflow-hidden">
              <div>
               <div className=" absolute inset-0 flex translate-y-[-100%] flex-col items-center justify-center 
               px-9 text-center transition-all duration-500 group-hover:translate-y-0 ">
               
              <div className="bg-orange-600  h-[800px] w-[300px]">
              <div className="">
              <h1 className="text-white font-semibold text-3xl mb-2 flex flex-1 justify-center pb-2 pt-3">{name}</h1>
              <p className="text-blue-950 text-lg flex justify-center pb-6">{title}</p>
              <div className="flex flex-row justify-center items-center gap-7">
               <p className="text-white ">{icon1}</p>
               <p className="text-white ">{icon2}</p>
               <p className="text-white ">{icon3}</p>
               <p className="text-white ">{icon4}</p>
              </div>
                </div>
              </div>
              </div> 

              <h1 className="text-blue-950 font-semibold text-3xl mb-2 flex flex-1 justify-center pb-2 pt-1">{name}</h1>
              <p className="text-orange-600 text-lg flex justify-center pb-6">{title}</p>
              <div className="flex flex-row justify-center items-center gap-7">
               <p className="text-slate-400 ">{icon1}</p>
               <p className="text-slate-400 ">{icon2}</p>
               <p className="text-slate-400 ">{icon3}</p>
               <p className="text-slate-400 ">{icon4}</p>
              </div>
              </div>
            <div className="bg-slate-300 group-hover:bg-blue-900 py-[1px] border-none mt-12"></div>
            </div>
          </div>
           
           )
}


const Card2 =({image, title, num, text}) =>{
         return (
          <div className="group pt-[80px] overflow-hidden">
            <img 
            src={image} 
            alt='' 
            className="h-[300px] w-[600px] mb-7 group-hover:translate-x-2"
            />
            <div className="flex justify-between">
            <h1 className="text-3xl text-blue-900 font-semibold mb-8">{title}</h1>
            <h1 className="text-4xl font-bold text-slate-200 group-hover:text-orange-500">{num}</h1>
            </div>
           
            <p className="text-slate-500 font-normal text-lg">{text}</p>
            <p className=" flex mt-6 text-lg text-orange-500 font-semibold hover:text-slate-500">
             Read More<MdKeyboardArrowRight className="mt-1.5"/> </p>
          </div>

         )
}


  return (
    
 <div className="">
       <div className="md:h-[170px] h-56 bg-blue-950  md:flex-row  md:justify-between px-48 md:px-10 xl:px-28 items-center flex flex-col gap-6 justify-center">
        <h1 className="text-white font-semibold md:text-4xl xl:text-5xl text-5xl">
          About Us
        </h1>
        <div className="text-white md:flex-row flex-col">
          <div className="flex flex-row gap-5 ">
            <h1 className="text-lg text-gray-300">Home</h1>
            <p>|</p>
            <h1 className="text-lg text-gray-300">About Us</h1>
          </div>
        </div>
      </div>

     <div className="max-w-[1400px] mx-auto ">
    <div className="px-[130px]  xl:flex justify-between items-center 2xl:gap-[100px] gap-[60px] py-[100px]  ">
      <div className="group lg:w-2/5 w-[100%]  mb-[60px] border-[10px]  border-gray-200  hover:border-blue-950">
        <img src='/main-pic.png' alt='' 
          className="w-[600px] h-[500px]"
        />
       <div className=" group flex flex-col justify-end items-end bg-slate-200 group-hover:bg-blue-950">
       <h1 className="text-orange-600 font-bold   group-hover:text-white pr-4 text-5xl">14+</h1>
        <p className="text-blue-950 font-semibold group-hover:text-white pr-4 text-3xl">Years</p>
        <p className="text-blue-950 font-semibold group-hover:text-white pr-4 text-3xl">Experience</p>
       </div>


      </div>
      <div className="md:w-3/5 ">
        <h3 className="text-blue-900 font-semibold text-2xl">We are here to</h3>
        <h1 className="text-orange-600 font-bold sm:text-6xl text-4xl sm:w-[650px] w-[500px] py-3 ">Helping Firms, Innovate, Transforms, and Lead.</h1>
        <p className="text-slate-600 sm:w-[680px] w-[430px] py-8">Nemo enim ipsam voluptatem quia voluptas sit 
        aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione 
        voluptatem sequi nesciunt. Donec quam felis, 
        ultricies nec, pellentesque eu, pretium quis, 
        sem.
        </p>
        <div className="">
          <ul className="sm:flex justify-between items-center w-[600px]">
            <div>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            In enim justo rhoncus ut.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Nullam dictum felis eu pede.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Vivamus elementum semper nisi.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Aenean vulputate. eleifend tellus.
            </li>
            </div>

           <div>
           <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            In enim justo rhoncus ut.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Nullam dictum felis eu pede.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Vivamus elementum semper nisi.
            </li>
            <li className="py-2 text-slate-600 flex justify-start items-center gap-2">
            <MdOutlineCheckBox className="text-orange-600 "/>
            Aenean vulputate. eleifend tellus.
            </li>
           </div>
          </ul>
          </div>
        <div className="flex gap-4">
        <button className="bg-blue-950 shadow h-14 px-8 outline-none text-white hover:bg-orange-600 hover:text-white
            cursor-pointer text-base transition-bg hover:border hover:border-blue-950 mt-[50px] ">
            Read More
        </button>
        <button className="bg-orange-600 shadow h-14 px-10 outline-none text-white hover:bg-blue-950 hover:text-white
           cursor-pointer text-base transition-bg hover:border hover:border-orange-600 mt-[50px] ">
          Join us now
        </button>
        </div>
      </div>
   </div>

      

      {/* {smallcard} */}
      <div className="2xl:w-[1400px] mx-auto sm:mx-4 flex justify-center items-center">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-6 gap-7 ">
        <SmallCard
        text='Years of Experience'
        num='14+'
        icon=<TfiBag />
        />

        <SmallCard
        text='Project per Year'
        num='68+'
        icon=<MdMiscellaneousServices />
        />

       <SmallCard
        text='Products per Month'
        num='23K+'
        icon=<IoBulbOutline />
        />

        <SmallCard
        text='Happy Clients'
        num='100+'
        icon=<GrUserWorker />
        />
        </div>
       </div>
       </div>


     {/* {chart part} */}
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-[100px] 2xl:h-[650px] ">

          <div className="bg-orange-600 pb-[100px] 2xl:px-[110px] ">
           <div className="w-[600px] px-[60px] flex flex-col justify-start items-start ">
          <h1 className="text-lg font-semibold text-blue-900 mt-[80px] lg:pt-[20px] ">Why Choose Us?</h1>
          <p className=" text-white font-semibold text-4xl mt-[30px] 2xl:w-[600px] sm:w-[400px]">
          Get a solution for all your Industries needs.</p>
          <BarGraph data={data}  />
          </div>
         </div>
          <div>
         <img src='/servicing.jpg' alt='' 
         className="lg:h-[650px] h-[450px] w-[1000px]"
          />
         </div>
          </div>

       {/* {images part} */}

       <div className="flex justify-center items-center">
       <div className="max-w-[1400px] mx-auto relative z-10 2xl:mt-[10px] mt-[20px] mb-[100px]">
       <div className="flex flex-col justify-center items-center pt-[120px] pb-[60px] gap-2">
       <h1 className="text-blue-900 text-5xl font-bold">Our Expert for</h1>
       <h1 className="text-orange-600  text-5xl font-bold"> Different Solutions</h1>
       </div>

       <div className=" mx-[80px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:gap-8 gap-12 relative z-10 ">
        <Card1
        image='/ceo.jpg'
        name='Jason Smith'
        title='Founder / Ceo'
        icon1=<FaTwitter />
        icon2=<FaFacebook />
        icon3=<FaGoogle />
        icon4=<FaLinkedinIn />
        />

        <Card1
        image='/business-woman.jpg'
        name='Linda Johns'
        title='Money Management'
        icon1=<FaTwitter />
        icon2=<FaFacebook />
        icon3=<FaGoogle />
        icon4=<FaLinkedinIn />
        />

        <Card1
        image='/p-head.jpg'
        name='Bill Goldberg'
        title='Production Head'
        icon1=<FaTwitter />
        icon2=<FaFacebook />
        icon3=<FaGoogle />
        icon4=<FaLinkedinIn />
        />

       <Card1
        image='/incharge.jpg'
        name='Mark Hendry'
        title='Quality In charge'
        icon1=<FaTwitter />
        icon2=<FaFacebook />
        icon3=<FaGoogle />
        icon4=<FaLinkedinIn />
        />

       </div>
    </div>
  </div>


   <div className="relative lg:h-[500px] h-[550px] overflow-hidden">
    <img className=" lg:h-[500px] h-[550px] w-full" src="/servicing.jpg" alt="" />
    <div className="absolute inset-0 bg-blue-900 opacity-[0.7]"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
    <h1 className="lg:text-6xl text-4xl text-center  font-bold text-white">Power over you and your competitors?</h1>
    <p className=" text-white text-lg mt-[50px] w-[500px]  text-center lg:w-[650px]">Clients count on us every day to help transform uncertainty into possibility.</p>
    <button className="bg-orange-600 shadow h-14 px-12 outline-none  text-white hover:bg-white hover:text-blue-950 
    cursor-pointer text-base transition-bg hover:border hover:border-orange-600 mt-[50px] lg:mt-[60px]">
      Send Message
    </button>
   </div>
  </div> 
            
            {/* {second image part}   */}

          <div className="flex justify-center items-center">
         <div className="max-w-[1400px] mx-auto  relative z-10  mt-[100px] mb-[100px]">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
            <h1 className="md:text-5xl text-4xl font-semibold text-blue-900 text-center 2xl:w-[600px] 2xl:text-start w-[400px]">Our Experience and 
            <sapn className="md:text-5xl text-4xl font-semibold text-orange-600" > Industry Knowledge </sapn></h1>
            <p className="lg:text-8xl text-[0.5px] text-slate-300 font-extralight"> | </p>
            <p className="text-black text-lg font-semibold text-center w-[400px]  2xl:w-[600px] 2xl:text-start ">Cum sociis natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </div>

          <div className="mx-[80px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <Card2
              image='/storage-hall.jpg'
              title='Storage Hall'
              num='01'
              text='Cras est tellus, tincidunt eu ornare et, euismod sit amet sem. 
              Ut eget tempor turpis, eget accumsan odio metus vitae commodo auctor, ex urna.'
              />

             <Card2
              image='/grinding-work.jpg'
              title='Griding Works'
              num='02'
              text='Cras est tellus, tincidunt eu ornare et, euismod sit amet sem. 
              Ut eget tempor turpis, eget accumsan odio metus vitae commodo auctor, ex urna.'
              />

             <Card2
              image='/plan-discussion.jpg'
              title='Plan Discussion'
              num='03'
              text='Cras est tellus, tincidunt eu ornare et, euismod sit amet sem. 
              Ut eget tempor turpis, eget accumsan odio metus vitae commodo auctor, ex urna.'
              />
               </div>
            </div>
         </div>
     </div>
   );
};

export default About;
About;
