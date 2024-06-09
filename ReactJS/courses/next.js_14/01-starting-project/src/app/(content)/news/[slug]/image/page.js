import { getNewsItem } from '@/src/utils/news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
    const { slug } = params;
    const news = await getNewsItem(slug);

    if (!news) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
    );
}
