import React from 'react';
import { Header } from '../Header/Header';
import styles from './styles.module.scss';
import Link from 'next/link';

export const Layout = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header className={styles.header} />
            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>
                <Link className={styles.link} href="/contacts/about-us">
                    Info about us
                </Link>
            </footer>
        </div>
    );
};
