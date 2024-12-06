import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sobre_nosotros from './components/Sobre_nosotros'
import Navbar from './components/Navbar'
import Productos from './components/Produtos'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <audio autoPlay loop>
        <source src="/song/theme.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/info' element={<Sobre_nosotros/>}>
        </Route>
        
        <Route path='/productos' element={<Productos/>}>
        </Route>

        <Route path='/home' element={<Home/>}>
        </Route>

        <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
      </Routes>
    </Router>
    </>
  )
}


export default App
