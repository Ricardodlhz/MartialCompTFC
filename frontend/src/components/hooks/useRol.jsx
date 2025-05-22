import { useEffect, useState } from 'react';

export const useRols = () => {
  const [rol, setRol] = useState(null);
  const [id,setId]=useState([])
  const email = localStorage.getItem("email");

  const peticionApiEmail = async () => {
    try {
      const response = await fetch(`http://localhost:5004/api/usuario/${email}`);
      const data = await response.json();
      setRol(data.rol); // ← aquí actualizas el state
      setId(data.id)
      console.log("Este es el rol del tío logueado:", data.rol);
    } catch (error) {
      console.error("Error al obtener rol:", error);
    }
  };

  useEffect(() => {
    if (email) { // solo hace la petición si hay email guardado
      peticionApiEmail();
    }
  }, [email]);

  return { rol,email,id };
};
