const text = document.querySelector(".test");
const botton = document.querySelector(".target");
const botton2 = document.querySelector(".target2");

botton.addEventListener("click", () => {
  text.hidden = !text.hidden;
  botton2.hidden = false;
});
botton2.addEventListener("click", () => (botton2.hidden = true));

const field = document.getElementById("field");
const ball = document.getElementById("ball");

function moveBall(event) {
  const { left, top } = field.getBoundingClientRect();

  ball.style.top = `${
    event.clientY - top - field.clientTop - ball.offsetHeight / 2
  }px`;
  ball.style.left = `${
    event.clientX - left - field.clientLeft - ball.offsetWidth / 2
  }px`;
}

field.addEventListener("click", moveBall);

const menu = document.querySelector(".menu");

menu.addEventListener("click", () => menu.classList.toggle("open"));

const panes = document.querySelectorAll(".pane");

for (const pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  pane.firstChild.onclick = () => pane.remove();
}

// let i = 1;
// for (let li of document.querySelectorAll("li")) {
//   li.style.position = "relative";
//   li.insertAdjacentHTML(
//     "beforeend",
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

const carousel = document.querySelector(".carousel");
const list = carousel.querySelector("ul");
const listElem = list.querySelectorAll("li");
const prev = carousel.querySelector(".prev");
const next = carousel.querySelector(".next");
const widht = 130;
const count = 3;
let position = 0;

prev.addEventListener('click', () => {
  console.log("click ==> prev");
  position += widht * count;
  position = Math.min(position, 0);
  list.style.marginLeft = `${position}px`;
});

next.addEventListener('click', () => {
  position -= widht * count;
  position = Math.max(position, -widht * (listElem.length - count));
  list.style.marginLeft = position + "px";
});
