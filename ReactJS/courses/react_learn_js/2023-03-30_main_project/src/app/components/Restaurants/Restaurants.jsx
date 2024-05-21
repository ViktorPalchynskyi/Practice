import { RestaurantCartContainer } from '@/app/containers/RestaurantCart/RestaurantCart';
import Link from 'next/link';

export function Restaurants({ restaurantIds }) {
    return (
        <div>
            {restaurantIds.map((restaurantId) => (
                <Link key={restaurantId} href={`/restaurants/${restaurantId}`}>
                    <RestaurantCartContainer restaurantId={restaurantId} />
                </Link>
            ))}
        </div>
    );
}
