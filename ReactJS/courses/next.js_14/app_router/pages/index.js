import { promises as fs } from 'fs';
import path from 'path';

export default function HomePage({ products }) {
    console.log('prod', products);
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

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    console.log(data);

    return { props: { products: data.products } };
}
