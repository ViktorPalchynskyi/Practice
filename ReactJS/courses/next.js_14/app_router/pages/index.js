import Head from 'next/head';

import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';

export default function HomePage({ products }) {
    const emailInputRef = useRef();
    const feedbackInputRef = useRef();
    const [feedback, setFeedback] = useState([]);

    function submitFormHandler(event) {
        event.preventDefault();

        console.log('event!!!', event);

        const email = emailInputRef.current.value;
        const text = feedbackInputRef.current.value;

        fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({ email, text }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json)
            .then((data) => console.log(data));
    }

    function loadFeedbackHandler() {
        fetch('/api/feedback')
            .then((res) => res.json())
            .then(({ feedback }) => {
                setFeedback(feedback);
            });
    }

    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name="description" content="Find a lot of great events that allow you to evolve..." />
            </Head>
            <h1>Hello there</h1>
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
                </div>
                <button>Send Feedback</button>
            </form>
            <Image src="/image/bratstvo.jpg" alt="image" width={250} height={160} />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <button onClick={loadFeedbackHandler}>Load Feedback</button>
            <ul>
                {feedback.map(({ id, text, email }) => (<li key={id}>{`${email} - ${text}`}</li>))}
            </ul>
            <Link href={'/feedback'}>All feedbacks</Link>
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
