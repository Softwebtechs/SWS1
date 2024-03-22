import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blog from './components/Blog/Blog.jsx'
import Pages from './components/Pages/Pages.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element = {<App />}>
    <Route path='' element = {<Home />}/>
    <Route path='about' element = {<About />}/>
    <Route path='services' element = {<Services />}/>
    <Route path='projects' element = {<Projects />}/>
    <Route path='blog' element = {<Blog />}/>
    <Route path='pages' element = {<Pages />}/>
    <Route path='contact' element = {<Contact />}/>
   </Route>
   )
   )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
