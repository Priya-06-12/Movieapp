import { useEffect, useState } from "react";
import { fetchPopularMovies, searchMovies } from "../utils/Api";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  useEffect(() => {
    const load = async () => {
      const data = query ? await searchMovies(query) : await fetchPopularMovies(page);
      setMovies(data);
    };
    load();
  }, [query, page]);

  const toggleFavorite = (movie) => {
    const updated = favorites.some(m => m.id === movie.id)
      ? favorites.filter(m => m.id !== movie.id)
      : [...favorites, movie];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <MovieList movies={movies} toggleFavorite={toggleFavorite} favorites={favorites} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;