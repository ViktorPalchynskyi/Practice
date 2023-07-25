const test = document.querySelector(".square");

const centerX = document.documentElement.clientWidth / 2;
const centerY = document.documentElement.clientHeight / 2;

const elem = document.elementFromPoint(centerX, centerY);
elem.style.background = "skyblue";

function getCoordinate(elem) {
  const { top, right, bottom, left } = elem.getBoundingClientRect();

  return {
    top: top + window.scrollY,
    right: right + window.scrollX,
    bottom: bottom + window.scrollY,
    left: left + window.scrollX,
  }
}

function createMessageUnder(elem, html) {
  const message = document.createElement("div");
  message.style.cssText = "position: absolute; color: violet;";

  const { left, bottom } = getCoordinate(elem);
  message.style.left = `${left}px`;
  message.style.top = `${bottom}px`;

  console.log('createMessageUnder1 ==> left, bottom', left, bottom);

  message.innerHTML = html;

  return message;
}

const message = createMessageUnder(elem, "Idi nahoy suka, savali evalo blat`");

console.log(message);

document.body.append(message);
// setTimeout(() => message.remove(), 5000);
