import React from 'react'
import {Link} from 'react-router-dom'
const Main = () => {
  return (
    <>
      <div className='w-full h-[400px] lg:h-[700px] bg-[url(./src/assets/fondo.jpg)] bg-cover bg-center'>
        

        <div className='border text-wrap pt-[200px]  lg:pt-[300px] text-center'>
          <h1 class="cssanimation leRotateSkateInRight sequence text-4xl font-bold font-[Roboto] text-white"> Nos preocupamos por impulsar las competiciones y  </h1>
          <h2 class="cssanimation leRotateSkateInRight sequence text-4xl font-bold font-[Roboto] text-white">a sus atletas con la mejor experiencia posible.</h2>
          <Link to={'/info/crearEvento'}><button>Crear Evento</button></Link>
          
        </div>


      </div>

      <div className='container border m-auto mt-5'>


      </div>
    </>

  )
}

export default Main
