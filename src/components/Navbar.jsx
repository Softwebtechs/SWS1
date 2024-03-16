import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import img from '../gggg.png';

const Navbar = () => {
  return (
    <>
    <nav className='static'>
        <div className='h-10 bg-blue-900 sm:flex justify-center hidden flex-row items-center gap-96'>
          <div className='text-white flex gap-5 '>
            <h1> <PhoneIcon fontSize='small' />1-800-123-456789</h1>
            <h1><EmailIcon  fontSize='small' />  Example@gmail.com </h1>
          </div>
          <div className='text-white  flex flex-row gap-2'>
            <h1> <EmailIcon  fontSize='small' /> Working hours - Mon-Fri: 8:30-18:30  
            
            </h1>
            <p className='text-gray-500 p-[2px]'>|</p>
            <div className='flex gap-2'>
            <TwitterIcon fontSize='small' /> 
            <FacebookIcon fontSize='small' />
            <InstagramIcon fontSize='small' />
            <YouTubeIcon fontSize='small' />
            <img src={img} alt="xyz" className='h-4 w-4 mt-1' />
            
            </div>
          </div>
        </div>

        <div className='h-16 flex justify-between md:px-64 px-4 items-center'>
            <h1 className='text-2xl font-bold text-blue-900'>PATRAI</h1>
            <div>
                <ul className='md:flex justify-center hidden gap-5 text-sm'>
                
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>PROJECTS</li>
                    <li>BLOGS</li>
                    <li>PAGES</li>
                    <li>CONTACT</li>
                    <div className='flex flex-row gap-2'>
                <SearchIcon /> <p>|</p>
                <ShoppingCartIcon />
                </div>
                </ul>
                <div className='md:hidden mb-2'><a className='text-4xl'>&#8801;</a></div>
            </div>
        </div>
        <div className='h-28 bg-blue-900  md:flex hidden justify-around items-center'>
             <h1 className='text-white font-semibold text-4xl'>Career</h1>
            <div className='text-white'>
                <h1 className='text-sm'>HOME  |  CAREER</h1>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar