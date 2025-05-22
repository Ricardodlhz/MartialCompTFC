import { useEffect, useState } from 'react'

export const useRegister = () => {
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        rol:"",
        nombre: "",
        apellido: "",
        fecha_nac: "",
        localidad: "",
        provincia: "",
        cp: "",
        num_tlf: "",
        email: "",
        pass: "",
        id_academia: "", // aquí guardamos el id del gimnasio
    })

    const [gimnasios, setGim] = useState([])

    const handdleInputs = (event) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!validateForm()) return;
        console.log(form)
        console.log("ID: "+form.id_academia)
        peticionApi()
    }

    useEffect(() => {
        peticionApiGimnasio()
    }, [])

    const peticionApiGimnasio = async () => {
        try {
            const api = await fetch("http://localhost:5004/api/gimnasios")
            const data = await api.json()
            console.log(data)
            setGim(data)
        } catch (error) {
            console.error("Error al obtener gimnasios", error)
        }
    }

    const peticionApi = async () => {
        const body = {
            rol:form.rol,
            nombre: form.nombre,
            apellido: form.apellido,
            fecha_nac: form.fecha_nac,
            localidad: form.localidad,
            provincia: form.provincia,
            cp: form.cp,
            num_tlf: form.num_tlf,
            email: form.email,
            password: form.pass,
            id_academia: form.id_academia
        }

        try {
            const post = await fetch("http://localhost:5004/api/usuario", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })

            const text = await post.text()
            console.log("Respuesta del servidor:", text)

            if (post.ok) {
                console.log("Registrado correctamente")
                location.href="/"
                // navigate("/home", { replace: true });
            } else {
                console.log("Error al registrarse " + post.status)
            }
        } catch (error) {
            console.error("Error en la petición de registro", error)
        }
    }

    const validateForm = () => {
        const newErrors = {};
      
        if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!form.apellido.trim()) newErrors.apellido = "El apellido es obligatorio";
        if (!form.rol) newErrors.rol = "Selecciona un perfil";
        if (!form.fecha_nac) newErrors.fecha_nac = "La fecha de nacimiento es obligatoria";
        if (!form.localidad.trim()) newErrors.localidad = "La localidad es obligatoria";
        if (!form.provincia.trim()) newErrors.provincia = "La provincia es obligatoria";
        if (!form.cp.trim()) newErrors.cp = "El código postal es obligatorio";
        if (!form.num_tlf.trim() || !/^\d{8,15}$/.test(form.num_tlf)) newErrors.num_tlf = "Número inválido";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";
        if (!form.pass || form.pass.length < 6) newErrors.pass = "La contraseña debe tener al menos 6 caracteres";
        if (!form.id_academia) newErrors.id_academia = "Selecciona un gimnasio";
      
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
      

    return { handdleInputs, handleSubmit, form, setForm, gimnasios,errors }
}
