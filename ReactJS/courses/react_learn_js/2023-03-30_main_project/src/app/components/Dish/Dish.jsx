export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { id, name, price, ingredients } = dish;

  return (
    <div>
        <span>{name}</span>
    </div>
  );
};
