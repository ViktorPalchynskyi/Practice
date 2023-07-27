const test = document.querySelector(".test");
const button = document.querySelector(".target");

test.addEventListener("click", function (event) {
  alert(event.type + " на " + event.currentTarget);
  alert("Координаты: " + event.clientX + ":" + event.clientY);
});

// test.onclick = function(e) {
//     alert(this.innerHTML);
// }

class Menu {
  constructor(target) {
    this.target = target;
  }

  handleEvent(event) {
    const method = `on${event.type[0].toUpperCase() + event.type.slice(1)}`;
    console.log(method);
    this[method](event);
  }

  onMousedown() {
    this.target.innerHTML = "Botton was clicked";
  }

  onMouseup() {
    this.target.innerHTML = "... and unclicked";
  }
}

const menu = new Menu(button);

button.addEventListener('mousedown', menu);
button.addEventListener('mouseup', menu);