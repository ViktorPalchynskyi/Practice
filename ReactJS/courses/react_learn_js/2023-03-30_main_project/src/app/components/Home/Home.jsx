import { restaurants } from '@/app/constants/fixtures.js';
import { Header } from '../Header/Header';
import { useActiveId } from '@/app/hooks/useCashedActiveIndex';
import { ThemeContextProvider } from '@/app/context/ThemeContext/ThemeContextProvider';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { RestaurantTabsContainer } from '@/app/containers/RestaurantTabs/RestaurantTabs';
import { RestaurantContainer } from '@/app/containers/Restaurant/Restaurant';
import { CartContainer } from '@/app/containers/Cart/Cart';

export function Home() {
    const { activeId: activeRestaurantId, setActiveIdWithCache: setActiveRestaurantId } = useActiveId({
        localStorageName: 'activeRestaurantId',
    });

    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <div>
                    <Header />
                    <RestaurantTabsContainer restaurants={restaurants} onTabClick={setActiveRestaurantId} />
                    {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId} />}
                </div>
                <CartContainer />
            </ThemeContextProvider>
        </Provider>
    );
}
