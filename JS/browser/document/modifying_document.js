const elem = document.createElement("div");
elem.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
elem.className = "alert";

const elem2 = elem.cloneNode(true);
elem2.querySelector("strong").innerHTML = "Всем пока";

document.body.append(elem);

setTimeout(() => {
  elem.remove();
}, 3 * 1000);



const ol = document.querySelector("#elem");

function clear(elem) {
  if (!elem) return;

  elem.innerHTML = "";
}

function createPromptElement() {
  const ul = document.createElement("ul");
  document.body.append(ul);

  while (true) {
    let text = prompt("Type a text");

    if (!text) break;

    const li = document.createElement("li");
    li.innerText = text;
    ul.append(li);
  }
}

// createPromptElement();

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
const container = document.querySelector("#container");

function createTree(container, data) {
  container.append(createTreeDOM(data));
}

function createTreeDOM(obj) {
  const keys = Object.keys(obj);

  if (!keys.length) return;

  const ul = document.createElement("ul");

  for (const key of keys) {
    const li = document.createElement("li");
    li.innerHTML = key;

    const childrenUl = createTreeDOM(obj[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

function countDescendants() {
  const allLi = document.querySelectorAll("li");

  for (const li of allLi) {
    const descedantsCount = li.querySelectorAll("li").length;

    if (!descedantsCount) continue;

    li.firstChild.textContent += `[ ${descedantsCount} ]`;
  }
}

createTree(container, data);
countDescendants();

const table = document.querySelector('.table');

const createCalendar = (target, year, month) => {
  let table = `
    <caption>Calender</caption>
    <table>
      <tr>
        <th>ПН</th>
        <th>ВТ</th>
        <th>СР</th>
        <th>ЧТ</th>
        <th>ПТ</th>
        <th>СБ</th>
        <th>ВС</th>
      </tr>
      <tr>
  `;
  const mon = month - 1;
  const date = new Date(year, mon);
  

  for (let i = 0; i < getDay(date); i++) {
    table += '<td></td>';
  }
  console.log(mon);
  while(date.getMonth() === mon) {
    table += `<td>${date.getDate()}</td>`;

    if (getDay(date) % 7 === 6) table += '</tr><tr>';

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += `
    </tr>
      </table>
  `;

  console.log(date);
  target.innerHTML = table;
};

const getDay = (date) => {
  let day = date.getDay();

  if (day === 0) day = 7;

  return day - 1;
};

createCalendar(table, 2023, 7);

let timerId;

function update() {
  const now = new Date;
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const [hh, mm, ss] = document.querySelector('.clock').children;

  if (hours < 10) hours = `0${hours}`;

  if (minutes < 10) minutes = `0${minutes}`;

  if (seconds < 10) seconds = `0${seconds}`;


  hh.innerHTML = `${hours}:`;
  mm.innerHTML = `${minutes}:`;
  ss.innerHTML = `${seconds}`;
}

function onStart() {
  timerId = setInterval(update, 1000);
  update();
}

function onStop() {
  clearInterval(timerId);
  timerId = null;
}

const startClock = document.getElementById('start');
const stopClock = document.getElementById('stop');

startClock.addEventListener('click', onStart);
stopClock.addEventListener('click', onStop);

const nameRow = document.querySelector('#name');

function sortRows() {
  const sortTable = document.getElementById('sortTable');

  const sortedRow = Array.from(sortTable.rows)
  .slice(1)
  .sort((firstRow, secondRow) => firstRow.cells[0].innerHTML > secondRow.cells[0].innerHTML ? 1 : -1);

  sortTable.tBodies[0].append(...sortedRow);
  console.log(sortedRow);
}

nameRow.addEventListener('click', sortRows)