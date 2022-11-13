import { FaReact, FaUserSecret } from 'react-icons/fa';

import { TourButton } from './tourButton';
import { useImageLoad } from '../hooks/useImageLoad';
import styles from 'styles/home.module.scss';

const { homePage, introduction, image, container, buttonWrapper, what, where } =
  styles;

const Home = () => {
  const { loaded, img } = useImageLoad('https://i.imgur.com/bM4humM.jpg?3');

  return (
    <div className={homePage}>
      <article className={introduction}>
        <p className={where}>
          {`Hello, welcome to my portfolio, I'm Amaury Vásquez! `}
          <FaUserSecret />
        </p>
        <p className={what}>
          {'React frontend developer '}
          <FaReact />
        </p>
      </article>
      <div className={container}>
        {loaded && <img className={image} src={img} alt="Amaury Vasquez" />}
        {loaded && (
          <div className={buttonWrapper}>
            <TourButton link="/projects" text="Start tour" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
