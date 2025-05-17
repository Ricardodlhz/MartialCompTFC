import React from 'react'
import { useEffect,useState } from 'react'
import {useEventos} from './../hooks/useEventos'
import { useRols } from '../hooks/useRol'

const Eventos = () => {
  //Recojo el rol, y en caso de ser un administrador puede borrar el evento
  const {rol,email}=useRols()
  const {datos,Submitborrar,registrarseEvento,submitRegistrarse}=useEventos()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {datos.length > 0 ? (
      datos.map((dato, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition hover:scale-[1.02] hover:shadow-xl"
        >
          <img
            src={`http://localhost:5001/api/imagenesevento/usuario/${dato.id}`}
            alt={dato.nombre_evento}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{dato.nombre_evento}</h3>
          <p className="text-gray-600 text-sm mb-1">{dato.fecha_evento.slice(0, 10)}</p>
          {rol === "Admin" && (

              <button onClick={()=>Submitborrar(dato.id,dato.nombre_evento)} className='bg-[#d1d1d1] hover:bg-[#e7e7e7] hover:cursor-pointer mt-5 rounded-lg p-2 mr-5'>
                Borrar
              </button>
            
          )}

           {rol === "Competidor" && (

              <button onClick={()=>submitRegistrarse(email,dato.id)} className='bg-[#d1d1d1] hover:bg-[#e7e7e7] hover:cursor-pointer mt-5 rounded-lg p-2 mr-5'>
                Incribirse en el evento
              </button>
            
          )}
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">Cargando Datos...</p>
    )}
  </div>
  
  )
}

export default Eventos
