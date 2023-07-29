document.querySelector('a').addEventListener('click', (e) => e.preventDefault());

const elem = document.getElementById('elem');

elem.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Button context menu');
});

document.addEventListener('contextmenu', (e) => {
    console.log(e.defaultPrevented);
    if(e.defaultPrevented) return;
    e.preventDefault();


    alert('Document context menu')
});