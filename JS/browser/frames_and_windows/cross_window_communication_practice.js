const iframe = document.getElementById('iframe');
const form = document.getElementById('form');
// const doc = iframe.contentDocument;

// iframe.onload = () => {
//   const iframeWindow = iframe.contentWindow;
//   try {
//     const newDoc = iframe.contentDocument;
//     alert(doc === newDoc);
//     console.log('iframe ==>', {
//       iframeWindow,
//       newDoc,
//     });
//   } catch (e) {
//     alert(e);
//   }

//   const div = document.createElement('div');
//   div.style.backgroundColor = 'coral';
//   div.innerHTML = 'My name is Viktor';

//   iframe.contentDocument.body.append(div);
// };

// const timer = setInterval(() => {
//     const newDoc = iframe.contentDocument;
//     alert(doc === newDoc);
//     if (doc === newDoc) return;

//     alert('Opa');
//     clearInterval(timer);
// }, 100)

// console.log({
//     frame: window.frames.win,
//     parent: window.frames.win.parent,
//     top: window.frames.win.top,
// });

console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(iframe);
  iframe.contentWindow.postMessage(this.message.value, '*');
});

// form.onsubmit = function () {
//   iframe.contentWindow.postMessage(this.message.value, '*');
//   return false;
// };
