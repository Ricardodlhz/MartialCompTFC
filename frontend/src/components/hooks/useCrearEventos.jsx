import { useState, useEffect } from "react";

export default function useCrearEventos() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const fetchSports = async () => {
    try {
      const api = await fetch("http://localhost:5001/api/deportes")
      const data = await api.json()
      setSports(data);

      return data
    } catch (error) {
      console.error("Error al cargar los deportes:", error);
    }
  };
  useEffect(() => {


    fetchSports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Nombre evento: " + eventName)
    console.log("Fecha evento: " + eventDate)
    console.log("Id del deporte: " + selectedSport)
    // Validación rápida
    if (!eventName || !eventDate || !selectedSport) {
      alert("Completa todos los campos obligatorios");
      return;
    }

    try {
      // 1️⃣ POST evento (sin imagen)
      const eventoResponse = await fetch("http://localhost:5001/api/eventos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_evento: eventName,
          fecha_evento: eventDate,
          deporte_id: selectedSport,
        }),


      });
      console.log("IMAGEN: "+eventImage.type) 
      if (!eventoResponse.ok) throw new Error("Error creando evento");

      const eventoData = await eventoResponse.json();
      console.log("Evento creado:", eventoData);
      console.log("id deporte: " + eventoData.id)
           
      // 2️⃣ POST imagen (si hay imagen)
      if (eventImage) {
        const formData = new FormData();
        formData.append("imagen", eventImage);
        formData.append("eventoId", eventoData.id); // usa el id recibido
        
        const imagenResponse = await fetch("http://localhost:5001/api/imagenesevento", {
          method: "POST",
          // body: JSON.stringify({
          //   imagen: eventImage,
          //   id_evento: eventoData.id
          // }),
          body:formData,
        });

        if (!imagenResponse.ok) {
          const errorText = await imagenResponse.text();
          console.error("Respuesta de error:", errorText);
          throw new Error("Error subiendo imagen");
        }

        const imagenData = await imagenResponse.json();
        console.log("Imagen subida:", imagenData);
      }

      alert("Evento creado correctamente");

      // Limpiar formulario
      setEventName("");
      setEventDate("");
      setEventImage(null);
      setSelectedSport("");

    } catch (error) {
      console.error("Error al crear el evento:", error);
      alert("Hubo un error al crear el evento");
    }
  };

  return {
    eventName,
    setEventName,
    eventDate,
    setEventDate,
    eventImage,
    setEventImage,
    sports,
    selectedSport,
    setSelectedSport,
    handleSubmit,
  };
}
