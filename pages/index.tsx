import type { NextPage } from 'next';
import Head from 'next/head';

import HomePage from 'components/HomePage/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Amaury Vasquez | Web Developer </title>
        <meta
          name="description"
          content="This is the personal page of Amaury Vasquez, a web developer specialized in React with Typescript"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
