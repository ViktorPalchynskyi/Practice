import React from 'react';
import { Home } from './Home/Home';
import { MyContext } from '../hoc/with-context';

function App() {
    return (
        <MyContext.Provider value='some props'>
            <Home />
        </MyContext.Provider>
    );
}

export default App;
