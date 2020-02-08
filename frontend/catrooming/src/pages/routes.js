import React from 'React';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import Adresse from './Adresse';
import Gallerie from './Gallerie';
import NotFound from './NotFound'

export default () => (
    <switch>
        <route path="/" exact component={Home}></route>
        <route path="/article" exact component={Article}></route>
        <route path="/adresse" exact component={Adresse}></route>
        <route path="/gallerie" exact component={Gallerie}></route>
        <route component={NotFound}></route>
    </switch>
)