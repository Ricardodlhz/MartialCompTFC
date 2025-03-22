import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='border-red-300 bg-[#454545]'>

      <div className='flex items-center border'>
        <img src='./src/assets/Logotipo.jpg' className='mix-blend-multiply w-[70px]' alt='Logotipo' />
        <p className='font-[Quicksand] text-xl font-medium text-white'>MartialComp</p>
      </div>

      <div className='flex items-center'>
        <Link to={'/info/eventos'}><p>Eventos</p></Link>
        <Link to={'/info/federaciones'}><p>Federarme</p></Link>
        <Link to={'/info/comunidad'}><p>Comunidad</p></Link>
        <Link to={'perfil'}><p>Perfil</p></Link>
        {/* <img src="" alt="" /> Bandera del pais */}
      </div>
    </header>
  )
}

export default Header
