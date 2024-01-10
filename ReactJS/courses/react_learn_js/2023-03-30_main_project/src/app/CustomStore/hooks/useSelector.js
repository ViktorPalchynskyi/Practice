import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../StoreContext/StoreContext"

export const useSelector = (selector) => {
    const store = useContext(StoreContext);
    const [value, setValue] = useState(() => selector(store.getState()));
   

    useEffect(() => {
        const callback = (state) => setValue(selector(state));

        store.subscribe(callback);

        return () => store.unsubscribe(callback);
    }, []);

    return value;
}