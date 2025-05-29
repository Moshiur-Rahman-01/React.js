import React from 'react';
import Header from '../header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import './Root.css'
import SomeRule from '../../Some Rule/SomeRule';

const Root = () => {
    return (
        <div className='m-10'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <SomeRule></SomeRule>
        </div>
    );
};

export default Root;