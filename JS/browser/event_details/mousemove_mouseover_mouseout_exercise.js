const house = document.getElementById("house");

let tooltipElem;

house.addEventListener("mouseover", (e) => {
  const anchorElem = e.target.closest("[data-tooltip]");
  if (!anchorElem) return;

  tooltipElem = showTooltip(anchorElem, anchorElem.dataset.tooltip);
});

house.addEventListener("mouseout", (e) => {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
});

function showTooltip(anchorElem, text) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerHTML = text;
  document.body.append(tooltip);

  const { x, y } = anchorElem.getBoundingClientRect();
  const left = x + (anchorElem.offsetWidth - tooltip.offsetWidth) / 2;
  const top = y + anchorElem.offsetHeight + 5;

  if (left < 0) left = 0;

  if (top < 0) top = y - anchorElem.offsetHeight - 5;

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;

  return tooltip;
}

class HoverIntent {
  constructor({
    sensitivity = 0.1, 
    interval = 100, 
    elem,
    over,
    out,
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.trackSpeed = this.trackSpeed.bind(this);

    elem.addEventListener("mouseover", this.onMouseOver);

    elem.addEventListener("mouseout", this.onMouseOut);
  }

  onMouseOver(event) {
    if (this.isOverElement) {
      return;
    }

    this.isOverElement = true;
    this.prevX = event.pageX;
    this.prevY = event.pageY;
    this.prevTime = Date.now();

    elem.addEventListener("mousemove", this.onMouseMove);
    this.checkSpeedInterval = setInterval(this.trackSpeed, this.interval);
  }

  onMouseOut(event) {
    if (!event.relatedTarget || !elem.contains(event.relatedTarget)) {
      this.isOverElement = false;
      this.elem.removeEventListener("mousemove", this.onMouseMove);
      clearInterval(this.checkSpeedInterval);
      if (this.isHover) {
        this.out.call(this.elem, event);
        this.isHover = false;
      }
    }
  }

  onMouseMove(event) {
    this.lastX = event.pageX;
    this.lastY = event.pageY;
    this.lastTime = Date.now();
  }

  trackSpeed() {
    let speed;

    if (!this.lastTime || this.lastTime == this.prevTime) {
      speed = 0;
    } else {
      speed =
        Math.sqrt(
          Math.pow(this.prevX - this.lastX, 2) +
            Math.pow(this.prevY - this.lastY, 2)
        ) /
        (this.lastTime - this.prevTime);
    }

    if (speed < this.sensitivity) {
      clearInterval(this.checkSpeedInterval);
      this.isHover = true;
      this.over.call(this.elem);
    } else {
      this.prevX = this.lastX;
      this.prevY = this.lastY;
      this.prevTime = this.lastTime;
    }
  }

  destroy() {
    elem.removeEventListener("mousemove", this.onMouseMove);
    elem.removeEventListener("mouseover", this.onMouseOver);
    elem.removeEventListener("mouseout", this.onMouseOut);
  }
}

const elem = document.getElementById("elem");
const tooltip = document.getElementById("tooltip");

console.log(elem);
console.log(tooltip);
new HoverIntent({
  elem,
  over() {
    tooltip.style.left = elem.getBoundingClientRect().left + 5 + "px";
    tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + "px";
    tooltip.hidden = false;
  },
  out() {
    tooltip.hidden = true;
  },
});
