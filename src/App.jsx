
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Footer } from './footer'
import { Contact } from './contact/contact'
import { Menu } from './menu/menu'
import { Service } from './services/services'
import { Homepage } from './home/home'


function App() {
  return (
      <div>
      <Router >
      
          <Routes>
            <Route path='/' element={<Homepage />}   />
            
            <Route path='/contact' element={<Contact />}   />
            <Route path='/menu' element={<Menu />}   />
       
            <Route path='/service' element={<Service />}   />
           
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
