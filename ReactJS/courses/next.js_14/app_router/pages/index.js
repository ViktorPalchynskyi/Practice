import { promises as fs } from 'fs';
import { redirect } from 'next/dist/server/api-utils';
import path from 'path';

export default function HomePage({ products }) {
    return (
        <div>
            <h1>Hello there</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
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
                destination: '/no-data'
            }
        }
    }

    if (!data.products.length) {
        return { notFound: true };
    }

    return {
        props: { products: data.products },
        revalidate: 10,
        redirect: 
    };
}
