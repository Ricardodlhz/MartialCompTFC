import React from 'react'

const Perfil = () => {
   const user = {
    photo:
      "https://via.placeholder.com/150", // puedes reemplazarlo por tu URL
    name: "Juan Pérez",
    email: "juanperez@example.com",
    gym: "Iron Warriors Gym",
    competition: "Campeonato Nacional de Fisicoculturismo 2025",
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          src={user.photo}
          alt="Foto de perfil"
        />
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
        <p className="text-gray-700 mt-2">{user.competition}</p>
      </div>
    </div>
  );
}

export default Perfil
