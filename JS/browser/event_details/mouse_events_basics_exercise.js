const ul = document.getElementById('ul');

let li;

ul.addEventListener('click', (e) => {
    if (li && (!e.ctrlKey || !e.metaKey)) li.classList.remove('selected'); 

    li = e.target.closest('li'); 

    if (li && ul.contains(li)) li.classList.add('selected');

});
