import React, { useState } from 'react';
import SearchBar from '../searchBar/SearchBar';
import { searchMovies } from '../../services/fetchApi';
import MoviesList from '../../pages/MoviesList';
import Loader from '../loader/Loader';
import PropTypes from 'prop-types';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = async query => {
    if (!query.trim()) return;
    setIsLoading(true);
    setHasSearched(true);
    setError(null);
    try {
      const result = await searchMovies(query);
      setMovies(result.results);
      setError(null);
    } catch (err) {
      setError('An error occurred while fetching movies.');
      console.error(err);
    } finally {
      setIsLoading(false); // Oprim încărcarea indiferent de rezultat
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} /> {error && <p>{error}</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesList movies={movies} hasSearched={hasSearched} />
      )}
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.string,
  hasSearched: PropTypes.bool,
  isLoading: PropTypes.bool,
};


export default Movies;
