import React from 'react';
import Link from 'next/link';

export const NewsList = ({ news }) => {
    return (
        <ul className="news-list">
            {news?.map(({ id, slug, image, title }) => (
                <li key={id}>
                    <Link href={`/news/${slug}`}>
                        <img src={`/images/news/${image}`} alt={title} />
                        <span>{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
