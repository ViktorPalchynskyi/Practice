export const Restaurant = ({ restaurant }) => {
   if (!restaurant) {
    return null;
   }

  const { name } = restaurant;
  
  return (
    <div>
        <h3>{name}</h3>
    </div>
  );
};
