import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/characters"  component={Characters} />
            <Route path="/comics"  component={Comics} />
        </BrowserRouter>
    );
}