import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useResize } from 'hooks';
import ScreenContext from 'contexts/screen';

import AppRouter from '../AppRouter';

const App = () => {
    const { screen } = useResize();

    return (
        <ScreenContext.Provider value={{ screen }}>
            <Router>
                <AppRouter />
            </Router>
        </ScreenContext.Provider>
    );
};

export default App;
