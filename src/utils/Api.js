const API_KEY = "553ceea0cb803b308beb52504350259c";
const BASE_URL = "https://api.themoviedb.org/3";



export const fetchPopularMovies = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await res.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
};