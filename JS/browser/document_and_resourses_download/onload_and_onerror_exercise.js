function preloadImages(sources, callback) {
  let count = 0;

  const onLoad = () => {
    count++;

    if (count === sources.length) callback();
  };

  for (const source of sources) {
    const img = document.createElement('img');
    img.onload = img.onerror = onLoad;
    img.src = source;
  }
}

let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg",
];

for (let i = 0; i < sources.length; i++) {
  sources[i] += "?" + Math.random();
}

function testLoaded() {
  let widthSum = 0;
  for (let i = 0; i < sources.length; i++) {
    let img = document.createElement("img");
    img.src = sources[i];
    widthSum += img.width;
  }
  alert(widthSum);
}

preloadImages(sources, testLoaded);
