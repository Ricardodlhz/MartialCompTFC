import React from 'react'
import { useEffect, useState } from 'react'

export const useFederacion = () => {
  const [deportes, setDeportes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)

  useEffect(() => {
    peticionApiDeportes()
  }, [])


  const peticionApiDeportes = async () => {
    const api = await fetch("http://localhost:5004/api/deportes")
    const data = await api.json()
    console.log(data)
    setDeportes(data)
  }



  const federarUsuario = async (email, nombreDeporte) => {
    setLoading(true)
    setError(null)
    setResponse(null)

    try {
      // 1️⃣ Obtener ID del deporte por nombre
      const resDeportes = await fetch('http://localhost:5004/api/deportes')
      const apiIdUser = await fetch("http://localhost:5004/api/usuario/" + email)
      const dataUser = await apiIdUser.json()

      if (!resDeportes.ok) throw new Error('Error al obtener los deportes')
      const deportes = await resDeportes.json()

      const deporteSeleccionado = deportes.find(
        (deporte) => deporte.nombre_deporte === nombreDeporte
      )
      console.log("Id deporte" + deporteSeleccionado.id)
      console.log("Id persona" + dataUser.id)
      if (!deporteSeleccionado) {
        throw new Error('Deporte no encontrado')
      }

      // 2️⃣ Enviar POST con email e id_deporte
      const resFederacion = await fetch('http://localhost:5004/api/federados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_usuario: dataUser.id,
          id_deporte: deporteSeleccionado.id
        })
      })

      if (!resFederacion.ok) {
        const errorData = await resFederacion.json()
        throw new Error(errorData.message || 'Error al federar usuario')
      }

      const data = await resFederacion.json()
      setResponse(data)
       Swal.fire({
                title: "Federado con éxito",
                icon: "success",
                draggable: true
            });
      return dataUser
    } catch (err) {
      setError(err.message || 'Error en la solicitud')
    } finally {
      setLoading(false)
    }
  }

  return {
    federarUsuario,
    loading,
    error,
    response,
    deportes
  }
}