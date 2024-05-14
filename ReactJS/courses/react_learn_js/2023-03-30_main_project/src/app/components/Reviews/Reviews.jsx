import { ReviewContainer } from '@/app/containers/Review/Review';

export const Reviews = ({ reviews }) => {
    if (!reviews) {
        return null;
    }

    return (
        <div>
            <h3>Review</h3>
            <ul>
                {reviews.map((reviewId) => (
                    <li key={reviewId}>
                        <ReviewContainer reviewId={reviewId} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
