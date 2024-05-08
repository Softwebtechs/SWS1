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
import Shortcodes from './components/Shortcodes/Shortcodes.jsx';
import Electronic from './components/Services/Dropdown-content/Electronic.jsx'
import Building from './components/Services/Dropdown-content/Building.jsx';
import Power from './components/Services/Dropdown-content/Power.jsx';
import Industry from './components/Services/Dropdown-content/Industry.jsx';
import Heavy from './components/Services/Dropdown-content/Heavy.jsx';
import Oil from './components/Services/Dropdown-content/Oil.jsx';
import Auto from './components/Services/Dropdown-content/Auto.jsx';
import Medic from './components/Services/Dropdown-content/Medic.jsx';
import Construction from './components/Services/Construction.jsx';
import Set1 from './components/Shortcodes/Dropdown/Set1/Set1.jsx';
import Set2 from './components/Shortcodes/Dropdown/Set2/Set2.jsx';
import Set3 from './components/Shortcodes/Dropdown/Set3/Set3.jsx';
import Set4 from './components/Shortcodes/Dropdown/Set4/Set4.jsx';
import ButtonLists from './components/Shortcodes/Dropdown/Set1/Set1Dd/ButtonLists.jsx';
import Carousel from './components/Shortcodes/Dropdown/Set1/Set1Dd/Carousel/Carousel.jsx';
import Columns from './components/Shortcodes/Dropdown/Set1/Set1Dd/Columns.jsx';
import Contactinfo from './components/Shortcodes/Dropdown/Set1/Set1Dd/Contactinfo/Contactinfo.jsx';
import Custompost from './components/Shortcodes/Dropdown/Set2/Set2Dd/Custompost/Custompost.jsx';
import FancyBox from './components/Shortcodes/Dropdown/Set2/Set2Dd/FancyBox/FancyBox.jsx';
import IconBox from './components/Shortcodes/Dropdown/Set2/Set2Dd/IconBox/IconBox.jsx';
import ImageCaption from './components/Shortcodes/Dropdown/Set2/Set2Dd/ImageCaption/ImageCaption.jsx';
import NumberCounter from './components/Shortcodes/Dropdown/Set3/NumberCounter/NumberCounter.jsx';
import Pricing from './components/Shortcodes/Dropdown/Set3/Pricing/Pricing.jsx';
import ProgressBar from './components/Shortcodes/Dropdown/Set3/ProgressBar/ProgressBar.jsx';
import TabToggle from './components/Shortcodes/Dropdown/Set3/TabToggle/TabToggle.jsx';
import TestimonialCarousel from './components/Shortcodes/Dropdown/Set4/TestimonialCarousel/TestimonialCarousel.jsx';
import Testimonial from './components/Shortcodes/Dropdown/Set4/Testimonial/Testimonial.jsx';
import Timeline from './components/Shortcodes/Dropdown/Set4/Timeline/Timeline.jsx';
import Typography from './components/Shortcodes/Dropdown/Set4/Typography/Typography.jsx';

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
      <Route path='shortcodes' element={<Shortcodes />} />
      <Route path='electronic' element={<Electronic />} />
      <Route path='bm' element={<Building />} />
      <Route path='ps' element={<Power />} />
      <Route path='it' element={<Industry />} />
      <Route path='hm' element={<Heavy />} />
      <Route path='oil' element={<Oil />} />
      <Route path='ap' element={<Auto />} />
      <Route path='me' element={<Medic />} />
      <Route path='ct' element={<Construction />} />
      <Route path='set1' element={<Set1 />} />
      <Route path='set2' element={<Set2 />} />
      <Route path='set3' element={<Set3 />} />
      <Route path='set4' element={<Set4 />} />
      <Route path='button' element={<ButtonLists />} />
      <Route path='carousel' element={<Carousel />} />
      <Route path='columns' element={<Columns />} />
      <Route path='contactinfo' element={<Contactinfo />} />
      <Route path='custom' element={<Custompost />} />
      <Route path='fancybox' element={<FancyBox />} />
      <Route path='icon' element={<IconBox />} />
      <Route path='imagecaption' element={<ImageCaption />} />
      <Route path='numbercounter' element={<NumberCounter />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='progress' element={<ProgressBar />} />
      <Route path='tabs' element={<TabToggle />} />
      <Route path='testimonialcarousel' element={<TestimonialCarousel />} />
      <Route path='testimonial' element={<Testimonial />} />
      <Route path='timeline' element={<Timeline />} />
      <Route path='typography' element={<Typography />} />



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
