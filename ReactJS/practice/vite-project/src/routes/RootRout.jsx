import React from 'react';
import { Outlet, Link } from 'react-router-dom';


export const RootRout = () => {
    return (
        <>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/film'>Fiml</Link>
                <Link to='/tracker'>Tracker</Link>
            </header>
            <Outlet/>
            <footer>I`m a footer</footer>
        </>
    );
};
