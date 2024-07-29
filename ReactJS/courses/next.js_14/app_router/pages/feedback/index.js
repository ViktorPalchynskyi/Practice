import { extractFeedback } from '../api/feedback';

export default function FeedbackPage({ feedback }) {
    return (
        <ul>
            {feedback.map(({ id, text, email }) => (
                <li key={id}>{`${email} - ${text}`}</li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    const data = extractFeedback();
    console.log(data);
    return { props: { feedback: data } };
}
