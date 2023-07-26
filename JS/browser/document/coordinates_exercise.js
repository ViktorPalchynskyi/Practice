document.onclick = function (e) {
  const coords = document.getElementById("coords");
  coords.innerHTML = e.clientX + ":" + e.clientY;
};

const field = document.getElementById("field");
// console.log(field.getBoundingClientRect());
const coords = field.getBoundingClientRect();
// console.log(coords);
// console.log(`field 1:${coords.left}:${coords.top}`);
// console.log(`field 2:${coords.right}:${coords.bottom}`);
// console.log(`field 2:${coords.left + field.clientLeft}:${coords.top + field.clientTop}`);
// console.log(`field 3:${coords.right - field.clientLeft}:${coords.bottom - field.clientTop}`);

function getCoords(elem) {
    const { top, right, bottom, left } = elem.getBoundingClientRect();
  
    return {
      top: top + window.scrollY,
      right: right + window.scrollX,
      bottom: bottom + window.scrollY,
      left: left + window.scrollX
    };
  }

function positionAt(anchor, position, elem) {
  const { top, right, bottom, left } = getCoords(anchor);
  const targetPossition = {
    ['top-out']: {
      x: left,
      y: top - elem.offsetHeight,
    },
    ['right-out']: {
      x: right,
      y: top,
    },
    ['bottom-out']: {
      x: left,
      y: bottom,
    },
    ['top-in']: {
      x: left,
      y: top,
    },
    ['right-in']: {
      x: right - elem.offsetWidth,
      y: top,
    },
    ['bottom-in']: {
      x: left,
      y: bottom - elem.offsetHeight,
    },
  };

  elem.style.cssText = `left:${targetPossition[position].x}px; top:${targetPossition[position].y}px;`;
}

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "right-in", "note right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "bottom-in", "note bottom-in");
