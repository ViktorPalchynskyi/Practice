import { StoreContext } from "./StoreContext";

export const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
  );
};
