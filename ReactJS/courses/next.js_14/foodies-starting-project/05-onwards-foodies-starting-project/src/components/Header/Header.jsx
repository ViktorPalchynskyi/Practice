import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import styles from './styles.module.css';
import { HeaderBackground } from '@/src/components/HeaderBackground/HeaderBackground';
import { NavLink } from '@/src/components/NavLink/NavLink';

export const Header = () => {
    return (
        <>  
            <HeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImage} alt="A plate with food" priority />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
