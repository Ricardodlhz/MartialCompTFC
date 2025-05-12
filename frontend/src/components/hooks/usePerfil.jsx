import { useState } from "react";

export const usePerfil = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleImageChange = (e, userId) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(file);
      uploadImage(file, userId);
    }
  };

  const uploadImage = async (file, userId) => {
    const formData = new FormData();
    formData.append("imagen", file);
    formData.append("id_usuario", userId);
    console.log(file,userId)
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

  return {
    imagePreview,
    uploading,
    error,
    successMessage,
    handleImageChange,
  };
};
