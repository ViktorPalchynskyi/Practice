export const Review = ({ review }) => {
  if (!review) {
    return null;
  }  

  const { id, rating, text, user } = review;

  return (
    <div key={id}>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Message: ${text}`}</p>
        <p>{`Customer: ${user}`}</p>
    </div>
  );
};
