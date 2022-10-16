import Head from "next/head";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import { FallbackScreen } from "components/FallbackScreen";

const ProjectPage = dynamic(() => import("components/ProjectPage"), {
  suspense: true,
});

const Contact = () => {
  return (
    <>
      <Head>
        <title> Projects | Amaury Vasquez </title>
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <ProjectPage />
      </Suspense>
    </>
  );
};

export default Contact;