import axios from 'axios';
import Axios from 'axios';
const KEY = process.env.REACT_APP_KEY;
axios.defaults.baseURL = ' https://api.themoviedb.org/3';

export async function fetchTrend() {
  return await Axios.get(`trending/movie/day?api_key=${KEY}&language=ukr`);
}

export async function queryFetch(query, pages) {
  return await Axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${pages}`
  );
}

export async function fetchById(id) {
  return await Axios.get(`movie/${id}?api_key=${KEY}&language=ukr-UKR`);
}

export async function fetchCast(id) {
  return await Axios.get(`movie/${id}/credits?api_key=${KEY}&language=en-US`);
}

export async function fetchReview(id) {
  return await Axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}

export async function fetchTrailer(id) {
  return await Axios.get(`movie/${id}/videos?api_key=${KEY}&language=en-US`);
}

export async function fetchPopularMovie(page) {
  return await Axios.get(
    `movie/popular?api_key=${KEY}&language=en-US&page=${page}`
  );
}
