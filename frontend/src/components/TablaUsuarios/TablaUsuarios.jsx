import React from 'react'
import { useTabla } from '../hooks/useTabla';

const TablaUsuarios = () => {
  const { usuarios,borrarUsuario } = useTabla();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Lista de Usuarios</h1>

      <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg">
        <table className="table-auto w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Apellidos</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map(user => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{user.nombre}</td>
                  <td className="px-6 py-4">{user.apellido}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                         onClick={() => borrarUsuario(user.id)}

                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center px-6 py-8 text-gray-500">
                  No hay usuarios disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};




export default TablaUsuarios
