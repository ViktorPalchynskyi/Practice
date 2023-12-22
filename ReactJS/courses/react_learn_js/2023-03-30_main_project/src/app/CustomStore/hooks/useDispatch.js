import { StoreContext } from "../StoreContext/StoreContext";
import { useContext } from "react";

export const useDispatch = () => {
    const store = useContext(StoreContext);

    return store.dispatch.bind(store);
};