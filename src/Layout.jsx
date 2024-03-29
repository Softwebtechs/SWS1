import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components1/Footer'


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Layout