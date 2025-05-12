import React from 'react'
import { usePerfil } from '../hooks/usePerfil';
import { useRols } from '../hooks/useRol';
const Perfil = () =>  {
  const {id,email}=useRols()
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
      <div className="bg-indigo-50 p-4 text-center">
        <h3 className="text-lg font-semibold text-indigo-700">
          Competición Apuntada
        </h3>
       
        {user.competition.length>0?(user.competition.map((evento)=><p>{evento.nombre_evento}</p>)):(<p>No tienes Competiciones</p>)}
        
      </div>
    </div>
  );
};

export default Perfil
