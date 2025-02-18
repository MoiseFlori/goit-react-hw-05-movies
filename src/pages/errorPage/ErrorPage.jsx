import errorImage from '../../images/404-error.jpg';
import styles from './ErrorPage.module.css';
import React from 'react';

const ErrorPage = () => {
  return (
    <>
      <img className={styles.errorImg}
        src={errorImage} alt="404 Error" />
    </>
  );
};

export default ErrorPage;