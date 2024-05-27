import { Meals } from '@components/Meals/Meals';
import styles from './styles.module.css';
import Link from 'next/link';
import { getMeals } from '@/utils/meals';
import { Suspense } from 'react';
import MealsLoadingPage from './loading-out';

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
  };
  

async function MealsContainer() {
    const meals = await getMeals();

    return <Meals meals={meals} />;
}

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
                <Suspense fallback={<MealsLoadingPage />}>
                    <MealsContainer />
                </Suspense>
            </main>
        </>
    );
}
