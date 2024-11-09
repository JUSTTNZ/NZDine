
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Footer } from './footer'
import { Contact } from './contact/contact'
import { Menu } from './menu/menu'
import { Service } from './services/services'
import { Homepage } from './home/home'
import { Booking } from './pages/Booking'
import AboutUs from './AboutUs/AboutUs'
import OurTeam from './pages/OurTeam'



function App() {
  return (
      <div>
      <Router >
      
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/Booking' element={<Booking/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/ourTeam' element={<OurTeam/>}/>
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
