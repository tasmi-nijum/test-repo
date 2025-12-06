import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componeents/Navbar/Navbar';
import Register from '../componeents/Register/Register';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Register></Register>
        </div>
    );
};

export default Root;