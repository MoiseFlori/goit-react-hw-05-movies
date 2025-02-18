import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getCast, getReviews } from '../../services/fetchApi';
import Cast from '../cast/Cast';
import Reviews from '../reviews/Reviews';
import Loader from '../loader/Loader';
import styles from './MovieDetails.module.css';
import PropTypes from 'prop-types'

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);

        // preincarcam datele pentru cast si reviews
        const [castData, reviewsData] = await Promise.all([
          getCast(id),
          getReviews(id),
        ]);

        setCast(castData.cast || []);
        setReviews(reviewsData.results || []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleCast = () => {
    setShowCast(true);
    setShowReviews(false);
  };

  const handleReviews = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && movie && (
        <>
          <button
            type="button"
            onClick={handleGoBack}
            className={styles.goBackButton}
          >
            Go Back
          </button>
          <div className={styles.detailsContainer}>
            <div>
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h1 className={styles.title}>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p className={styles.rating}>User score: {movie.vote_average}</p>
              <p className={styles.category}>Overview</p>
              <p className={styles.overview}>{movie.overview}</p>
              <p className={styles.category}>Genres</p>
              <p className={styles.genres}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>

          <div className={styles.additionalInfo}>
            <h3 className={styles.titleInfo}>Additional Information</h3>
            <div className={styles.buttonsContainer}>
              <button
                type="button"
                className={styles.buttonInfo}
                onClick={handleCast}
              >
                Cast
              </button>
              <button
                type="button"
                className={styles.buttonInfo}
                onClick={handleReviews}
              >
                Reviews
              </button>
            </div>
          </div>

          {showCast && <Cast cast={cast} />}
          {showReviews && <Reviews reviews={reviews} />}
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {  
  movie: PropTypes.object,
  cast: PropTypes.array,
  reviews: PropTypes.array,
  showCast: PropTypes.bool,
  showReviews: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default MovieDetails;
