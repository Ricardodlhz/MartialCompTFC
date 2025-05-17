import React from 'react'
import { useRegister } from '../hooks/useRegister'
const Register = () => {
  const { handdleInputs, handleSubmit, form, setForm, gimnasios,errors } = useRegister()
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" noValidate>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handdleInputs}
            className="mt-1 block w-full border rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}

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
          {errors.apellido && <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>}
        </div>

        <div>
         
          <label className="block text-sm font-medium text-gray-700">Cual es tu Perfil</label>
       
          <select
            name="rol"
            value={form.rol}
            onChange={handdleInputs}
            className="mt-1 block w-full border rounded-lg p-2"
          >
            <option value="">Selecciona tu perfil</option>
            <option value="Competidor" >
                  Competidor
                </option>
                <option value="Entrenador">
                  Entrenador
                </option>   
                {/* <option value="Admin">
                  Admin
                </option>               */}
          </select>
          {errors.rol && <p className="text-red-500 text-sm mt-1">{errors.rol}</p>}
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
          {errors.fecha_nac && <p className="text-red-500 text-sm mt-1">{errors.fecha_nac}</p>}
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
          {errors.localidad && <p className="text-red-500 text-sm mt-1">{errors.localidad}</p>}
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
          {errors.provincia && <p className="text-red-500 text-sm mt-1">{errors.provincia}</p>}
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
          {errors.cp && <p className="text-red-500 text-sm mt-1">{errors.cp}</p>}
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
          {errors.num_tlf && <p className="text-red-500 text-sm mt-1">{errors.num_tlf}</p>}
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
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
          {errors.pass && <p className="text-red-500 text-sm mt-1">{errors.pass}</p>}
        </div>
        <div>
          {/* Hacer un select con los nombres de los gyms */}
          <label className="block text-sm font-medium text-gray-700">Nombre del Gimnasio</label>
          {/* <input
          type="text"
          name="id_academia"
          value={form.id_academia}
          onChange={handdleInputs}
          className="mt-1 block w-full border rounded-lg p-2"
        /> */}
          <select
            name="id_academia"
            value={form.id_academia}
            onChange={handdleInputs}
            className="mt-1 block w-full border rounded-lg p-2"
          >
            <option value="">Selecciona un gimnasio</option>
            {gimnasios.length > 0 ? (
              gimnasios.map((gim) => (
                <option value={gim.id} key={gim.id}>
                  {gim.nombre_gimnasio}
                </option>
              ))
            ) : (
              <option disabled>Cargando gimnasios...</option>
            )}
          </select>
          {errors.id_academia && <p className="text-red-500 text-sm mt-1">{errors.id_academia}</p>}
        </div>
        <button
          type="submit"
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default Register
