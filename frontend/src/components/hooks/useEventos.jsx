import React from 'react'
import { useEffect,useState } from 'react'

export const useEventos=()=>{
    const [datos,setDatos]=useState([])

    const peticionApiDatosEvento=async()=>{
      const api=await fetch("http://localhost:5001/api/eventos")
      const data=await api.json()
      setDatos(data)
      console.log(data)
      return data
    }
    
    useEffect(()=>{peticionApiDatosEvento()},[])
    const Submitborrar=(id,nombre)=>{
        console.log("El id recogido es: "+id)
        borrarEvento(id,nombre)
    }
    const borrarEvento=async(id,nombre)=>{
      const respuesta = await fetch(`http://localhost:5001/api/eventos/${id}`, {
        method: 'DELETE'
      })

      if(respuesta.ok){
        console.log("borrado")
        location.reload()
        alert("Evento "+nombre+" borrado correctamente")
      }
    }

    return {datos,Submitborrar}
}