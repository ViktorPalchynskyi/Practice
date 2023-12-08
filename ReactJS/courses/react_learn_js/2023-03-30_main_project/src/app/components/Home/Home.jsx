import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { nanoid } from "nanoid";
import { Header } from '../Header/Header';

export function Home() {
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
    }

    const customerRestaurants = getRestaurants();

    console.log(customerRestaurants);
    return (
        <div>
            <Header />
            {customerRestaurants.map(restaurant => (
                    <Restaurant key={restaurant.id} restaurant={restaurant}/>
            ))} 
        </div>
    );
} 