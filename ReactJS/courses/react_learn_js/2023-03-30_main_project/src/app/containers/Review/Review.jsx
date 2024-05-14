import { Review } from '@/app/components/Review/Review';
import { selectReviewById } from '@/app/store/entities/review/selector';
import React from 'react';
import { useSelector } from 'react-redux';

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewById(state, { reviewId }));

    return <Review review={review} />;
};
