import { useRef } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Restaurant = ({ restaurant }) => {
    const { name, id } = restaurant || {};

    const ref = useRef();
    const menuLink = `/restaurants/${id}/menu`;
    const reviewLink = `/restaurants/${id}/review`;

    return (
        <div ref={ref} key={id}>
            <h2>{name}</h2>
            <div className={styles.links}>
                <Link className={styles.link} href={menuLink}>
                    Menu
                </Link>
                <Link className={styles.link} href={reviewLink}>
                    Reviews
                </Link>
            </div>
        </div>
    );
};
