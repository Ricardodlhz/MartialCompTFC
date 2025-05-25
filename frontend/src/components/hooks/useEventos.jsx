import React from 'react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
export const useEventos = () => {
  const [datos, setDatos] = useState([])
  const [selectedDeporte, setSelectedDeporte] = useState("")
  const [id_deporte_evento,setIdDeporte]=useState([])
  const [id_usu,setIdUsu]=useState([])
  const peticionApiDatosEvento = async () => {
    const api = await fetch("http://localhost:5004/api/eventos")
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
    const respuesta = await fetch(`http://localhost:5004/api/eventos/${id}`, {
      method: 'DELETE'
    })

    if (respuesta.ok) {
      console.log("borrado")
      Swal.fire({
        title: "Evento borrado con éxito",
        icon: "success",
        draggable: true
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
      // alert("Evento " + nombre + " borrado correctamente")
    }
  }

  // const recogerIdDeporteEvento=async(id_evento)=>{
  //   //recojo el id del deporte
  //     const api=await fetch('http://localhost:5004/api/eventos/'+id_evento)
  //     const data=await api.json()
  //     console.log("Recgoer id_evento: "+data.id_deporte)
  //     setIdDeporte(data.id_deporte)

  //     peticionFederado()
  //     return data
  // }

  // const peticionFederado=async()=>{
  //   const api=await fetch("http://localhost:5004/api/federados/"+id_usu)
  //   const data=await api.json()
    
  //   return data
  // }
  // const submitRegistrarse = async (email, id_evento) => {
  //   console.log("Email: " + email)
  //   console.log("ID: " + id_evento)
  //   registrarseEvento(email, id_evento)
  // }

  // const registrarseEvento = async (email, id_evento) => {
  //   const response = await fetch(`http://localhost:5004/api/usuario/${email}`);
  //   const data = await response.json();
  //   console.log(data.id)
  //   setIdUsu(data.id)
  //   //hago el post 
  //   const postApi = await fetch("http://localhost:5004/api/usuarioregistradoevento", {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       id_usuario: data.id,
  //       id_evento: id_evento
  //     })
  //   })
  //   //Comprobar primero si está federado en ese deporte para poder hacer la inscripción.
  //   recogerIdDeporteEvento(id_evento)
  //   // if (postApi.ok) {
      
  //   //   Swal.fire({
  //   //     title: "Inscripción realizada éxito",
  //   //     icon: "success",
  //   //     draggable: true
  //   //   });
  //   // }
  //   // const dataPost = await postApi.json()
  // }


  const submitRegistrarse = async (email, id_evento) => {
  console.log("Email: " + email)
  console.log("ID Evento: " + id_evento)

  try {
    // Obtener usuario
    const usuarioResponse = await fetch(`http://localhost:5004/api/usuario/${email}`);
    const usuarioData = await usuarioResponse.json();
    const id_usuario = usuarioData.id;
    console.log("ID Usuario: " + id_usuario)

    // Obtener deporte del evento
    const eventoResponse = await fetch(`http://localhost:5004/api/eventos/${id_evento}`);
    const eventoData = await eventoResponse.json();
    const id_deporte = eventoData.id_deporte;
    console.log("ID Deporte del Evento: " + id_deporte)

    // Obtener deportes federados del usuario
    const federadosResponse = await fetch(`http://localhost:5004/api/federados/${id_usuario}`);
    const federadosData = await federadosResponse.json();
    console.log("Deportes Federados:", federadosData.deportesFederados);

    // Verificar si está federado en ese deporte
    const estaFederado = federadosData.deportesFederados.some(deporte => deporte.id === id_deporte);
    console.log("¿Está federado en este deporte?: ", estaFederado);

    if (estaFederado) {
      // Si está federado, inscribirlo en el evento
      const postApi = await fetch("http://localhost:5004/api/usuarioregistradoevento", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id_usuario: id_usuario,
          id_evento: id_evento
        })
      });

      if (postApi.ok) {
        Swal.fire({
          title: "Inscripción realizada con éxito",
          icon: "success",
          draggable: true
        });
      } else {
        Swal.fire({
          title: "Error al inscribirse",
          icon: "error",
          draggable: true
        });
      }
    } else {
      // Si no está federado en ese deporte
      Swal.fire({
        title: "No estás federado en este deporte",
        icon: "error",
        draggable: true
      });
    }

  } catch (error) {
    console.error("Error en el proceso de inscripción:", error);
    Swal.fire({
      title: "Error inesperado",
      icon: "error",
      draggable: true
    });
  }
}

  const peticionEventosPorDeporte = async (id_deporte) => {
    const res = await fetch(`http://localhost:5004/api/eventos/evento_deporte/${id_deporte}`)
    const data = await res.json()
    setDatos(data)
  }
  //Para cargar eventos de un determinado deporte
  const handleDeporteChange = (e) => {
    const idDeporte = e.target.value
    setSelectedDeporte(idDeporte)
    if (idDeporte !== "") {
      peticionEventosPorDeporte(idDeporte)
    } else {
      peticionApiDatosEvento()
    }
  }

  return { datos, Submitborrar, submitRegistrarse, handleDeporteChange, selectedDeporte }
}