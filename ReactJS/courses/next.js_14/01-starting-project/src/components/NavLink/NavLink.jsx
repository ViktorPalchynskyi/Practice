'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLink = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? 'active' : null}>
            {children}
        </Link>
    );
};
