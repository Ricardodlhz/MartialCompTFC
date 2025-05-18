import React from 'react'
import { usePerfil } from '../hooks/usePerfil';
import { useRols } from '../hooks/useRol';
import PdfButton from '../info/PdfButton';
// import {PdfButton} from './../info/PdfButton.jsx'
const Perfil = () => {
  const { id, email, rol } = useRols()
  const {
    imagePreview,
    uploading,
    error,
    successMessage,
    handleImageChange,
    user,
  } = usePerfil(email);



  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          src={`http://localhost:5001/api/imagenes/usuario/${id}`}
          alt="Foto de perfil"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageChange(e, id)}
          id="imageUpload"
          className="hidden"
        />
        <label
          htmlFor="imageUpload"
          className="mt-3 cursor-pointer px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
        >
          {uploading ? "Subiendo..." : "Subir Imagen"}
        </label>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {successMessage && (
          <p className="text-green-600 mt-2">{successMessage}</p>
        )}

        <h2 className="mt-4 text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="mt-2 text-gray-600 font-medium">
          Gimnasio:{" "}
          <span className="text-indigo-600 font-semibold">{user.gym}</span>
        </p>
      </div>


        {rol === "Competidor" && (
      <div className="bg-indigo-50 p-4 text-center">
          
          <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-700">
            Competición Apuntada
          </h3>
          {user.competition.length > 0 ? (
            user.competition.map((evento, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-md p-4 space-x-4"
              >
                <img
                  src={`http://localhost:5001/api/imagenesevento/usuario/${evento.id}`}
                  alt={evento.nombre_evento}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold">{evento.nombre_evento}</p>
                  <p className="text-gray-600">{evento.fecha_evento.slice(0, 10)}</p>
                  <PdfButton
                    nombreEvento={evento.nombre_evento}
                    fecha={evento.fecha_evento.slice(0, 10)}
                    localizacion="Madrid, España"
                    nombreUser={user.name}
                    apellidos={user.apellido}
                  />

                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tienes Competiciones</p>
          )}
        </div>
        </div>)}



      
    </div>
  );
};

export default Perfil
