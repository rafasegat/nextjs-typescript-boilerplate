import React, { FC } from "react";
import Head from "next/head";

const HeadNext: FC = () => {
  return (
    <Head>
      <title>Boilerplate Website</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadNext;
