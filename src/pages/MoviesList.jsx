import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/home/Home.module.css';
import '../../src/common.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, hasSearched }) => {
  return (
    <div>
      {hasSearched && movies.length === 0 ? (
        <p className="notFound">No movies found. Try a different search.</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  hasSearched: PropTypes.bool,
};
export default MoviesList;
