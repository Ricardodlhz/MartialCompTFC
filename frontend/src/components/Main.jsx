import React from 'react'
import { Link } from 'react-router-dom'
import SectionDeportes from './main/SectionDeportes'

import SectionPatrocinadores from './main/SectionPatrocinadores'
import { useRols } from './hooks/useRol'

const Main = () => {
  const { rol } = useRols()
 
  return (
    <>
      <div className='w-full h-[400px] lg:h-[700px] bg-[url(./src/assets/fondo.jpg)] bg-cover bg-center'>


        <div className=' text-wrap pt-[150px] sm:pt-[150px]  lg:pt-[300px] text-center'>
          <h1 class=" text-xl  md:text-3xl lg:text-4xl font-bold font-[Roboto] text-white"> Nos preocupamos por impulsar las competiciones y  </h1>
          <h2 class=" sequence text-xl  md:text-3xl lg:text-4xl font-bold font-[Roboto] text-white">a sus atletas con la mejor experiencia posible.</h2>

          {(rol === "Entrenador" || rol === "Admin") && (
            <Link to={'/info/crearEvento'}>
              <button className='bg-[#d1d1d1] hover:bg-[#e7e7e7] hover:cursor-pointer mt-5 rounded-lg p-2 mr-5'>
                Crear Evento
              </button>
            </Link>
          )}

          <Link to={'/info/federaciones'}><button className=' bg-[#d1d1d1] hover:bg-[#e7e7e7] hover:cursor-pointer mt-5  rounded-lg p-2 lg:mr-[500px]'>Federarme</button></Link>
        </div>


      </div>
      <div className="container   m-auto mt-10">
        <h2 class=" text-xl  md:text-3xl lg:text-4xl font-bold font-[Roboto] text-white">Elige el deporte que quieras para realizar tu competición  <i class="fa-solid fa-arrow-down text-xl bg-[black] rounded-xl p-2 animate-bounce"></i></h2>
        <SectionDeportes></SectionDeportes>
        <SectionPatrocinadores></SectionPatrocinadores>
      </div>

    </>

  )
}

export default Main
