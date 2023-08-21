console.log('open');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000');

xhr.responseType = 'html';

xhr.send();

xhr.onload = () => {
  if (xhr.status != 200) {
    alert('Error');
  } else {
    console.log(xhr.getAllResponseHeaders());
    alert(`Downloaded ${xhr.response.length}`);
  }
};


xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    alert(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }
};

xhr.onerror = function () {
  alert('Запрос не удался');
};
