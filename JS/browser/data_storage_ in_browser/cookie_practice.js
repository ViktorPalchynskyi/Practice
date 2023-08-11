let date = new Date(Date.now() + 2  * (24 * 60 * 60 * 1000));
date = date.toUTCString();
console.log('date', date);

document.cookie = `${encodeURIComponent('mark')}=${encodeURIComponent('subaru')}; path=\\; expires=${date}; secure; samesite=lax`;

console.log(document.cookie);