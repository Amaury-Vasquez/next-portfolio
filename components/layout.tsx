import { Header } from './header';

import styles from 'styles/layout.module.scss';

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className={styles.page}>
      <Header />
      {props.children}
    </div>
  );
};
