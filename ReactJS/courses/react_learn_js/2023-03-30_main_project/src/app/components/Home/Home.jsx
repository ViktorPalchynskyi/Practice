import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';


export function Home() {
    console.log(restaurants);
    return <div>
        {restaurants.map(restaurant => (
             <Restaurant key={restaurant.id} restaurant={restaurant}/>
        ))} 
    </div>
} 