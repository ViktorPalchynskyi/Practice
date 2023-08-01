const thumb = document.querySelector('.thumb');
const slider = document.getElementById('slider');

thumb.addEventListener('mousedown', (event) => {
  event.preventDefault();

  const shiftX = event.clientX - thumb.getBoundingClientRect().left;
  const thumbController = new AbortController();

  thumb.addEventListener('mousemove', onMouseMove, {
    signal: thumbController.signal,
  });
  thumb.addEventListener('mouseup', onMouseUp, {
    signal: thumbController.signal,
  });

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;

    const rightEdge = slider.offsetWidth - thumb.offsetWidth;

    if (newLeft > rightEdge) newLeft = rightEdge;

    thumb.style.left = `${newLeft}px`;
  }

  function onMouseUp() {
    thumbController.abort();
  }
});

let isDraggin = false;

document.addEventListener('mousedown', (event) => {
  const dragElem = event.target.closest('.draggable');

  if (!dragElem) return;

  let shiftX, shiftY;
  const documentController = new AbortController();

  dragElem.ondragstart = () => false;

  startDrag(dragElem, event.clientX, event.clientY);

  function startDrag(elem, clientX, clientY) {
    if (isDraggin) return;

    isDraggin = true;
    document.addEventListener('mousemove', onMouseMove, {
      signal: documentController.signal,
    });
    elem.addEventListener('mouseup', onMouseUp, {
      signal: documentController.signal,
    });

    shiftX = clientX - elem.getBoundingClientRect().left;
    shiftY = clientY - elem.getBoundingClientRect().top;

    elem.style.position = 'fixed';

    moveAt(clientX, clientY);
  }

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function onMouseUp() {
    finishDrag();
  }

  function finishDrag() {
    if (!isDraggin) return;

    isDraggin = false;
    dragElem.style.top = `${parseInt(dragElem.style.top) + scrollY}px`;
    dragElem.style.position = 'absolute';

    documentController.abort();
  }

  function moveAt(clientX, clientY) {
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    const newBottom = newY + dragElem.offsetHeight;

    if (newBottom > document.documentElement.clientHeight) {
      const docBottom = document.documentElement.getBoundingClientRect().bottom;
      const scrollY = Math.min(docBottom - newBottom, 10);

      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);

      newY = Math.min(newY, document.documentElement.clientHeight - dragElem.offsetHeight);
    }

    if (newY < 0) {
      const scrollY = Math.min(-newY, 10);

      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, -scrollY);
      newY = Math.max(newY, 0);
    }

    if (newX < 0) newX = 0;

    if (newX > document.documentElement.clientWidth - dragElem.offsetWidth) {
      newX = document.documentElement.clientWidth - dragElem.offsetWidth;
    }

    dragElem.style.left = `${newX}px`;
    dragElem.style.top = `${newY}px`;
  }
});
