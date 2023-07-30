document.documentElement.addEventListener('mousedown', (e) => console.log(e.button));

const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    if (e.altKey && e.shiftKey) alert('HOW');

    if (e.ctrlKey) alert('HA HA HA');
});

const bold = document.querySelector('.bold');

bold.addEventListener('mosedown', (e) => e.preventDefault());

document.documentElement.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Fuck yooou');
    return 'Nothing for you';
}); 