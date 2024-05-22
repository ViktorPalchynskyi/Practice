import { useMemo, useState } from 'react';
import { ThemeContext, ThemeSetterContext } from '@/app/context/ThemeContext/themeContext';

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('default');
    const [buttonTheme, setButtonTheme] = useState('dafault');

    const contextValue = useMemo(() => ({ theme, buttonTheme }), [theme, buttonTheme]);
    const contextSetters = useMemo(() => ({ setButtonTheme, setTheme }), []);

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeSetterContext.Provider value={contextSetters}>
              {children}
            </ThemeSetterContext.Provider>
        </ThemeContext.Provider>
    );
};
