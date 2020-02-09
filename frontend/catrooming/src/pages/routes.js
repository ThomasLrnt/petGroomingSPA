import React,{Component} from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Adresse from './Adresse';
import Article from './Article';
import Home from './Home';
import Gallerie from './Gallerie';
import MonHeader from '../components/monHeader';
import MonFooter from '../components/monFooter';


class Routeur extends Component {

    constructor(props){
        super(props);
    } 

    render () {
        return(
        <BrowserRouter>
            <MonHeader />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/article" exact component={Article}></Route>
                <Route path="/gallerie" exact component={Gallerie}></Route>
                <Route path="/adresse" exact component={Adresse}></Route>
            </Switch>
            <MonFooter />
        </BrowserRouter>
        );
    } 
}

export default Routeur;