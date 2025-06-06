import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MovilMenu({ login, rol, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Icono hamburguesa */}
      <i
        className="fa-solid fa-bars md:!hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      ></i>

      {/* Menú desplegable */}
      <div
        className={`absolute top-12 right-0 w-48 bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-4 gap-3">
          <Link to="/info/eventos" onClick={() => setMenuOpen(false)}>
            <p className="text-white font-[Quicksand]">Eventos</p>
          </Link>
          <Link to="/info/federaciones" onClick={() => setMenuOpen(false)}>
            <p className="text-white font-[Quicksand]">Federarme</p>
          </Link>
          <Link to="/info/comunidad" onClick={() => setMenuOpen(false)}>
            <p className="text-white font-[Quicksand]">Comunidad</p>
          </Link>
          <Link to="/info/login" onClick={() => setMenuOpen(false)}>
            <p className="text-white font-[Quicksand]">Login</p>
          </Link>

          {/* Icono de perfil si hay login */}
          {login && (
            <div className="flex flex-col gap-3">
              {rol === 'Admin' ? (
                <Link to="/info/administrar" onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-user text-white"></i>
                </Link>
              ) : (
                <Link to="/info/perfil" onClick={() => setMenuOpen(false)}>
                  <i className="fa-solid fa-user text-white"></i>
                </Link>
              )}

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovilMenu;
