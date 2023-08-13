const add = document.getElementById('add');
const clear = document.getElementById('clear');

// let deleteRequest = indexedDB.deleteDatabase('booksDb');

add.addEventListener('click', addBook);
clear.addEventListener('click', clearBooks);

let db;
init();
async function init() {
  db = await idb.openDb('booksDb', 1, (connect) => {
    const books = connect.createObjectStore('books', { keyPath: 'name' });
    const index = books.createIndex('price_idx', 'price');
    console.log('books, index', {
      books,
      index,
    });
  });
  console.log(db);
  list();
}

async function list() {
  const tx = db.transaction('books');
  const bookStore = tx.objectStore('books');
  const books = await bookStore.getAll();

  if (books.length) {
    listElem.innerHTML = books
      .map(
        (book) => `<li>
				название: ${book.name}, цена: ${book.price}
			</li>`
      )
      .join('');
  } else {
    listElem.innerHTML = '<li>Книг пока нет. Пожалуйста, добавьте книги.</li>';
  }
}

async function clearBooks() {
  const tx = db.transaction('book', 'readwrite');
  await tx.objectStore('book').clear();
  await list();
}

async function addBook() {
  const name = prompt('Название книги');
  const price = +prompt('Цена книги');
  const tx = db.transaction('books', 'readwrite');

  try {
    await tx.objectStore('books').add({ name, price });
    await getIndex();
    await list();
  } catch (e) {
    if (err.name == 'ConstraintError') {
      alert('Такая книга уже существует');
      await addBook();
    } else {
      throw err;
    }
  }
}

async function getIndex() {
    const tx = db.transaction('books');
    const books = tx.objectStore('books');
    const priceIndex = books.index('price_idx');
    const allTen = await priceIndex.getAll(10);

    console.log(allTen);
}