import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">Brand</a>
        <div className="block lg:hidden">
          <button className="text-gray-800">Menu</button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-gray-800">Home</a>
          <a href="#" className="text-gray-800">Features</a>
          <a href="#" className="text-gray-800">Pricing</a>
          <a href="#" className="text-gray-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
