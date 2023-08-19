const localURL = 'http://localhost:3000/analytics';

console.log('fetch API');

window.onunload = function () {
  console.log('unload');
  fetch('localURL', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: {
      x: document.body.offsetWidth,
      y: document.body.offsetHeight,
    },
    keepalive: true,
  });
};
