import { promises as fs } from 'fs';
import path from 'path';

export default function ProductDetailPage({ product }) {
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;

    const productId = params.pid;
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    const product = data.products.find((product) => product.id === productId);
    console.log(product);

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { pid: 'p1' },
            },
            {
                params: { pid: 'p2' },
            },
            {
                params: { pid: 'p3' },
            },
        ],
        fallback: false,
    };
}
