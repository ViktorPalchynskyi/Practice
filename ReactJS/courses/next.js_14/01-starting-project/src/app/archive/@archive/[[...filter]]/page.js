import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/src/utils/news';
import { NewsList } from '@/src/components/NewsList/NewsList';
import Link from 'next/link';

export default function FiltredNewsPage({ params }) {
    const filter = params.filter;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>;

    if (news?.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if (
        (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) ||
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(Number(selectedMonth)))
    ) {
        throw new Error('Invalid filter.');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                            return (
                                <li key={link}>
                                    <Link href={href}>{link}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}
