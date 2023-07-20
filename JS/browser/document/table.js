function createTable(target, data) {
  let table = `
        <table>
            <caption>A product list</caption>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Color</th>
                <th>Description</th>
            </tr>
    `;

    for (const item of data) {
        const itemValues = Object.values(item);

        table += `<tr>`;

        for (const value of itemValues) {
            table += `<td>${value}</td>`
        }

        table += `</tr>`;
    }

    table += `
        <tr>
            <td colspan="2" rowspan="2">Total 1</td>
            <td colspan="2" rowspan="2">Total 2</td>
        </tr>
    </table>
    `;
    
    target.innerHTML = table;
}

const data = [
  {
    name: 'phone',
    price: 12,
    color: 'red',
    description: 'some stuff about product',
  },
  {
    name: 'laptop',
    price: 30,
    color: 'blue',
    description: 'some stuff about product',
  },
  {
    name: 'car',
    price: 300,
    color: 'blue',
    description: 'some stuff about product',
  },
  {
    name: 'boat',
    price: 3000,
    color: 'blue',
    description: 'some stuff about product',
  },
];
const target = document.getElementById('table');

createTable(target, data);