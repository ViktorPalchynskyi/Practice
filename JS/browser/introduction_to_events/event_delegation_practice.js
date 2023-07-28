const table = document.querySelector('table');

let selectedTd;

table.addEventListener('click', (e) => {
    const td = e.target.closest('td');

    if (!td) return;

    if (!table.contains(td)) return;

    highlight(td);
});

function highlight(elem) {
    if (selectedTd) {
        selectedTd.classList.remove('highlight');
    }

    selectedTd = elem;
    selectedTd.classList.add('highlight');
}

const menu = document.getElementById('menu');

class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    onClick(event) {
        const action = event.target.dataset.action;
        
        if (action) {
            this[action]();
        }
    }

    save() {
        alert('save');
    }

    load() {
        alert('load');
    }

    search() {
        alert('search');
    }
};

new Menu(menu);

document.addEventListener('click', (event) => {
    const id = event.target.dataset.toggleId;
    
    if (id) {
        const elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    }

    if (event.target.dataset.counter !== undefined) {
        event.target.value++;
    }
});
