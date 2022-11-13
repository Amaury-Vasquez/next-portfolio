import Head from 'next/head';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { FallbackScreen } from '../components/fallbackScreen';

const AboutPage = dynamic(() => import('../components/aboutPage'), {
  suspense: true,
});

const About = () => {
  return (
    <>
      <Head>
        <title> About | Amaury Vasquez </title>
        <meta
          name="description"
          content="Page intented to show who Amaury Vasquez is and the skills he master"
        />
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <AboutPage />
      </Suspense>
    </>
  );
};

export default About;
