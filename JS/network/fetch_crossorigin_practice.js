const localURL = 'http://localhost:3000/user';

(async () => {
  const user = {
    name: 'John',
    surname: 'Cena',
  };

  const res = await fetch(localURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });

  const result = await res.json();
  console.log(result);
})();
