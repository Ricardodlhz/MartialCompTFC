import React from 'react'
import { Link } from 'react-router-dom'
import imagen from './../../assets/logotipo.png'
import bandera from './../../assets/españa.png'
const HeaderInfo = () => {
  return (
    <header className='border-red-300  bg-[black] p-2 '>

    <div className="container flex justify-between items-center  m-auto">
    <div className='flex items-center '>
     
       <img src={imagen} className='  w-[70px]' alt='Logotipo' />
       <a href='/' className='font-[Quicksand] text-xl font-medium text-white'>MartialComp</a>
     </div>
     <i className="fa-solid fa-bars md:!hidden text-white"></i>

     <div className='hidden md:flex gap-12 items-center'>
       <Link to={'/info/eventos'}><p className='text-white font-[Quicksand]'>Eventos</p></Link>
       <Link to={'/info/federaciones'}><p className='text-white font-[Quicksand]'>Federarme</p></Link>
       <Link to={'/info/comunidad'}><p className='text-white font-[Quicksand]'>Comunidad</p></Link>
       <Link to={'/info/login'}><p className='text-white font-[Quicksand]'>Login</p></Link>
       <img src={bandera} alt="" className='w-[20px]'/> 
     </div>
    </div>
   </header>
  )
}

export default HeaderInfo
