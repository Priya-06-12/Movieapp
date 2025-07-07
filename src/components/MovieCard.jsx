const MovieCard = ({ movie, toggleFavorite, isFavorite }) => (
  <div className="bg-white rounded shadow w-64">
    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="h-80 w-full object-cover" />
    <div className="p-4">
      <h4 className="font-semibold">{movie.title}</h4>
      <button onClick={() => toggleFavorite(movie)} className="mt-2 bg-red-500 text-white px-4 py-1 rounded">
        {isFavorite ? "❤️ Remove" : "♡ Add to Fav"}
      </button>
    </div>
  </div>
);

export default MovieCard;