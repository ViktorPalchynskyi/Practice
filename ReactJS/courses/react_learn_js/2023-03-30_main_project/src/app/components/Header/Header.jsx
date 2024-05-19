import React, { useContext } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ThemeContext } from '@/app/context/ThemeContext/themeContext';
import classNames from 'classnames';
import Link from 'next/link';

export const Header = ({ className }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={classNames(styles.root, className)}>
            <Image priority src="/images/logo.png" width={115} height={18} alt="logo" />
            <div className={styles.links}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/restaurants">Restaurants</Link>
            </div>
        </header>
    );
};
