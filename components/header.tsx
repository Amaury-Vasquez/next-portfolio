import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from 'styles/layout.module.scss';

const { header, navBar, active, anchor } = styles;

export const Header = () => {
  const routes = ['projects', 'about', 'contact'];
  const { pathname } = useRouter();

  return (
    <header className={header}>
      <nav className={navBar}>
        {routes.map((route, i) => (
          <Link href={`/` + route} key={`${route + i}`}>
            <a
              className={`${anchor} ${pathname === '/' + route ? active : ''}`}
            >
              {route}
            </a>
          </Link>
        ))}
      </nav>
      <Link href={'/'}>
        <a className={`${anchor} ${pathname === '/' ? active : ''}`}>
          Amaury Vasquez
        </a>
      </Link>
    </header>
  );
};
