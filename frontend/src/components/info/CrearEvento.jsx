import React from 'react'
import useCrearEventos from './../hooks/useCrearEventos'
const CrearEvento = () => {
  const {
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
  } = useCrearEventos();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Crear Evento</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nombre del evento</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Fecha del evento</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Deporte</label>
          <select
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          >
            <option value="">Selecciona un deporte</option>
            {sports.length>0?(sports.map((sport) => (
              <option key={sport.id} value={sport.id}>{sport.nombre_deporte}</option>
            ))): (
              <option disabled>Cargando deportes</option>
            )}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Imagen del evento</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEventImage(e.target.files[0])}
            className="w-full text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition"
        >
          Crear Evento
        </button>
      </form>
    </div>
  );
}

export default CrearEvento
