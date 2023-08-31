eventSource.addEventListener('join', (event) => {
  alert(`${event.data} зашёл`);
});

eventSource.addEventListener('message', (event) => {
  alert(`Сказал: ${event.data}`);
});

eventSource.addEventListener('leave', (event) => {
  alert(`${event.data} вышел`);
});
