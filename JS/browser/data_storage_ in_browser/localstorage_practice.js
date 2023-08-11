localStorage.setItem('theme', 'dark');
localStorage.setItem('obj', JSON.stringify({ name: 'Viktor', surname: 'Palchynskyi' }));

console.log(localStorage);

// alert(JSON.parse(localStorage.getItem('obj')).surname);

for (let i = 0; i < localStorage.length; i++) {
    console.log(`key:${localStorage.key(i)} -> value:${localStorage.getItem(localStorage.key(i))}`);    
}

// window.onstorage = (event) => {
//     if (event.key !== 'now') return;

//     alert(`${event.key}:${event.newValue} at ${event.url} oldValue:${event.oldValue}; storageArea:${event.storageArea}`)
// };

localStorage.setItem('now', Date.now());