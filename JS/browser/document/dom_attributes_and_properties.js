const widgetName = document.querySelector('[data-widget-name]').dataset.widgetName;
let links = document.querySelectorAll('a');

console.log(widgetName);

for (const link of links) {
    let href = link.getAttribute('href');

    if (!href) continue;

    if (!href.includes('://')) continue;

    if (href.startsWith('http://internal.com')) continue;

    link.style.color = 'coral';
}