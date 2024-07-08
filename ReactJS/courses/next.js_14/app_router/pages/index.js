import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Hello there</h1>
            <ul>
                <li>
                    <Link replace href="/clients">clients</Link>
                </li>
                <li>
                    <Link replace href="/portfolio">portfolio</Link>
                </li>
            </ul>
        </div>
    );
}
