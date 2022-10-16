import { useRouter } from "next/router";
import { useEffect } from "react";

import { Page } from "../styles/templates";
import { Header } from "./Header";

export const Layout = (props: { children: JSX.Element }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <Page>
      <Header />
      {props.children}
    </Page>
  );
};
