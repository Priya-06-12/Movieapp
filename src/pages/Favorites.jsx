import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(fav);
  }, []);

  const toggleFavorite = (movie) => {
    const updated = favorites.filter(m => m.id !== movie.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-center mt-6 text-xl font-bold">My Favorites</h2>
      <MovieList movies={favorites} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
};

export default Favorites;