import React from 'react';
import { Helmet } from 'react-helmet';

const head = () => {
  return (
    <Helmet key={Math.random()}>
      <title>News de Hacker</title>
      <meta property="og:title" content="News de Hacker" />
      <meta
        name="description"
        content="News de Hacker Server side rendering application with React JS"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="#" />
    </Helmet>
  );
};

export default head;
