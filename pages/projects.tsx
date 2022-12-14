import Head from 'next/head';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { FallbackScreen } from 'components/fallbackScreen';

const ProjectPage = dynamic(() => import('components/projectPage'), {
  suspense: true,
});

const Contact = () => {
  return (
    <>
      <Head>
        <title> Projects | Amaury Vasquez </title>
        <meta
          name="description"
          content="Amaury Vasquez personal projects info and links"
        />
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <ProjectPage />
      </Suspense>
    </>
  );
};

export default Contact;
