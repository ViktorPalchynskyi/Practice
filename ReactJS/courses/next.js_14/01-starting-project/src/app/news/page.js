import { DUMMY_NEWS } from '@/dummy-news';
import { NewsList } from '@/src/components/NewsList/NewsList';

export default function NewsDetailPage() {
    return (
        <div id="home">
            <NewsList news={DUMMY_NEWS}/>
        </div>
    );
}
