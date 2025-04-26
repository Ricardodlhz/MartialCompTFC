import { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

//Hook personalizado
export const useLogin = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        pass: "",
    })

    const handdleInputs = (event) => {
        const { name, value } = event.target
        setForm({
            ...form, [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        peticionApi()
    }


    const peticionApi = async () => {



        let body = {
            email: form.email,
            password: form.pass
        }
        const post = await fetch("http://localhost:5001/api/usuario/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", // Indica que estás enviando JSON
            },
            body: JSON.stringify(body)
        })
        const text = await post.text(); // Obtiene la respuesta como texto
        console.log("Respuesta del servidor:", text);
        if (post.ok) {
            console.log("Has hecho bien el login")
            window.location.href = "/" // Esto hace un refresh completo
        } else {
            console.log("No está correcto las credenciales: " + post.message)
        }

    }

    return { handdleInputs, handleSubmit, form, setForm };
}