import axios from 'axios';
import Axios from 'axios';
axios.defaults.baseURL = ' https://api.themoviedb.org/3';
const KEY = 'deeaaa6f7bb1ec2c1571c017660b3676';

export async function fetchTrend() {
  return await Axios.get(`trending/movie/day?api_key=${KEY}&language=ukr`);
}

export async function queryFetch(query) {
  return await Axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
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
export async function fetchPoster(id) {
  return await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${KEY}&language=en-US`
  );
}
