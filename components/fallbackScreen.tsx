import { BounceLoader } from './bounceLoader';
import styles from 'styles/layout.module.scss';

const { fallbackScreen } = styles;

export const FallbackScreen = () => {
  return (
    <div className={fallbackScreen}>
      <BounceLoader />
    </div>
  );
};
