import React from "react";
import { Button } from '@/app/components/Button/Button.jsx';

export const Tabs = ({ tabs, onTabClick }) => {
  if (!tabs?.length) {
    return null;
  }
  
  return (
    <div>
        {tabs.map(({ id, title }) => (
            <Button 
                key={id}
                onClick={() => onTabClick(id)}
            >
                {title}
            </Button>
        ))}
    </div>
  );
};
