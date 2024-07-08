import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ClientPage() {
    const router = useRouter();

    function loadProjectHandler() {
        // router.push('/clients/viktor/projecta');
        // router.push({ pathname: '/clients/[id]', query: { id: 'max', clientprojectid: 'projectb' });
        router.replace('/clients/viktor/projecta');
    }

    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                <li>
                    <Link href="/clients/viktor">Viktor</Link>
                </li>
                <li>
                    <Link href={{ pathname: '/clients/[id]', query: { id: 'max' } }}>max</Link>
                </li>
            </ul>
            <button onClick={loadProjectHandler}>Click me</button>
        </div>
    );
}
