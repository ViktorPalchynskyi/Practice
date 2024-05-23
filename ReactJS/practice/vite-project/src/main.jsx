import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { Test } from './Test.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Test />);
