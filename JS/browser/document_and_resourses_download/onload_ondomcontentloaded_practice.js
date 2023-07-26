const img = document.querySelector('img');

console.log(`ready state begining: ${document.readyState}`);

document.addEventListener('readystatechange', () => {
    console.log(`ready state chagnged to ==> ${document.readyState}`);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready');
    // alert(`img size: ${img.offsetWidth}x${img.offsetHeight}`);
});

window.onload = () => {
    console.log('Page loaded');
    // alert(`img123 size: ${img.offsetWidth}x${img.offsetHeight}`);
};

window.onunload = () => {
    navigator.sendBeacon('/analytics', JSON.stringify({ name: 'Viktor', age: 25 }));
};

window.onbeforeunload = () => false;