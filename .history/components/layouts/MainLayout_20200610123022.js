import React from "react";
import Header from "../includes/Header";
import Head from "next/head";

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
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="/static/css/styles.css" rel="stylesheet" />
    </Head>
    <div className="mainLayout container">
      <Header />
      {props.children}{" "}
    </div>
  </>
);

export default MainLayout;
