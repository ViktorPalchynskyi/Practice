// function populate() {
//     while(true) {
//       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//       if (windowRelativeBottom > document.documentElement.clientHeight + 100) return;
//       document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`);
//     }
//   }

//   window.addEventListener('scroll', populate);

//   populate();

// const arrow = document.getElementById('arrowTop');

// window.addEventListener('scroll', function() {
//     console.log({
//         pageXOffset: pageXOffset,
//         scrollX,
//         res: scrollX < document.documentElement.clientHeight
//     });
//     arrow.hidden = (scrollX < document.documentElement.clientHeight);
//   });

// window.addEventListener('scroll', () =>  arrow.hidden = (scrollY < document.documentElement.clientHeight));

// arrow.addEventListener('click', () => window.scrollTo(scrollY, 0));

function isVisible(elem) {
  const { bottom, top } = elem.getBoundingClientRect();

  const windowHeight = document.documentElement.clientHeight;

  const isTopVisible = top > 0 && top < windowHeight;
  const isBottomVisible = bottom > 0 && bottom < windowHeight;

  return isTopVisible || isBottomVisible;
}

function showVisible() {
  console.log('showVisible');
  for (const img of document.querySelectorAll('img')) {
    console.log('img', img);
    const realSrc = img.dataset.src;

    if (!realSrc) continue;

    if (isVisible(img)) {
      img.src = realSrc;
      img.dataset.src = '';
    }
  }
}

window.addEventListener('scroll', showVisible);
