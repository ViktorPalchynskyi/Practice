import { Meals } from '@components/Meals/Meals';
import styles from './styles.module.css';
import Link from 'next/link';

export default function MealsPage() {
    return (
        <>
            <header className={styles.header}>
                Delicious meals, created <span className={styles.highlight}>by you</span>
                <p>Choose your favorite recipes and cook it yourself. It is easy and fun!</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Meals meals={[]} />
            </main>
        </>
    );
}
