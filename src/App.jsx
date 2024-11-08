
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/home/home'
import  About from './pages/about/about'
import Pages from './pages/pages/pages'
import { Footer } from './footer'
import { Contact } from './contact/contact'
import { Menu } from './menu/menu'
import { Service } from './services/services'


function App() {
  return (
      <div>
      <Router >
      
          <Routes>
            <Route path='/' element={<Homepage />}   />
            <Route path='/about' element={<About />}   />
            <Route path='/contact' element={<Contact />}   />
            <Route path='/menu' element={<Menu />}   />
            <Route path='/pages' element={<Pages />}   />
            <Route path='/service' element={<Service />}   />
           
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App
