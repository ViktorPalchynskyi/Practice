// получить одну книгу
books.get('js');

// получить книги с 'css' <= id <= 'html'
books.getAll(IDBKeyRange.bound('css', 'html'));

// получить книги с id < 'html'
books.getAll(IDBKeyRange.upperBound('html', true));

// получить все книги
books.getAll();

// получить все ключи, гдe id > 'js'
books.getAllKeys(IDBKeyRange.lowerBound('js', true));

