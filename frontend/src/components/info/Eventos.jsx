import React from 'react'
import { useEffect,useState } from 'react'
import {useEventos} from './../hooks/useEventos'
const Eventos = () => {
 
  const {datos}=useEventos()
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
          <p className="text-gray-600 text-sm mb-1">{dato.fecha_evento}</p>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">Cargando Datos...</p>
    )}
  </div>
  
  )
}

export default Eventos
