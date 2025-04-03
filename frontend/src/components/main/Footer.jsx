import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-black text-white py-10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>

          <div className="flex items-center ">
          <img src='./src/assets/logotipo.png' className='  w-[70px]' alt='Logotipo' />
          <p className='font-[Quicksand] text-xl font-medium text-white'>MartialComp</p>
          </div>
        </div>
        <div>
          <h4 class="text-md font-semibold mb-2">ATLETAS</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-gray-400">Mobile app</a></li>
            <li><a href="#" class="hover:text-gray-400">Buscar eventos</a></li>
            <li><a href="#" class="hover:text-gray-400">Base de conocimientos</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-md font-semibold mb-2">ORGANIZADOR</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-gray-400">Conviértete en un organizador</a></li>
            <li><a href="#" class="hover:text-gray-400">Marcador</a></li>
            <li><a href="#" class="hover:text-gray-400">Streaming en directo</a></li>
            <li><a href="#" class="hover:text-gray-400">Plataforma de Federación</a></li>
            <li><a href="#" class="hover:text-gray-400">Precios</a></li>
            <li><a href="#" class="hover:text-gray-400">Base de conocimientos</a></li>
            <li><a href="#" class="hover:text-gray-400">Soporte</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-md font-semibold mb-2">COMUNIDAD</h4>
          <ul class="space-y-1">
            <li><a href="#" class="hover:text-gray-400">Academias</a></li>
            <li><a href="#" class="hover:text-gray-400">Afiliaciones</a></li>
            <li><a href="#" class="hover:text-gray-400">Atletas</a></li>
            <li><a href="#" class="hover:text-gray-400">Base de conocimientos</a></li>
            <li><a href="#" class="hover:text-gray-400">Soporte</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-6 border-t border-gray-700 pt-4">
        <p class="text-sm">© MartialComp, Madrid-España</p>
        <div class="mt-2 space-x-4">
          <a href="#" class="text-sm hover:text-gray-400">Acuerdos</a>
          <a href="#" class="text-sm hover:text-gray-400">Privacy Policy</a>
          <a href="#" class="text-sm hover:text-gray-400">Sobre nosotros</a>
        </div>
      </div>
    </footer>

  )
}

export default Footer
