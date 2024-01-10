import { useMemo, useState } from "react";
import { ThemeContext } from "@/app/context/ThemeContext/themeContext";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
  );
};
