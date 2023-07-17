const div = document.body.firstElementChild;
const ul = div.nextElementSibling;
const li = ul.lastElementChild;
const table = ul.nextElementSibling;

console.log('div', div);
console.log('ul', ul);
console.log('li', li);
console.log('table', table);
console.log('table', table.rows);

for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    console.log(row.cells)
    row.cells[i].style.backgroundColor = 'red';
}