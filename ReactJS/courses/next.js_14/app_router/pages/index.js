import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

export default function HomePage({ products }) {
    return (
        <div>
            <h1>Hello there</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps(context) {
    console.log('Re...');
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    if (!data) {
        return {
            redirect: {
                destination: '/no-data',
            },
        };
    }

    if (!data.products.length) {
        return { notFound: true };
    }

    return {
        props: { products: data.products },
        revalidate: 10,
    };
}
