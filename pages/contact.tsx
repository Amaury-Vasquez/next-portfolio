import Head from "next/head";
import { Suspense } from "react";
import dynamic from "next/dynamic";

import { FallbackScreen } from "../components/FallbackScreen";

const ContactPage = dynamic(() => import("../components/ContactPage"), {
  suspense: true,
});

const Contact = () => {
  return (
    <>
      <Head>
        <title> Contact | Amaury Vasquez </title>
      </Head>
      <Suspense fallback={<FallbackScreen />}>
        <ContactPage />
      </Suspense>
    </>
  );
};

export default Contact;
