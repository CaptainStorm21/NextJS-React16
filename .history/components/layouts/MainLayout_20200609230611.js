import React from 'react';
import Header from '../includes/Header'
const MainLayout = (props) => (
    <>
        <Header/>
        {props.children}
    </>
)

export default MainLayout;