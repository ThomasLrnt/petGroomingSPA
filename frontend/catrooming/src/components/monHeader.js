import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import catHeader from '../ressources/catHeader.jpg';
import LogoHeader from '../fonctions/logoHeader';

class MonHeader extends Component {

    constructor(props){
        super(props);
    }


    render (){
        return (
            <div id="containerHeader">
                <LogoHeader id="nav" />
                <div >
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Accueil</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="/gallerie">Nos plus jolies photos</Nav.Link>
                                <Nav.Link href="/article">Article</Nav.Link>
                                <Nav.Link href="/informations">Informations</Nav.Link>
                                <Nav.Link href="/adresse">Contactez-nous !</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default withRouter(MonHeader);

