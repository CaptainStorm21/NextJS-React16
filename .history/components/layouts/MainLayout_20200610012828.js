import React from 'react';
import Header from '../includes/Header'
import Head from 'next/head';

const MainLayout = (props) => (
  <>
    <Head>
      <title>Welcomet NextJS App</title>
      <link href="#" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css2?family=Acme&family=Pompiere&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        rel="stylesheet"
            />
            <link href = "#" rel="stylesheet" />
    </Head>
    <Header />
    {props.children}
  </>
);

export default MainLayout;