import axios from 'axios';

const API_KEY = '47a16356b4a0b318c8bcd78a4994c971';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchFilms = 'search/movie';
const getTrendingFilms = 'trending/movie/day';

export async function fetchTrendingFilm() {
  const response = await axios(`${getTrendingFilms}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}
export async function fetchSearchFilms(query) {
  const response = await axios(`${searchFilms}`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return response.data.results;
}
export async function fetchByMovieId(id) {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}
export async function fetchCastOfMovie(id) {
  const response = await axios(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
}

export async function fetchReviewsOfMovie(id) {
  const response = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}