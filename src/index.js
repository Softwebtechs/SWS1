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
import Electronic from './components/Services/Dropdown-content/Electronic.jsx'
import Building from './components/Services/Dropdown-content/Building.jsx';
import Power from './components/Services/Dropdown-content/Power.jsx';
import Industry from './components/Services/Dropdown-content/Industry.jsx';
import Heavy from './components/Services/Dropdown-content/Heavy.jsx';
import Oil from './components/Services/Dropdown-content/Oil.jsx';
import Auto from './components/Services/Dropdown-content/Auto.jsx';
import Medic from './components/Services/Dropdown-content/Medic.jsx';
import Construction from './components/Services/Construction.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='projects' element={<Projects />} />
      <Route path='blog' element={<Blog />} />
      <Route path='pages' element={<Pages />} />
      <Route path='contact' element={<Contact />} />
      <Route path='electronic' element={<Electronic />} />
      <Route path='bm' element={<Building />} />
      <Route path='ps' element={<Power />} />
      <Route path='it' element={<Industry />} />
      <Route path='hm' element={<Heavy />} />
      <Route path='oil' element={<Oil />} />
      <Route path='ap' element={<Auto />} />
      <Route path='me' element={<Medic />} />
      <Route path='ct' element={<Construction />} />


    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
