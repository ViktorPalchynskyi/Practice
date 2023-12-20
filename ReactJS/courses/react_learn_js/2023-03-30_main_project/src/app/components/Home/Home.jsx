import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useCachedActiveIndex } from '@/app/hooks/useCashedActiveIndex';

export function Home() {
    const { 
        activetIndex: activeRestaurantIndex, 
        setActivetIndexWithCache: setActiveRestaurantIndexWithCache 
    } = useCachedActiveIndex({ 
        initialIndex: 0, 
        localStorageIndexName: 'activeRestaurantIndex' 
    });

    const activeRestaurant = restaurants[activeRestaurantIndex];

    return (
        <div>
            <Header />
            <Tabs restaurants={restaurants} onTabClick={setActiveRestaurantIndexWithCache}/>
            <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
        </div>
    );
} 