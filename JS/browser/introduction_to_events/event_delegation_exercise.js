const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  const target = event.target;
  const pane = target.closest(".pane");

  if (pane && target.classList.contains("remove-button")) {
    pane.remove();
  }
});

const tree = document.getElementById("tree");

for (const li of tree.querySelectorAll("li")) {
  const span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}

tree.addEventListener("click", (event) => {
  if (event.target.tagName !== "SPAN") return;

  const childrenContainer = event.target.parentNode.querySelector("ul");

  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
});

const grid = document.getElementById("grid");

function sortRows(sortType, thIndex) {
  const tBody = grid.querySelector("tbody");
  const rows = Array.from(tBody.rows);

  const sortNumbers = (thIndex) => (firstRow, secondRow) =>
    Number(firstRow.cells[thIndex].innerHTML) -
    Number(secondRow.cells[thIndex].innerHTML);
  const sortStrings = (thIndex) => (firstRow, secondRow) =>
    firstRow.cells[thIndex].innerHTML > secondRow.cells[thIndex].innerHTML
      ? 1
      : -1;
  const sortFunctions = {
    number: sortNumbers,
    string: sortStrings,
  };

  tBody.append(...rows.sort(sortFunctions[sortType](thIndex)));
}

grid.addEventListener("click", (e) => {
  if (e.target.tagName !== "TH") return;

  const sortType = e.target.dataset.type;
  const thIndex = e.target.cellIndex;

  sortRows(sortType, thIndex);
});

document.addEventListener('mouseover', (e) => {
    const tooltipText = e.target.dataset.tooltip;

    if (!tooltipText) return;

    const { top, left } = e.target.getBoundingClientRect();
    const tooltip = document.createElement('div');

    tooltip.innerHTML = tooltipText;
    tooltip.classList.add('tooltip');
    document.body.append(tooltip);

    let leftPoint = left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;

    if (leftPoint < 0) leftPoint = 0;

    let topPoint = top - tooltip.offsetHeight - 5;

    if (topPoint < 0) {
        topPoint = top + e.target.offsetHeight + 5;
    }

    tooltip.style.top = `${topPoint}px`;
    tooltip.style.left = `${leftPoint}px`;

});

document.addEventListener('mouseout', (e) => {
    const tooltipText = e.target.dataset.tooltip;

    if (!tooltipText) return;

    const tooltip = document.querySelector('.tooltip');

    if (!tooltip) return;

    tooltip.remove();
});