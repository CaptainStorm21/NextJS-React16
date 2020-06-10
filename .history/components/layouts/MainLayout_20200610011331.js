import React from 'react';
import Header from '../includes/Header'
import Head from 'next/'
const MainLayout = (props) => (
    <>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;