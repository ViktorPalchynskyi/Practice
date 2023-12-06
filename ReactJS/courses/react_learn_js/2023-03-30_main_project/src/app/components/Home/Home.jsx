import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';


export function Home() {
    return <div>
        {restaurants.map(restaurant => (
             <Restaurant restaurant={restaurant}/>
        ))} 
    </div>
} 