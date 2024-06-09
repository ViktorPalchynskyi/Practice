import { NewsList } from '@/src/components/NewsList/NewsList';

export default async function NewsDetailPage() {
    const res = await fetch('http://localhost:8080/news');
    const news = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch news.');
    }

    return (
        <>
            <h1>News page</h1>
            <NewsList news={news} />
        </>
    );
}
