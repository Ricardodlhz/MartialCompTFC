import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Eventos from './components/Eventos.jsx'
import InfoLayaout from './components/InfoLayaout.jsx'
import Federaciones from './components/Federaciones.jsx'
import Comunidad from './components/Comunidad.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
      <Route path='/' index element={<App></App>}></Route>


      <Route path='/info' element={<InfoLayaout></InfoLayaout>}>
        <Route path='eventos' element={<Eventos></Eventos>}></Route>
        <Route path='federaciones' element={<Federaciones></Federaciones>}></Route>
        <Route path='comunidad' element={<Comunidad></Comunidad>}></Route>
      </Route>


    </Routes>
  </BrowserRouter>
)
