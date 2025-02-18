import React from 'react';
import styles from './Cast.module.css';
import noImageAvailable from '../../images/no-image-available.jpg';
import PropTypes from 'prop-types'
import 'common.css';

const Cast = ({ cast }) => {
  return (
    <>
      {cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map(actor => (
            <li className={styles.castItem} key={actor.id}>
              <p className={styles.name}> Name: {actor.name}</p>
              <p className={styles.character}> Character: {actor.character}</p>
              {actor.profile_path ? (
                <img
                  className={styles.castImage}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  className={styles.castImage}
                  src={noImageAvailable}
                  alt="No profile available"
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className='notFound'>No cast information available.</p>
      )}
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.array
}
export default Cast;
