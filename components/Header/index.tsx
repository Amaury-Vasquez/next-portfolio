import Link from "next/link";
import { useRouter } from "next/router";

import { Head, Anchor, NavBar } from "./styles";

export const Header = () => {
  const routes = ["projects", "about", "contact"];
  const { pathname } = useRouter();

  return (
    <Head>
      <NavBar>
        {routes.map((route, i) => (
          <Link href={`/` + route} key={`${route + i}`}>
            <Anchor active={pathname === "/" + route ? 1 : 0}>{route}</Anchor>
          </Link>
        ))}
      </NavBar>
      <Link href={"/"}>
        <Anchor active={pathname === "/" ? 1 : 0}>Amaury Vasquez</Anchor>
      </Link>
    </Head>
  );
};
