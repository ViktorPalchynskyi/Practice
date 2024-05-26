import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import styles from './styles.module.css';
import { HeaderBackground } from '@components/Header/HeaderBackground/HeaderBackground';

export const Header = () => {
    return (
        <>
            <HeaderBackground/>
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logoImage} alt="A plate with food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                            <Link href="/community">Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
