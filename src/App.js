import React, {Fragment} from 'react';
import AppMenu from './pages/Header/header';
import Home from './pages/Home/home';
import {Route} from 'react-router-dom';
import Manage from './pages/Manage/manage';
import Tickets from './pages/Tickets/tickets';
import Tours from './pages/Tours/tours';
import CheckOut from './pages/Check Out/check';


const App = () => {
    return (
        <Fragment>
            <AppMenu/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/manage' component={Manage}/>
            <Route exact path='/tickets' component={Tickets}/>
            <Route exact path='/tours' component={Tours}/>
            <Route exact path='/check' component={CheckOut}/>
        </Fragment>
    );
}

export default App;
