export const Review = ({ review }) => {
  if (!review) {
    return null;
  }  

  const { rating, text, user } = review;

  return (
    <div>
        <p>{`Rating: ${rating}`}</p>
        <p>{`Message: ${text}`}</p>
        <p>{`Customer: ${user}`}</p>
    </div>
  );
};
