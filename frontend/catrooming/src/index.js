import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Importation des pages et des composants
import './index.css';
import Routeur from './pages/routes';
//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
        <Routeur />,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
