import { NewsList } from '@/src/components/NewsList/NewsList';
import { getAllNews } from '@/src/utils/news';

export default async function NewsDetailPage() {
    const news = await getAllNews();

    return (
        <>
            <h1>News page</h1>
            <NewsList news={news} />
        </>
    );
}
