const form = document.querySelector('form');
const div = document.querySelector('div');
const p = document.querySelector('p');

// form.addEventListener('click', (e) => {
//     console.log(`FORM currentTarget:${e.currentTarget} - target:${e.target}`)
// }, true);
// div.addEventListener('click', (e) => {
//     // e.stopPropagation();
//     console.log(`DIV currentTarget:${e.currentTarget} - target:${e.target}`)
// }, true);
// p.addEventListener('click', (e) => {
//     // e.stopImmediatePropagation();
//     console.log(`P currentTarget:${e.currentTarget} - target:${e.target}`)
// }, true);

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener(
    'click',
    (e) => alert(`Погружение: ${elem.tagName}`),
    true
  );
  elem.addEventListener('click', (e) => alert(`Всплытие: ${elem.tagName}`));
}
