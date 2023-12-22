import { restaurants } from '@/app/constants/fixtures.js';
import { Restaurant } from '@/app/components/Restaurant/Restaurant.jsx';
import { Header } from '../Header/Header';
import { Tabs } from '@/app/components/Tabs/Tabs.jsx';
import { useCachedActiveIndex } from '@/app/hooks/useCashedActiveIndex';
import { ThemeContextProvider } from '@/app/context/ThemeContext/ThemeContextProvider';
import { Provider } from '@/app/CustomStore';
import { store } from '@/app/store';
import { Cart } from '@/app/components/Cart/Cart';
 
export function Home() {
    const { 
        activetIndex: activeRestaurantIndex, 
        setActivetIndexWithCache: setActiveRestaurantIndexWithCache 
    } = useCachedActiveIndex({ 
        localStorageIndexName: 'activeRestaurantIndex' 
    }); 
    const activeRestaurant = restaurants[activeRestaurantIndex];

    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <div>
                    <Header />
                    <Tabs restaurants={restaurants} onTabClick={setActiveRestaurantIndexWithCache}/>
                    <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant}/>
                </div>
                <Cart/>
            </ThemeContextProvider>
        </Provider>
    );
} 