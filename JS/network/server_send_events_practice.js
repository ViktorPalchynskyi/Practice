let eventSource = new EventSource("/events/subscribe");

eventSource.onmessage = function(event) {
  console.log("Новое сообщение", event.data);
  // этот код выведет в консоль 3 сообщения, из потока данных выше
};

// или eventSource.addEventListener('message', ...)