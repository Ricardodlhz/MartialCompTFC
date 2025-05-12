import { useState, useEffect } from "react";

export const usePerfil = (email) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [nombre, setNombre] = useState([])
    const [gym, setGym] = useState([])
    const user = {
        id_usuario: "",
        name: nombre,
        email: email,
        gym: gym,
        competition: "Campeonato Nacional de Fisicoculturismo 2025",
    };
    useEffect(() => { cargarDatos() }, [email])

    const cargarDatos = async () => {
        const api = await fetch("http://localhost:5001/api/usuario/" + user.email)
        const data = await api.json()
        setNombre(data.nombre)
        recogerNombreGym(data.id_academia)
        return data
    }
    const recogerNombreGym=async(id_academia)=>{
        const api=await fetch("http://localhost:5001/api/gimnasios/"+id_academia)
        const data = await api.json()
        setGym(data.nombre_gimnasio)
        return data
    }
    const handleImageChange = (e, userId) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(file);
            uploadImage(file, userId);
            borrarImagen(userId)
        }
    };

    const uploadImage = async (file, userId) => {
        const formData = new FormData();
        formData.append("imagen", file);
        formData.append("id_usuario", userId);
        console.log(file, userId)
        try {
            setUploading(true);
            setError(null);
            setSuccessMessage(null);

            const response = await fetch(
                "http://localhost:5001/api/imagenes", // Cambia a tu endpoint real
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Error en la subida de la imagen.");
            }

            const data = await response.json();

            setSuccessMessage("Imagen subida correctamente 🎉");
            console.log("Respuesta del servidor:", data);
        } catch (err) {
            setError("Hubo un error al subir la imagen.");
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const borrarImagen = async (idUsuario) => {
        const api = await fetch("http://localhost:5001/api/imagenes")
        const data = await api.json()
        let id = data.find(dato => dato.id_usuario == idUsuario)
        if (data) {
            const borrarApi = await fetch("http://localhost:5001/api/imagenes/" + id.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',

                }
            })

            if (borrarApi.ok) {
                location.reload()
                console.log("BORRADO")
            }
        }
        return data
    }
    return {
        imagePreview,
        uploading,
        error,
        successMessage,
        handleImageChange,
        user
    };
};
