import Link from 'next/link';

export default function ClientPage() {
    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                <li>
                    <Link href="/clients/viktor" >Viktor</Link>
                </li>
                <li>
                    <Link href="/clients/max" >max</Link>
                </li>
                <li>
                    <Link href={{ pathname: '/clints/[id]', query: { id: 'max' } }} >max</Link>
                </li>
            </ul>
        </div>
    );
}
