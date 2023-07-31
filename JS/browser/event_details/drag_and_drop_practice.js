const ball = document.getElementById("ball");
let currentDroppable = null;

ball.addEventListener("mousedown", (e) => {
  const shiftX = e.clientX - ball.getBoundingClientRect().left;
  const shiftY = e.clientY - ball.getBoundingClientRect().top;

  ball.style.position = "absolute";
  ball.style.zIndex = 1000;

  document.body.append(ball);

  function moveAt(pageX, pageY) {
    ball.style.left = `${pageX - shiftX}px`;
    ball.style.top = `${pageY - shiftY}px`;
  }

  moveAt(e.clientX, e.clientY);

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);

    ball.hidden = true;

    const elemBelow = document.elementFromPoint(event.clientX, event.clientY);

    ball.hidden = false;

    if (!elemBelow) return;

    const droppableBelow = elemBelow.closest(".droppable");

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        leaveDroppagle(currentDroppable);
      }

      currentDroppable = droppableBelow;

      if (currentDroppable) {
        enterDroppagle(currentDroppable);
      }
    }
  }

  function leaveDroppagle(elem) {
    elem.style.background = "";
  }

  function enterDroppagle(elem) {
    elem.style.background = "skyblue";
  }

  const mouseController = new AbortController();
  document.addEventListener("mousemove", onMouseMove, {
    signal: mouseController.signal,
  });

  ball.addEventListener("mouseup", () => mouseController.abort(), {
    signal: mouseController.signal,
  });
});

ball.ondragstart = function () {
  return false;
};
