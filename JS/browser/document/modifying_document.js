const elem = document.createElement("div");
elem.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
elem.className = "alert";

const elem2 = elem.cloneNode(true);
elem2.querySelector("strong").innerHTML = "Всем пока";

document.body.append(elem);

setTimeout(() => {
  elem.remove();
  document.body.append(elem2);
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

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');
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
    const allLi = document.querySelectorAll('li');

    for (const li of allLi) {
        const descedantsCount = li.querySelectorAll('li').length;

        if (!descedantsCount) continue;

        li.firstChild.textContent += `[ ${descedantsCount} ]`;
    }

}


createTree(container, data);
countDescendants();


