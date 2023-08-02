const div = document.createElement('div');
document.body.append(div);

window.addEventListener('scroll', () => {
    div.innerHTML = `${scrollY}px`;
})