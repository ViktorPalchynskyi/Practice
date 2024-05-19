import { RestaurantCartContainer } from '@/app/containers/RestaurantCart/RestaurantCart';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Restaurants({ restaurantIds }) {
    // const pathname = usePathname();
    // const router = useRouter();
    // const handleLinkClick = (restaurantId) => {
    //     router.push(`/restaurants/${restaurantId}`);
    //   };

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
