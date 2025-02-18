import axios from 'axios';

const API_KEY = '21161239b69d8dd6ebeec5ac6086d760';
const BASE_URL = 'https://api.themoviedb.org/3';

// functie helper pentru a face cereri la API
async function fetchData(endpoint, params = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    params: { ...params, api_key: API_KEY },
  }; 

  try {
    const response = await axios.get(url, config);
    return response.data; 
  } catch (error) {
  
    if (error.response) {
      // eroare http (status diferit de 200)
      throw new Error(
        `Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      // nu s-a primit răspuns de la server
      throw new Error('Nu s-a primit răspuns de la server');
    } else {
      // erori de configurare
      throw new Error(`Eroare: ${error.message}`);
    }
  }
}

// metode pentru fiecare endpoint

// lista cu cele mai populare filme
export async function getTrendingMovies() {
  const endpoint = '/trending/movie/day';
  return fetchData(endpoint);
}

// cautare filme
export async function searchMovies(query) {
  const endpoint = '/search/movie';
  return fetchData(endpoint, { query });
}

// detalii despre un film
export async function getMovieDetails(movieId) {
  const endpoint = `/movie/${movieId}`;
  return fetchData(endpoint);
}

// lista cu actorii unui film
export async function getMovieCredits(movieId) {
  const endpoint = `/movie/${movieId}/credits`;
  return fetchData(endpoint);
}

//date despre actorii unui film
export async function getCast(movieId) {
  const endpoint = `/movie/${movieId}/credits`;
  return fetchData(endpoint);
}
 //recenziile unui film
export async function getReviews(movieId) {
  const endpoint = `/movie/${movieId}/reviews`;
  return fetchData(endpoint);
}