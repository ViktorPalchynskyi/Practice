import React from "react";
import { Button } from '@/app/components/Button/Button.jsx';

export const Tabs = ({ restaurants, onTabClick }) => {
  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
        {restaurants.map((restaurant, index) => (
            <Button 
                key={restaurant.id}
                onClick={() => onTabClick(index)}
            >
                {restaurant.name}
            </Button>
        ))}
    </div>
  );
};
