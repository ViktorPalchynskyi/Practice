import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { nanoid } from "nanoid";
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useEffect, useState } from 'react';

export function Home() {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(() => localStorage.getItem('activeRestaurantIndex') || 0);
    function getRestaurants() {
        return restaurants.map(restaurant => ({
            ...restaurant,
            menu: restaurant.menu.map(dish => ({
                ...dish,
                ingredients: dish.ingredients.map(ingredient => ({
                    id: nanoid(),
                    name: ingredient,
                }))
            }))
        }));
    };

    const customerRestaurants = getRestaurants();
    const activeRestaurant = customerRestaurants[activeRestaurantIndex];

    useEffect(() => {
       localStorage.setItem('activeRestaurantIndex', activeRestaurantIndex); 
    }, [activeRestaurantIndex]);

    return (
        <div>
            <Header />
            <Tabs restaurants={customerRestaurants} onTabClick={setActiveRestaurantIndex}/>
            <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
        </div>
    );
} 