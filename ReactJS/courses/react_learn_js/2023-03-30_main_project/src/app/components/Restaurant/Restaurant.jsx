import { useEffect, useMemo, useRef } from "react";
import { Menu } from "../Menu/Menu";
import { NewReviewFrom } from "../NewReviewForm/NewReviewFrom";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews, id } = restaurant || {};
  const rating = useMemo(
    () => 
      !!reviews?.length 
        ? Math.floor(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length) 
        : 0,
    [reviews]
  );
  const ref = useRef();


  if (!restaurant) {
    return null;
  }

  useEffect(() => {
    // ref.current = setInterval(() => console.log('Ping'), 500);
    console.log(ref.current);
  }, []);

  return (
    <div ref={ref} key={id}>
        <h2>{name}</h2>
        <Rating value={rating}/>
        <Menu menu={menu}/>
        <Reviews reviews={reviews}/>
        <NewReviewFrom/>
    </div>
  );
};
