import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Eventos from './components/info/Eventos.jsx'
import InfoLayaout from './components/InfoLayaout.jsx'
import Federaciones from './components/info/Federaciones.jsx'
import Comunidad from './components/info/Comunidad.jsx'
import CrearEvento from './components/info/CrearEvento.jsx'
import Login from './components/perfil/Login.jsx'
import Register from './components/perfil/Register.jsx'
import Perfil from './components/perfil/Perfil.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      
      <Route path='/' index element={<App></App>}></Route>


      <Route path='/info' element={<InfoLayaout></InfoLayaout>}>
        <Route path='eventos' element={<Eventos></Eventos>}></Route>
        <Route path='federaciones' element={<Federaciones></Federaciones>}></Route>
        <Route path='comunidad' element={<Comunidad></Comunidad>}></Route>
        <Route path='crearEvento' element={<CrearEvento></CrearEvento>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='registrarse' element={<Register></Register>}></Route>
        <Route path='perfil' element={<Perfil></Perfil>}></Route>
      </Route>


    </Routes>
  </BrowserRouter>
)
