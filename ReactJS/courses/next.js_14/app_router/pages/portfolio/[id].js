import { useRouter } from 'next/router';

export default function PortfoliProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);
    console.log(router);

    return (
        <div>
            <h1>PortfoliProjectPage</h1>
        </div>
    );
}
