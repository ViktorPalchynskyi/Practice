import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Film } from './components/Film/Film.jsx';
import { Tracker } from './components/Tracker/Tracker.jsx';
import { RootRout } from './routes/RootRout.jsx';
import { Placeholder } from './components/Placeholder/Placeholder.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootRout />,
        children: [
            { path: '/', element: <App /> },
            { path: '/film', element: <Film /> },
            { path: '/tracker', element: <Tracker /> },
            { path: '/:id', element: <Placeholder/> }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
