import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/fetchApi';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import PropTypes from 'prop-types'

const Home = () => {
  const [movie, setMovie] = useState([]);

  const fetchMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Trending Movies</h1>
      <ul className={styles.movieContainer}>
        {movie.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link  to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movie: PropTypes.array
}

export default Home;
