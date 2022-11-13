import styles from 'styles/_animation.module.scss';

const { bounceLoader } = styles;

export const BounceLoader = () => {
  return (
    <div className={bounceLoader}>
      <div />
      <div />
    </div>
  );
};
