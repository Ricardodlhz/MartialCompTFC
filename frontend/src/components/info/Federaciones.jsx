import React, { useState } from 'react'
import { useRols } from '../hooks/useRol'
import { useFederacion } from '../hooks/useFeferacion'


const Federaciones = () => {
  const { email } = useRols()
  const { deportes,federarUsuario, loading, error, response } = useFederacion()
  const [deporteSeleccionado, setDeporteSeleccionado] = useState('')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    federarUsuario(email, deporteSeleccionado)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-5">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Formulario de Federación</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Selecciona un Deporte</label>
        {deportes.length > 0 ? (
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={deporteSeleccionado}
            onChange={(e) => setDeporteSeleccionado(e.target.value)}
            required
          >
            <option value="">Selecciona un deporte</option>
            {deportes.map((deporte) => (
              <option key={deporte.id} value={deporte.nombre_deporte}>
                {deporte.nombre_deporte}
              </option>
            ))}
          </select>
        ) : (
          <p className="text-center text-gray-500">Cargando Datos...</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        disabled={loading}
      >
        {loading ? 'Federando...' : 'Federarme'}
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {response && <p className="text-green-600 text-center">Federado correctamente 🎉</p>}
    </form>
  )
}

export default Federaciones
