import React from 'react';
import Header from '../includes/Header'
import Head 
const MainLayout = (props) => (
    <>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;