import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">🎬 Movie App</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/favorites" className="hover:text-yellow-400">Favorites</Link>
    </div>
  </nav>
);

export default Header;