import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }) {
    const { slug } = params;
    const news = DUMMY_NEWS.find((item) => item.slug === slug);

    if (!news) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
    );
}
