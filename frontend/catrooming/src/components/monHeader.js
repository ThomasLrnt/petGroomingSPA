import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class MonHeader extends React.Component {

    constructor(props){
        super(props);
    }


    render (){
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Cat Rooming Paris</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="/gallerie">Gallerie</Nav.Link>
                            <Nav.Link href="/article">Article</Nav.Link>
                            <Nav></Nav>
                            <Nav.Link href="/adresse">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(MonHeader);
