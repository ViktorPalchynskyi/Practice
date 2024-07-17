import { useState, useEffect } from 'react';

export default function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('/dummy-backend.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {products.map((product) => {
                return <li key={product.id}>{product.title}</li>;
            })}
        </ul>
    );
}
