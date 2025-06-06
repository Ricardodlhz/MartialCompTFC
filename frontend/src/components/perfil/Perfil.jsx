import React from 'react'
import { usePerfil } from '../hooks/usePerfil';
import { useRols } from '../hooks/useRol';
import PdfButton from '../info/PdfButton';
import defaultProfiel from './../../assets/perfil/PerfilVacio.jpeg'
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
    imageError,
    borrarImagen,
    cambiarContraseña
  } = usePerfil(email);



  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          src={
            imageError
              ? `http://localhost:5004/api/imagenes/usuario/${user.id_usuario}`
              : defaultProfiel
          }
          alt="Foto de perfil"

        />

       <div className="flex space-x-2 mt-3">

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, user.id_usuario)}
            id="imageUpload"
            className="hidden"
          />
          <label
            htmlFor="imageUpload"
            className="mt-3 cursor-pointer px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
          >
            {uploading ? "Subiendo..." : "Subir Imagen"}
          </label>


          <button
            onClick={() => borrarImagen(id)}
            className="mt-3 cursor-pointer px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
          >
            Borrar Imagen
          </button>
        </div>

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
        <button
            onClick={() => cambiarContraseña(id)}
            className="mt-3 cursor-pointer px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
          >
            Cambiar Contraseña
          </button>
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
                    src={`http://localhost:5004/api/imagenesevento/usuario/${evento.id}`}
                    alt={evento.nombre_evento}
                    className="w-[40%] h-[120px] object-cover rounded-md"
                  />
                  <div className='flex flex-col justify-center text-center  w-[60%]'>
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
