import { useEffect, useState } from 'react';

export default function LastSales({ preSales }) {
    const [sales, setSales] = useState();
    const [loading, setLoading] = useState(false);

    console.log('Prerender', preSales);

    useEffect(() => {
        setLoading(true);
        fetch('/dummy-backend.json')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setSales(data.products);
            });
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!sales) {
        return <h1>No data yet</h1>;
    }

    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>{sale.title}</li>
            ))}
        </ul>
    );
}

// export async function getStaticProps(params) {
//     return fetch('/dummy-backend.json')
//         .then((res) => res.json())
//         .then((data) => ({ props: { preSales: data }, revalidate: 10 }));
// }
