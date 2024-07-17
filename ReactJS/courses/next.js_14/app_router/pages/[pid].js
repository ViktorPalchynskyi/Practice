import { promises as fs } from 'fs';
import path from 'path';

export default function ProductDetailPage({ product }) {
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </>
    );
}

async function getData(params) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonFile = await fs.readFile(filePath);
    const data = JSON.parse(jsonFile);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const data = await getData();

    const product = data.products.find((product) => product.id === productId);
    console.log(product);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product) => product.id);
    const params = ids.map((id) => ({ params: { pid: id } }));

    return {
        paths: params,
        fallback: true,
    };
}
