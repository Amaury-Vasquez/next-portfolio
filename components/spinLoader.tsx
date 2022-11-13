import styles from 'styles/_animation.module.scss';

const { spin } = styles;

export const SpinLoader = () => {
  return <div className={spin} />;
};
