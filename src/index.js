import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route}  from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';
import Welecome from './components/Welcome';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';

const Home = () => {
    return <h1>Home component</h1>
}
const About = () => {
    return <h1>About component</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar></NavBar>
            <Route exact path="/" component={Welecome} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/articles/create" component={CreateArticle} />
            <Footer />
        </div>
       
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
