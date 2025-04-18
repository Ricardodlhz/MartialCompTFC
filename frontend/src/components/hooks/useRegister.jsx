import { useState } from 'react'

//Hook personalizado para el registro
export const useRegister = () => {

    const [form, setForm] = useState({
        email: "",
        pass: "",

        //Resto de campos
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


    const peticionApi=async()=>{
        let body={
            email:form.email,
            password:form.pass
            //resto de campos
        }
        const post=await fetch("http://localhost:5001/api/usuario",{
            method:'POST',
            headers: {
                "Content-Type": "application/json", // Indica que estás enviando JSON
            },
            body:JSON.stringify(body)
        })
      
        if(post.ok){
            console.log("Has hecho bien el login")
            // navigate("/home", { replace: true });
        
        }else{
            console.log("No esta correcto las credenciales")
        }
      }


      return { handdleInputs, handleSubmit, form, setForm };
    }



    
