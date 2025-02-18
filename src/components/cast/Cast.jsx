import React from 'react';
import styles from './Cast.module.css';
import noImageAvailable from '../../images/no-image-available.jpg';

const Cast = ({ cast }) => {
  return (
    <>
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
    </>
  );
};

export default Cast;
