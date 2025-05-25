import React from 'react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
export const useEventos = () => {
  const [datos, setDatos] = useState([])
  const [selectedDeporte, setSelectedDeporte] = useState("")
  const [id_deporte_evento, setIdDeporte] = useState([])
  const [id_usu, setIdUsu] = useState([])
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
  const SubmitModificar = (id) => {
    console.log("Editar evento con id: " + id);
    modificarEvento(id);
  }

 const modificarEvento = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:5004/api/eventos/${id}`);
    const evento = await respuesta.json();

    const { value: formValues } = await Swal.fire({
      title: 'Modificar Evento',
      html:
        `<input id="nombre" class="swal2-input" placeholder="Nombre" value="${evento.nombre_evento}">` +
        `<input id="fecha" class="swal2-input" type="date" value="${evento.fecha_evento.slice(0, 10)}">` +
        `<label style="margin-top:10px;">Imagen:</label>` +
        `<input id="imagen" class="swal2-file" type="file" accept="image/*">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nombre_evento: document.getElementById('nombre').value,
          fecha_evento: document.getElementById('fecha').value,
          imagen: document.getElementById('imagen').files[0]
        }
      }
    });

    if (formValues) {
      let nombreImagenFinal = evento.imagen; // Por defecto dejamos la actual

      // Si hay imagen nueva seleccionada
      if (formValues.imagen) {
        console.log(id)
        // Obtener datos de la imagen actual asociada al evento
        const imagenActualResponse = await fetch(`http://localhost:5004/api/imagenesevento/usuario/${id}`);
        if (imagenActualResponse.ok) {
          
          
         
          // Borrar imagen actual
          const deleteResponse = await fetch(`http://localhost:5004/api/imagenesevento/${id}`, {
            method: 'DELETE'
          });

          if (!deleteResponse.ok) {
            Swal.fire({
              title: 'Error al borrar imagen anterior',
              icon: 'error'
            });
            return;
          }
        }

        // Subir nueva imagen con id_evento
        const formData = new FormData();
        formData.append("imagen", formValues.imagen);
        formData.append("id_evento", id); // Aquí añadimos el id_evento

        const uploadResponse = await fetch("http://localhost:5004/api/imagenesevento/", {
          method: "POST",
          body: formData
        });

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json();
          nombreImagenFinal = uploadResult.nombreImagen || uploadResult.filename || uploadResult.url;
        } else {
          Swal.fire({
            title: 'Error al subir imagen nueva',
            icon: 'error'
          });
          return;
        }
      }

      // Preparar datos de actualización del evento
      const dataEvento = {
        nombre_evento: formValues.nombre_evento,
        fecha_evento: formValues.fecha_evento,
        // imagen: nombreImagenFinal
      };
      
      // Actualizar evento
      const putResponse = await fetch(`http://localhost:5004/api/eventos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataEvento)
      });

      if (putResponse.ok) {
        Swal.fire({
          title: 'Evento actualizado con éxito',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true
        });
        setTimeout(() => {
          location.reload();
        }, 2000);
      } else {
        Swal.fire({
          title: 'Error al actualizar evento',
          icon: 'error'
        });
      }
    }

  } catch (error) {
    console.error("Error al modificar evento:", error);
    Swal.fire({
      title: 'Error al cargar datos del evento',
      icon: 'error'
    });
  }
}


  return { datos, Submitborrar, submitRegistrarse, handleDeporteChange, selectedDeporte, SubmitModificar }
}