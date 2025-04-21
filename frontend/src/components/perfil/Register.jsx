import React from 'react'
import { useRegister } from '../hooks/useRegister'
const Register = () => {
const {handdleInputs,handleSubmit,form,setForm}=useRegister()
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Apellido</label>
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
        <input
          type="date"
          name="fecha_nac"
          value={form.fecha_nac}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Localidad</label>
        <input
          type="text"
          name="localidad"
          value={form.localidad}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Provincia</label>
        <input
          type="text"
          name="provincia"
          value={form.provincia}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Código Postal</label>
        <input
          type="text"
          name="cp"
          value={form.cp}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
        <input
          type="tel"
          name="num_tlf"
          value={form.num_tlf}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
        <input
          type="password"
          name="pass"
          value={form.pass}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">ID Academia</label>
        <input
          type="text"
          name="id_academia"
          value={form.id_academia}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Registrarse
      </button>
    </form>
  </div>
  )
}

export default Register
