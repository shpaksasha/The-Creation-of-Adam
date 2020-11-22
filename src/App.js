import React, {Fragment} from 'react';
import AppMenu from './pages/Header/header';
import Home from './pages/Home/home';
import {Route} from 'react-router-dom';




const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>

        </Fragment>
    );
}

export default App;
