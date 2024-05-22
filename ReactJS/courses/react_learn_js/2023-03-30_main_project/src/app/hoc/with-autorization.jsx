import { CartContainer } from '../containers/Cart/Cart';
import { useIsAuthorized } from '../hooks/useIsAuthorized';

export const withAuthorization = ({ Authorized, Unauthorized }) => {
    const ComponentWithAuthorization = () => {
        const isAuthoreized = useIsAuthorized();

        if (isAuthoreized) {
            return <Authorized />;
        }

        return <Unauthorized />;
    };

    return ComponentWithAuthorization;
};

export const CartWithAuthorization = withAuthorization({
    Authorized: CartContainer,
    Unauthorized: () => <span>Authorization is needed</span>,
});
