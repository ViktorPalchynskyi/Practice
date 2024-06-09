import { NewsList } from '@/src/components/NewsList/NewsList';
import { getLatestNews } from '@/src/utils/news';

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest News Page</h2>
            <NewsList news={latestNews}/>
        </>
    );
}
