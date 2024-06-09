import { getNewsItem } from '@/src/utils/news';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsPage({ params }) {
    const { slug } = params;
    const news = await getNewsItem(slug);

    if (!news) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${news.slug}/image`}>
                    <img src={`/images/news/${news.image}`} alt={news.title} />
                </Link>
                <h1>{news.title}</h1>
                <time dateTime={news.date}>{news.date}</time>
            </header>
            <p>{news.content}</p>
        </article>
    );
}
