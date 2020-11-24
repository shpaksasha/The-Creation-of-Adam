import React, {Fragment} from 'react';
import AppMenu from './pages/Header/header';
import Home from './pages/Home/home';
import {Route} from 'react-router-dom';
import Manage from './pages/Manage/manage';




const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/manage' component={Manage}/>
        </Fragment>
    );
}

export default App;
