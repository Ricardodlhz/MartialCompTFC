import { useState } from 'react'

//Hook personalizado para el registro
export const useRegister = () => {

    const [form, setForm] = useState({
        nombre:"",
        apellido:"",
        fecha_nac:"",
        localidad:"",
        provincia:"",
        cp:"",
        num_tlf:"",
        email: "",
        pass: "",
        id_academia:"",
        
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
            nombre:form.nombre,
            apellido:form.apellido,
            fecha_nac:form.fecha_nac,
            localidad:form.localidad,
            provincia:form.provincia,
            cp:form.cp,
            num_tlf:form.num_tlf,
            email: form.email,
            password: form.pass,
            id_academia:form.id_academia
            //resto de campos
        }
        const post = await fetch("http://localhost:5001/api/usuario", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json", // Indica que estás enviando JSON
            },
            body: JSON.stringify(body)
        })

        if (post.ok) {
            console.log("Has hecho bien el login")
            // navigate("/home", { replace: true });

        } else {
            console.log("No esta correcto las credenciales")
        }
    }


    return { handdleInputs, handleSubmit, form, setForm };
}




