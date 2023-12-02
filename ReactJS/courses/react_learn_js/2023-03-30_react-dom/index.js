import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="root"></div>';
const root = createRoot(document.getElementById('root'));

root.render('Konnichiwa, Sekai!');