import { useState,useEffect } from 'react';


export const useLogin = () => {

    const [form, setForm] = useState({
        email: '',
        pass: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        pass: '',
        general: '',
    });
    const [login, setEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        setEmail(storedEmail);
    }, []);
       // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.clear()   // o localStorage.removeItem("email") si solo quieres borrar el email
    location.href="/"
    
  }
    // Validación de campos
    const validate = () => {
        const newErrors = {};

        if (!form.email.trim()) {
            newErrors.email = 'El correo es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'El formato del correo no es válido.';
        }

        if (!form.pass.trim()) {
            newErrors.pass = 'La contraseña es obligatoria.';
        } else if (form.pass.length < 8) {
            newErrors.pass = 'La contraseña debe tener al menos 8 caracteres.';
        }

        setErrors(prev => ({ ...prev, ...newErrors, general: '' }));
        return Object.keys(newErrors).length === 0;
    };

    // Maneja el cambio en los inputs
    const handdleInputs = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '', general: '' })); // Limpia errores al escribir
    };

    // Maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        try {
            const res = await fetch("http://localhost:5004/api/usuario/login", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.pass
                })
            });

            const data = await res.json(); // Asumiendo que la respuesta es JSON

            if (res.ok) {
                console.log("Login exitoso");
                //guardo en localStorage el email para poder hacer peticion a través del email a la api y ver el rol
                localStorage.setItem("email", form.email); // Guarda el email en localStorage
                location.href = "/"
            } else {
                console.error("Error en las credenciales:", data.message || 'Error desconocido');
                setErrors(prev => ({ ...prev, general: data.message || 'Credenciales incorrectas' }));
            }

        } catch (error) {
            console.error("Error de red:", error.message);
            setErrors(prev => ({ ...prev, general: 'No se pudo conectar al servidor. Inténtalo más tarde.' }));
        }
    };


    return {
        handdleInputs,
        handleSubmit,
        form,
        setForm,
        errors,
        login,
        handleLogout
    };
};
