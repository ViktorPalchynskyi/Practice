import { Backdrop } from '@/src/components/Backdrop/Backdrop';
import { getNewsItem } from '@/src/utils/news';
import { notFound } from 'next/navigation';

export default async function InterceptedImagePage({ params }) {
    const { slug } = params;
    const news = await getNewsItem(slug);

    if (!news) {
        notFound();
    }

    return (
        <>
            <Backdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${news.image}`} alt={news.title} />
                </div>
            </dialog>
        </>
    );
}
