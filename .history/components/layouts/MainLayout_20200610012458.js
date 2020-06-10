import React from 'react';
import Header from '../includes/Header'
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>Welcomet NextJS App</title>
            <link href="#" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Acme&family=Pompiere&display=swap" rel="stylesheet"/></link>
        </Head>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;