import React from "react";
import styles from './styles.module.scss'
import Image from "next/image"; 

export const Header = () => {
  return (
        <header className={styles.root}>
            <Image priority src='/images/logo.png' width={115} height={18} alt='logo'/>
        </header>
    );
};
