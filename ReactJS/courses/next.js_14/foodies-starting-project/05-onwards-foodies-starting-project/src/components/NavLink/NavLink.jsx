'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import classNames from 'classnames';

export const NavLink = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={classNames(styles.link, {
                [styles.active]: path.startsWith(href),
            })}
        >
            {children}
        </Link>
    );
};
