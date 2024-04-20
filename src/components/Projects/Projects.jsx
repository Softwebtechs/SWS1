/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1500},
      items: 2,
  },
  desktop: {
   breakpoint: { max:1024, min: 464},
   items: 2, 
  }, 
  tablet: {
   breakpoint: { max: 1024, min: 464},
   items: 1,
  },
  module: {
  breakpoint: { max: 464, min: 0 },
  items: 1,
  },
};

const images =[
  {
      id:'1',
      image:'/grinding.jpg',
      text:'Grinding',
      category:'Power Works',
      all:'All'
  },
  {
      id:'2',
      image:'/subway.jpg',
      text:'Subway',
      category:'Oil Factory',
      all:'All'
  },
  {
      id:'3',
      image:'/oil-storage.jpg',
      text:'Oil Storage',
      category:'Machinery',
      all:'All'
  },
  {
      id:'4',
      image:'/welding.jpg',
      text:'Welding Work',
      category:'Man Power',  
      all:'All'
  },
  {
    id:'5',
    image:'/construction.jpg',
    text:'Construction Tools',
    category:'Power Works',
    all:'All'
},
{
  id:'6',
  image:'/servicing.jpg',
  text:'Servicing',
  category:'Oil Factory',
  all:'All'
},
{
  id:'7',
  image:'/cloth.jpg',
  text:'Cloth Making',
  category:'Machinery',
  all:'All'
},
{
  id:'8',
  image:'/oil-factory.jpg',
  text:'Oil Factory',
  category:'Man Power',
  all:'All'
},


]

const Projects = () => {
  // const [active, setActive] =useState('All')
  const [items, setItems] =useState(images)

  const filterItem = (categItem) => {
    const updatedItems = images.filter((curElem) => {
      return curElem.category ===categItem;
    })
    setItems(updatedItems);
   
  }
  
  const allItems = (allItem) =>{
    const updateItem = images.filter((curElem) => {
      return curElem.all === allItem;
    })
    setItems(updateItem);
  }



  const Feedback=({image, name, about, rating}) => {
    return (
      <div className="bg-blue-950 lg:h-[600px] h-[500px] ">
      <div className="flex flex-col gap-8 pt-[80px] pl-[100px] ">
        <img src={image}
        alt=''
        className="h-[100px] w-[100px] rounded-full border-gray-400 border-[6px] object-cover 
         hover:border-orange-500 lg:mt-[60px]" 
        />
        <h1 className="text-white font-bold text-2xl">{name}</h1>
        <p className="text-gray-300 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[400px] 2xl:w-[300px]">{about}</p>
        <div className='pb-4 flex '>

        {[...Array(4)].map((_, index) => {
        return <HiStar key={index} className='text-orange-500 text-2xl' />
        })}
        
        </div>
       </div>
    </div>
    )
  }

  
  return (
    <div>
      <div className="bg-blue-950 lg:py-16 py-10 flex justify-between items-center">
      <h1 className="text-white lg:text-5xl text-3xl font-bold pl-[60px]">Projects</h1>
      <p className="text-slate-300 pr-[60px]">Home | Projects</p>
      </div>
      <div className="flex justify-center items-center mt-[50px]">
      <div className="lg:w-[1400px] w-[800px] 2xl:mt-[80px] mt-[50px] ">
      <div className="flex flex-row justify-start gap-10 items-center lg:text-xl text-lg font-bold  pb-6 px-8">
        <h1 
        onClick={() => allItems('All')}
        className="cursor-pointer hover:text-orange-500 text-gray-500">All
        </h1>

        <h1 
        onClick={() =>  filterItem('Machinery')} 
        className="cursor-pointer hover:text-orange-500 text-gray-500">Machinery
        </h1>

        <h1 
        onClick={() =>  filterItem('Man Power')} 
        className="cursor-pointer hover:text-orange-500 text-gray-500">Man Power
        </h1>

        <h1 
        onClick={() =>  filterItem('Oil Factory')} 
        className="cursor-pointer hover:text-orange-500 text-gray-500">Oil Factory
        </h1>

        <h1 
        onClick={() => filterItem('Power Works')} 
        className="cursor-pointer hover:text-orange-500 text-gray-500">Power Works
        </h1>
      </div>
     
      <div className="2xl:w-[1340px] py-[0.5px] border-none bg-gray-300 ml-8 mr-8"></div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 lg:px-8 px-8 md:grid-cols-2 grid-cols-1 gap-6 my-12 mx-4 relative z-10">

      {
        items.map((elem) => {
          const {id, text, image} =elem;

          return(
          <div>
          <div className="group relative cursor-pointer my-0 mx-auto overflow-hidden ">
          <img 
          className="h-[300px] w-[600px] duration-500 group-hover:scale-150 " 
          src={image} 
          alt="" 
          id={id}
          />
          <div className="absolute inset-0 group-hover:bg-orange-600 opacity-[0.7]"></div>
          <div className="absolute inset-0 flex translate-y-[-60%] flex-col items-center justify-center 
            px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-2xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {text}</p>
          <p className="mt-4 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat</p>
          <p className=" flex mt-6 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
          View Details <MdKeyboardArrowRight className="mt-1.5"/> </p>
          </div>
       
          <div className="bg-blue-950 py-3 text-white font-bold text-2xl flex justify-center ">
            {text}
          </div>
        </div>
      </div>
    )})}
     </div>
    </div>
  </div>
    <div className="grid lg:grid-cols-2 grid-cols-1 mt-[100px] ">
    <div className="relative lg:h-[600px] h-[450px] overflow-hidden">
    <img className=" lg:h-[600px] h-[450px] w-[1000px]" src="/servicing.jpg" alt="" />
    <div className="absolute inset-0 bg-orange-600 opacity-[0.8]"></div>
    <div className="absolute inset-0 flex flex-col justify-start items-start 2xl:pl-[230px] ">
    <h1 className="text-5xl font-bold  text-white mt-[100px] pl-[40px] lg:pt-[40px] ">From Our Client's Speak</h1>
    <p className=" text-white text-lg mt-[50px] lg:w-[450px] pl-[40px]">Consumer Choice Award Winner For Best Industrial Production in the city of New Jersy</p>
    <button className="bg-blue-950 shadow h-14 px-8 outline-none ml-[40px] text-white hover:bg-white hover:text-blue-950 
    cursor-pointer text-base transition-bg hover:border hover:border-blue-950 mt-[50px] lg:mt-[60px]">
      Read More
    </button>
  </div>
</div>
      <div>
        <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true}
        infinite
        showDots
        autoPlay={true}
        arrows={true}
        keyBoardControl={true}
        customTransition="all.5"
        transitionDuration={500}
        >
         
        <Feedback
        image='/man-1.jpg'
        name='Von Olin'
        about='Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='4'
        />

        <Feedback
        image='/woman-1.jpg'
        name='Kym Diller'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='3'
        />

        <Feedback
        image='/man-2.jpg'
        name='Jeff Grange'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='2'
        />

        <Feedback
        image='/man-3.jpg'
        name='Ryan Justin'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='5'
        />

       <Feedback
        image='/woman-2.jpg'
        name='Norah Kiger'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='4'
        />

        <Feedback
        image='/woman-3.jpg'
        name='Noah David'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='4'
        />

       <Feedback
        image='/man-4.jpg'
        name='Tim David'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='3'
        />

       <Feedback
        image='/woman-4.jpg'
        name='Mica Metcalf'
        about='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        rating='2'
        />

        </Carousel>
        </div>
     </div>
    </div>

  );
};

export default Projects;
