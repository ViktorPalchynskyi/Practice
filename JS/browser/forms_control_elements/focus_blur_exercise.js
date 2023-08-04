const view = document.getElementById('view');
let area = null;

view.addEventListener('click', () => editStart());

function editStart() {
  area = document.createElement('textarea');
  area.classList.add('edit');
  area.value = view.innerHTML;

  area.addEventListener(
    'keydown',
    (event) => event.code === 'Enter' && area.blur()
  );

  area.addEventListener('focusout', () => editEnd());

  view.replaceWith(area);
  area.focus();
}

function editEnd() {
  view.innerHTML = area.value;
  area.replaceWith(view);
}

const table = document.getElementById('bagua-table');
let editingTd;
table.addEventListener('click', (event) => {
  const target = event.target.closest('td, .edit-cancel, .edit-ok');

  if (!table.contains(target)) return;

  const editFunc = {
    'edit-cancel': finishEditing,
    'edit-ok': finishEditing,
    TD: editTableDiv,
  };

  const targetMark =
    (target.className === 'edit-cancel' && 'edit-cancel') ||
    (target.className === 'edit-ok' && 'edit-ok') ||
    target.nodeName;
  const td = editingTd?.elem || target;

  editFunc[targetMark](td, target.className === 'edit-ok');
});

function editTableDiv(td) {
  if (editingTd) return;

  editingTd = {
    elem: td,
    data: td.innerHTML,
  };

  td.classList.add('edit-td');

  const textArea = document.createElement('textarea');
  textArea.style.width = `${td.clientWidth}px`;
  textArea.style.height = `${td.clientHeight}px`;
  textArea.className = 'edit-area';
  textArea.value = td.innerHTML;

  td.innerHTML = '';
  td.append(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    'beforeEnd',
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishEditing(td, isOk) {
  isOk ? (td.innerHTML = td.firstChild.value) : (td.innerHTML = editingTd.data);

  editingTd = null;
}

const mouse = document.getElementById('mouse');

mouse.tabIndex = 0;

mouse.onclick = function () {
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};

mouse.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false;
    case 'ArrowUp':
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowRight':
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowDown':
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};
