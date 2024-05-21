import { ReviewContainer } from '@/app/containers/Review/Review';

import styles from './styles.module.scss';

export const Reviews = ({ reviewId }) => {
    if (!reviewId?.length) {
        return <div>No review</div>;
    }

    return (
        <div>
            <h3>Review</h3>
            <div>
                {reviewId.map((reviewId) => (
                    <ReviewContainer key={reviewId} reviewId={reviewId} className={styles.review} />
                ))}
            </div>
        </div>
    );
};
