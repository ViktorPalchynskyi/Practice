'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { NewsList } from '@/src/components/NewsList/NewsList';
import { useEffect, useState } from 'react';

export default function NewsDetailPage() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const res = await fetch('http://localhost:8080/news');

            if (!res.ok) {
                console.log(res);
                setError('Faild to fetch news.');
                setIsLoading(false);
            }

            const news = await res.json();

            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }


    return (
        <>
            <h1>News page</h1>
            <NewsList news={news} />
        </>
    );
}
