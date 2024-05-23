import React, { createContext, memo, useContext } from 'react';

export const MyContext = createContext('default');

export const WithContext = (WrappedComponent) => {
    const ComponentWithContext = (props) => {
        const contextValue = useContext(MyContext);

        return <WrappedComponent {...props} contextValue={contextValue} />;
    };

    return memo(ComponentWithContext);
};
