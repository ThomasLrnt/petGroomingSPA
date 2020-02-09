import React,{Component} from 'react';
import {Form,Button,Container,Col,Row} from 'react-bootstrap';

class Adresse extends Component {
    render() {
        return (
            <Container>
                <h1>Contactez-nous :</h1><br></br>
                <p>Nous restons à votre écoute et vous répondrons au plus vite !</p><br></br>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput0">
                                <Form.Label>Votre prénom :*</Form.Label>
                                <Form.Control required type="text" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput0">
                                <Form.Label>Votre nom :*</Form.Label>
                                <Form.Control required type="text" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput0">
                                <Form.Label>Votre téléphone :</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                         <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Votre adresse email :*</Form.Label>
                                <Form.Control required type="email" placeholder="nom@exemple.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row><Col>
                    <Form.Group controlId="exampleForm.ControlSelect">
                        <Form.Label>Je souhaite :*</Form.Label>
                        <Form.Control required as="select">
                        <option>prendre un rendez-vous</option>
                        <option>demander un renseignement</option>
                        <option>effectuer un achat chez nous</option>
                        <option>autre chose (préciser en tête du message)</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col></Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Votre message :*</Form.Label>
                        <Form.Control required as="textarea" rows="4" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">Envoyer</Button>
                </Form>
            </Container>    
        );
    }
}

export default Adresse;