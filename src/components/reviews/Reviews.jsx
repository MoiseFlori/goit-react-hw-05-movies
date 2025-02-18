import React from 'react';
import styles from './Reviews.module.css';
import '../../common.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li className={styles.reviewsList} key={review.id}>
              <p className={styles.reviewContent}>{review.content}</p>
              <p>
                <strong>By: </strong>
                {review.author}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className='notFound'>No reviews available for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
