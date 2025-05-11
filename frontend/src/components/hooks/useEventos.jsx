import React from 'react'
import { useEffect, useState } from 'react'

export const useEventos = () => {
  const [datos, setDatos] = useState([])

  const peticionApiDatosEvento = async () => {
    const api = await fetch("http://localhost:5001/api/eventos")
    const data = await api.json()
    setDatos(data)
    console.log(data)
    return data
  }

  useEffect(() => { peticionApiDatosEvento() }, [])
  const Submitborrar = (id, nombre) => {
    console.log("El id recogido es: " + id)
    borrarEvento(id, nombre)
  }
  const borrarEvento = async (id, nombre) => {
    const respuesta = await fetch(`http://localhost:5001/api/eventos/${id}`, {
      method: 'DELETE'
    })

    if (respuesta.ok) {
      console.log("borrado")
      location.reload()
      alert("Evento " + nombre + " borrado correctamente")
    }
  }


  const submitRegistrarse = async (email, id_evento) => {
    console.log("Email: " + email)
    console.log("ID: " + id_evento)
    registrarseEvento(email, id_evento)
  }

  const registrarseEvento = async (email, id_evento) => {
    const response = await fetch(`http://localhost:5001/api/usuario/${email}`);
    const data = await response.json();
    console.log(data.id)

    //hago el post 
    const postApi = await fetch("http://localhost:5001/api/usuarioregistradoevento", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id_usuario: data.id,
        id_evento: id_evento
      })
    })

    const dataPost=await postApi.json()
  }

  //Funcionar para comprobar si está o no ya registrado

  return { datos, Submitborrar, registrarseEvento, submitRegistrarse }
}