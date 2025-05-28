import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function useCrearEventos() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [errors, setErrors] = useState({});

  const fetchSports = async () => {
    try {
      const api = await fetch("http://localhost:5004/api/deportes");
      const data = await api.json();
      setSports(data);
    } catch (error) {
      console.error("Error al cargar los deportes:", error);
    }
  };

  useEffect(() => {
    fetchSports();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!eventName.trim()) newErrors.eventName = "El nombre es obligatorio";
    if (!eventDate) newErrors.eventDate = "La fecha es obligatoria";
    if (!selectedSport) newErrors.selectedSport = "Selecciona un deporte";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const eventoResponse = await fetch("http://localhost:5004/api/eventos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_evento: eventName,
          fecha_evento: eventDate,
          id_deporte: selectedSport,
        }),
      });

      if (!eventoResponse.ok) throw new Error("Error creando evento");

      const eventoData = await eventoResponse.json();

      if (eventImage) {
        const formData = new FormData();
        formData.append("imagen", eventImage);
        formData.append("id_evento", eventoData.id);

        const imagenResponse = await fetch("http://localhost:5004/api/imagenesevento", {
          method: "POST",
          body: formData,
        });

        if (!imagenResponse.ok) {
          const errorText = await imagenResponse.text();
          console.error("Respuesta de error:", errorText);
          throw new Error("Error subiendo imagen");
        }

        await imagenResponse.json();
      }

      Swal.fire({
        title: "Evento creado correctamente",
        icon: "success",
        draggable: true,
      });

      // Limpiar formulario
      setEventName("");
      setEventDate("");
      setEventImage(null);
      setSelectedSport("");
      setErrors({});

    } catch (error) {
      console.error("Error al crear el evento:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo ha fallado, vuelve a intentarlo",
      });
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
    errors,
  };
}

