import React from 'react';
import Header from '../includes/Header'
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>Welcomet NextJS App</title>
            <link href = "#" rel = "stylesheet" />
        </Head>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;