const auto = document.getElementById('auto');
const elem = document.getElementById('elem');

auto.addEventListener('auto-click', (e) => {
    alert(`Auto click ${e.isTrusted}, clientY:${e.clientY}, clientX:${e.clientX}`);
});

auto.addEventListener('click', (e) => {
    alert(`Click ${e.isTrusted}`);
});

// setTimeout(() => {
//     const event = new Event('auto-click', { bubbles: true });
//     auto.dispatchEvent(event);
// }, 5 * 1000);

// setTimeout(() => {
//     const event = new MouseEvent('auto-click', { bubbles: true, clientX: 100, clientY: 100 });
//     auto.dispatchEvent(event);
// }, 5 * 1000);

document.addEventListener('auto-click', () => alert('Bubbled click'));

elem.addEventListener('hello', (e) => alert(e.detail.name));


elem.dispatchEvent(new CustomEvent('hello', { detail: { name: 'Viktor' } }));