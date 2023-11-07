const localURL = 'http://localhost:3000/analytics';

window.onunload = function () {
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
