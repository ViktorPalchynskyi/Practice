const url =
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

(async () => {
  const res = await fetch(url);
  const commets = await res.json();
  console.log(commets);

  const response = await fetch('./test.jpg');
  const blob = await response.blob();

  console.log(blob);
  const img = document.createElement('img');
  img.style.cssText = `width: 500px; height:500px`;

  document.body.append(img);

  img.src = URL.createObjectURL(blob);

  console.log('headers', {
    res: res.headers,
    response: response.headers,
  });

  for (const [key, value] of response.headers) {
    console.log(`key: ${key} - value: ${value}`);
  }
})();

const localURL = 'http://localhost:3000/user';

(async () => {
  const user = {
    name: 'John',
    surname: 'Smith',
  };

  const res = await fetch(localURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(url),
  });

  const result = await res.json();
  alert(result);

})();
