import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route}  from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import Welecome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar></NavBar>
            <Route exact path="/" component={Welecome} />
            <Route path="/articles/create" component={CreateArticle} />
            <Route path="/article/:id" component={SingleArticle} />
            <Route path="/login" component={Login} />
            <Footer />
        </div>
       
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
