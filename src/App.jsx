
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Homepage } from './home/home'

function App() {


  return (

<div>
<Router >
    <Routes>
      <Route path='/' element={<Homepage />}   />
    </Routes>
   </Router>
</div>
  )
}

export default App
