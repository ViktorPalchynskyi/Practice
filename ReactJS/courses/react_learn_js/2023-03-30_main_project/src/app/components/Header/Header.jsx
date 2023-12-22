import React, { useContext } from "react";
import styles from './styles.module.scss'
import Image from "next/image"; 
import { ThemeContext } from "@/app/context/ThemeContext/themeContext";
import { Button } from "../Button/Button";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
    
  return (
        <header className={styles.root}>
            <Image priority src='/images/logo.png' width={115} height={18} alt='logo'/>
            <Button onClick={() => setTheme(theme === 'default' ? 'dark': 'default')}>Change Theme</Button>
        </header>
    );
};
