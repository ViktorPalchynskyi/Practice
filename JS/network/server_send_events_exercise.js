const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

let eventSource;
const localURL = 'http://localhost:3000/live-update';

startBtn.onclick = () => start();
stopBtn.onclick = () => stop();

function start() {
  if (!window.EventSource) {
    alert('Ваш браузер не поддерживает EventSource.');
    return;
  }

  eventSource = new EventSource(localURL);

  eventSource.onopen = function (e) {
    log('Событие: open');
  };

  eventSource.onerror = function (e) {
    log('Событие: error');
    if (this.readyState == EventSource.CONNECTING) {
      log(`Переподключение (readyState=${this.readyState})...`);
    } else {
      log('Произошла ошибка.');
    }
  };

  eventSource.addEventListener('bye', function (e) {
    log('Событие: bye, данные: ' + e.data);
  });

  eventSource.onmessage = function (e) {
    console.log('here', e);
    log('Событие: message, данные: ' + e.data);
  };
}

function stop() {
  eventSource.close();
  log('Соединение закрыто');
}

function log(msg) {
  logElem.innerHTML += msg + '<br>';
  document.documentElement.scrollTop = 99999999;
}
