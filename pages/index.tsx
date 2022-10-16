import type { NextPage } from "next";
import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { FallbackScreen } from "../components/FallbackScreen";

const HomePage = dynamic(() => import("../components/HomePage"), {
  suspense: true,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Amaury Vasquez </title>
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <HomePage />
      </Suspense>
    </>
  );
};

export default Home;
