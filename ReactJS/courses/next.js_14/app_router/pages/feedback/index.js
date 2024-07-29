import { useState } from 'react';
import { extractFeedback } from '../api/feedback';

export default function FeedbackPage({ feedback }) {
    const [feedbackData, setFeedbackData] = useState(null);

    function loadFeedbackHandler(id) {
        fetch(`/api/${id}`)
            .then((res) => res.json())
            .then(({ feedback }) => setFeedbackData(feedback));
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {feedback.map(({ id, text, email }) => (
                    <li key={id}>
                        {text} <button onClick={loadFeedbackHandler.bind(null, id)}>Show Details</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const data = extractFeedback();
    console.log(data);
    return { props: { feedback: data } };
}
