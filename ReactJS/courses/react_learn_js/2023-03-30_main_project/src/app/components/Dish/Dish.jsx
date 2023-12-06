export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { id, name, price, ingredients } = dish;

  return (
    <div key={id}>
        <h4>{name}</h4>
        <p>{`Price: ${price}`}</p>
        {ingredients.map((ingredient, index) => 
        <div key={index}>
            {ingredient}
        </div>
        )}
    </div>
  );
};
