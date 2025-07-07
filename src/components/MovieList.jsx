import MovieCard from "./MovieCard";

const MovieList = ({ movies, toggleFavorite, favorites }) => (
  <div className="flex flex-wrap gap-6 justify-center p-4">
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        toggleFavorite={toggleFavorite}
        isFavorite={favorites.some(f => f.id === movie.id)}
      />
    ))}
  </div>
);

export default MovieList;