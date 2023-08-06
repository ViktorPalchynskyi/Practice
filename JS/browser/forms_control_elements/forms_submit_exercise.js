const clickButton = document.getElementById('show-button');

clickButton.addEventListener('click', () => showPrompt('All I want is wingstop.', (text) => alert(`text from input is ${text}`)));

function showCover() {
  const div = document.createElement('div');
  div.id = 'cover-div';
  document.body.style.overflowY = 'hidden';

  document.body.append(div);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  const form = document.getElementById('prompt-form');
  const container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    const value = form.text.value;

    if (!value) return false;
    complete(value);

    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (event) {
    if (event.code === 'Escape') complete(null);
  };

  const lastElem = form.elements[form.elements.length - 1];
  const firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.text.focus();
}
