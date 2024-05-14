import { useEffect, useMemo, useRef } from "react";
import { Menu } from "../Menu/Menu";
import { NewReviewFrom } from "../NewReviewForm/NewReviewFrom";
import { Rating } from "../Rating/Rating";
import { Reviews } from "../Reviews/Reviews";
import { RestaurantMenuContainer } from "@/app/containers/RestautantMenu/RestaurantMenu";

export const Restaurant = ({ restaurant }) => {
  const { name, id, reviews } = restaurant || {};
  // const rating = useMemo(
  //   () => 
  //     !!reviews?.length 
  //       ? Math.floor(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length) 
  //       : 0,
  //   [reviews]
  // );
  const ref = useRef();

  return (
    <div ref={ref} key={id}>
        <h2>{name}</h2>
        {/* <Rating value={rating}/> */}
        <RestaurantMenuContainer restaurantId={id}/>
        <Reviews reviews={reviews}/>
        <NewReviewFrom/>
    </div>
  );
};
