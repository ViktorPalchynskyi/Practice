'use client';
import React from 'react';
import '@/app/globals.scss';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { HomeContainer } from './containers/Home/Home';

export default function HomePage() {
    return (
        <Provider store={store}>
            <HomeContainer />
        </Provider>
    );
}
