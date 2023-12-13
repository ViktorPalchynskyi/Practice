import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { nanoid } from "nanoid";
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useLayoutEffect, useState } from 'react';

export function Home() {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    const setActiveRestaurantIndexWithCache = (index) => {
        setActiveRestaurantIndex(index);
        localStorage.setItem('activeRestaurantIndex', index); 
    };

    const activeRestaurant = restaurants[activeRestaurantIndex];

    useLayoutEffect(() => {
        const savedActiveRestaurantIndex = localStorage.getItem('activeRestaurantIndex');

        if (savedActiveRestaurantIndex) {
            setActiveRestaurantIndex(savedActiveRestaurantIndex); 
        }
     }, []);

    return (
        <div>
            <Header />
            <Tabs restaurants={restaurants} onTabClick={setActiveRestaurantIndexWithCache}/>
            <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
        </div>
    );
} 