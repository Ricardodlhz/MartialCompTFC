import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
export const usePerfil = (email) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [nombre, setNombre] = useState([])
    const [Apellido, setApellido] = useState([])
    const [gym, setGym] = useState([])
    const [competicion, setCompeticion] = useState([])
    const [imageError, setImageError] = useState(false);
    const [idUsuario, setIdUsuario] = useState(null);

    const user = {
        id_usuario: idUsuario,
        name: nombre,
        apellido: Apellido,
        email: email,
        gym: gym,
        competition: competicion,
    };
    useEffect(() => {
        if (error || successMessage) {
            const timer = setTimeout(() => {
                setError(null)
                setSuccessMessage(null)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [error, successMessage])

    useEffect(() => { cargarDatos() }, [imagePreview])

    const cargarDatos = async () => {

        const api = await fetch("http://localhost:5004/api/usuario/" + user.email)
        const data = await api.json()
        setNombre(data.nombre)
        setApellido(data.apellido)
        recogerNombreGym(data.id_academia)
        competicionesApuntado(data.id)
        setIdUsuario(data.id);
        comprobarImagen(data.id)
        return data
    }
    const recogerNombreGym = async (id_academia) => {
        const api = await fetch("http://localhost:5004/api/gimnasios/" + id_academia)
        const data = await api.json()
        setGym(data.nombre_gimnasio)
        return data
    }
    const comprobarImagen = async (idUsuario) => {
        try {
            const response = await fetch(`http://localhost:5004/api/imagenes/usuario/${idUsuario}`)
            if (response.ok) {
                setImageError(true)
            } else {
                setImageError(false)
            }
        } catch (error) {
            setHasImage(false)
        }
    }

    const competicionesApuntado = async (idUsuario) => {

        const api = await fetch("http://localhost:5004/api/usuarioregistradoevento/" + idUsuario)
        const data = await api.json()

        setCompeticion(data.eventos)
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
                "http://localhost:5004/api/imagenes", // Cambia a tu endpoint real
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Error en la subida de la imagen.");
            }

            const data = await response.json();

            // setSuccessMessage("Imagen subida correctamente ");
            Swal.fire({
                title: "Imagen subida con éxito",
                icon: "success",
                draggable: true
            });
            console.log("Respuesta del servidor:", data);

        } catch (err) {
            // setError("Hubo un error al subir la imagen.");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo ha fallado, vuelve a intentarlo",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const borrarImagen = async (idUsuario) => {
        const api = await fetch("http://localhost:5004/api/imagenes")
        const data = await api.json()
        let id = data.find(dato => dato.id_usuario == idUsuario)
        console.log(idUsuario)
        if (data) {
            const borrarApi = await fetch("http://localhost:5004/api/imagenes/" + id.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',

                }
            })

            if (borrarApi.ok) {

                setTimeout(location.reload(), 2000)
                console.log("BORRADO")
            }
        }
        return data
    }


    // const cambiarContraseña=async(id)=>{
    //     console.log("EL ID ES : "+id)
    //     const api=await fetch(
    //     `http://localhost:5004/api/usuario/resetpass/${id}`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email: userEmail,
    //         password: generatedPassword,
    //       }),
    //     }
    //   )

    //   const data=await api.json()
    //   if(!api.ok){
    //     throw new Error("No se pudo resetear la contraseña.");
    //   }

    //   console.log(data.message)
    // }

    const cambiarContraseña = async (id) => {
        try {
            const { value: nuevaPassword } = await Swal.fire({
                title: 'Cambiar Contraseña',
                input: 'password',
                inputLabel: 'Nueva Contraseña',
                inputPlaceholder: 'Escribe la nueva contraseña',
                inputAttributes: {
                    autocapitalize: 'off',
                    autocorrect: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar',
                preConfirm: (password) => {
                    if (!password) {
                        Swal.showValidationMessage('La contraseña no puede estar vacía');
                    }
                    return password;
                }
            });

            if (nuevaPassword) {
                // Actualizar contraseña
                const putResponse = await fetch(`http://localhost:5004/api/usuario/resetpass/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ password: nuevaPassword })
                });

                if (putResponse.ok) {
                    Swal.fire({
                        title: 'Contraseña actualizada con éxito',
                        icon: 'success',
                        timer: 2000,
                        timerProgressBar: true
                    });
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                } else {
                    Swal.fire({
                        title: 'Error al actualizar contraseña',
                        icon: 'error'
                    });
                }
            }

        } catch (error) {
            console.error("Error al cambiar contraseña:", error);
            Swal.fire({
                title: 'Error al cambiar contraseña',
                icon: 'error'
            });
        }
    }
    return {
        imagePreview,
        uploading,
        error,
        successMessage,
        handleImageChange,
        user,
        setImageError,
        imageError,
        borrarImagen,
        cambiarContraseña
    };
};
