import React from 'react'
import { useEffect, useState } from 'react'

export const useTabla = () => {
    const [usuarios, setUsuarios] = useState([])


    const cargarDatos = async () => {
        const api = await fetch("http://localhost:5004/api/usuario/")
        const data = await api.json()
        setUsuarios(data)
        console.log(usuarios)
        return data
    }

    useEffect(() => { cargarDatos() }, [usuarios])

    const borrarUsuario = async (id) => {
        const api = await fetch(`http://localhost:5004/api/usuario/${id}`, {
            method: 'DELETE'
        });

        const data = await api.json();
       
        

        return data

    }
    return { usuarios,borrarUsuario }
}