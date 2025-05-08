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



    return {datos}
}