import React from "react";
import { Ingredient } from "../Ingredient/Ingredient";
import styles from './styles.module.scss';

export const Ingredients = ({ ingredients, className }) => {
  if (!ingredients.length) {
    return null;
  }

  return (
    <ul className={className}>
        {ingredients.map(ingredient => 
            <li key={ingredient} className={styles.ingredient}>
                <Ingredient ingredient={ingredient}/>
            </li>
        )}
    </ul>
  );
};
