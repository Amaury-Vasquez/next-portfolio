import Head from 'next/head';
import { TourButton } from 'components/tourButton';

import styles from 'styles/notFound.module.css';

const { errorPage, error404, errorMessage } = styles;

const NotFound = () => {
  return (
    <>
      <Head>
        <title> 404 Not Found | Amaury Vasquez </title>
      </Head>
      <div className={`${errorPage}`}>
        <span className={error404}>404</span>
        <br />
        <span className={`${errorMessage}`}>{'Not found'}</span>
        <TourButton link="/" text="Return home" />
      </div>
    </>
  );
};

export default NotFound;
