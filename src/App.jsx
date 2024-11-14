/* eslint-disable react/prop-types */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import { Footer } from './footer'
import { Contact } from './contact/contact'
import { Menu } from './menu/menu'
import { Service } from './services/services'
import { Homepage } from './home/home'
import { Booking } from './pages/Booking'
import AboutUs from './AboutUs/AboutUs'
import OurTeam from './pages/OurTeam'
import Testimony from './pages/Testimony'
import { Navbar } from './component/navbar'
import { useEffect, useState } from 'react'
import Back from './component/Back'



function App() {
  
const Loader = () => (
<div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="animate-spin rounded-full border-t-2 border-b-2 border-[#FEA116] w-12 h-12" >
        <span className="sr-only">Loading...</span>
    </div>
</div>
  
  
  );
  
  const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      setIsLoading(true); 
      const delayLoader = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(delayLoader);
    }, [location]);
  
    return isLoading ? <Loader /> : children;
  };

  return (
      <div>
      
      <Router >
      <Navbar  />
      <Layout>
          <Routes>
            <Route path='/'  element={<Homepage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/Booking' element={<Booking/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/team' element={<OurTeam/>}/>
            <Route path='/testimonial' element={<Testimony/>}/>
          </Routes>
          </Layout>
          <Footer   />
          <Back />
        </Router>
        
      </div>
  )
}

export default App
