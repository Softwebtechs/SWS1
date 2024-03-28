import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components1/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blog from './components/Blog/Blog.jsx'
import Pages from './components/Pages/Pages.jsx'
import Contact from './components/Contact/Contact.jsx'
import History from './components/History/History.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element = {<Layout />}>
    <Route path='' element = {<Hero />}/>
    <Route path='about' element = {<About />}/>
    <Route path='services' element = {<Services />}/>
    <Route path='projects' element = {<Projects />}/>
    <Route path='blog' element = {<Blog />}/>
    <Route path='pages' element = {<Pages />}/>
    
      <Route path='history' element = {<History />} />
    <Route path='contact' element = {<Contact />}/>
   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

