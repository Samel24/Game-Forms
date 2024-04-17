import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#A4ECFF] p-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img src="/logo.png" alt="Mejor Hogar para las Reseñas Logo" className="w-24" />
        <span className="text-lg font-bold text-black">Mejor Hogar para las Reseñas</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <a href="#inicio" className="px-6 py-2 border border-blue-300 text-black bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md transition duration-300 mb-2 sm:mb-0">Inicio</a>
        <a href="#videojuegos" className="px-6 py-2 border border-blue-300 text-black bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md transition duration-300 mb-2 sm:mb-0">Video Juegos</a>
        <a href="#resenas" className="px-6 py-2 border border-blue-300 text-black bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md transition duration-300">Reseñas</a>
      </div>
    </nav>
  );
};

export default Navbar;
