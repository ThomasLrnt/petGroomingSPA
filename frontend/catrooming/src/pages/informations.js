import React from 'react';
import {Table} from 'react-bootstrap';
import Plan from '../ressources/map.JPG';
import {Tabs,Tab,Container,Row,Col} from 'react-bootstrap';

class Informations extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Informations pratiques</h1><br></br>

                <h2>Nos services :</h2><br></br>
                    <p>Pour le bien-être et l'épanouïssement de vos petits animaux à quatre pattes, nous proposons les soins suivants :</p>
                    <Tabs defaultActiveKey="Taille" id="uncontrolled-tab-example">
                        <Tab eventKey="Taille" title="Taille des griffes">
                            <p>Même avec un griffoir ou un tapis à l'intérieur, nos félins ne s'usent pas les griffes aussi rapidement qu'ils le devraient. Nos petits animaux ont besoin d'un petit coup de pouce 
                                Aidons le à se sentir bien dans ses coussinets !</p>
                        </Tab>
                        <Tab eventKey="Brushing" title="Toilettage et Brushing">
                            <p>Pellage ras, étoffé, fin ? Coussinets abimés ou soyeux ? Notre expérience et matériel le mieux adapté sont à votre disposition. C'est aussi le moment du nettoyage des oreilles et des coussinets.
                            Votre minou se sentira au poil !</p>
                        </Tab>
                        <Tab eventKey="Massage" title="Massages et Spa">
                            <p>C'est là notre plus grande préoccupation : le bien-être de votre animal de compagnie. 
                                Nos massages et spas aux lotions aromatisées aussi bonnes pour son poil, sa peau et son moral ne le laissera pas de marbre... Et vous non plus !</p>
                        </Tab>
                    </Tabs><br></br><br></br>
                    <h2>Nos formules et tarifs :</h2>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Formule</th>
                            <th>Durée approximative</th>
                            <th>Tarif</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Taille</td>
                            <td>10 min</td>
                            <td>8€</td>
                            </tr>
                            <tr>
                            <td>Brushing</td>
                            <td>30 min</td>
                            <td>40€</td>
                            </tr>
                            <tr>
                            <td>Taille et Brushing</td>
                            <td>45 min</td>
                            <td>42€</td>
                            </tr>
                            <tr>
                            <td>Massage</td>
                            <td>50 min</td>
                            <td>60€</td>
                            </tr>
                            
                            <tr>
                            <td>Formule complète</td>
                            <td>1h30</td>
                            <td>90€</td>
                            </tr>
                        </tbody>
                     </Table>
                <br></br><br></br>
                <h2>Nous trouver :</h2><br></br>
                <Container>
                    <Row>
                        <Col ><br></br>
                            <p>Au 37 Quai de Grenelle,</p>
                                <p>75015 Paris</p>
                                <p>proche du métro Bir Hackeim</p><br></br>
                            <p>Du lundi au vendredi de 9h à 20h, et le weekend sur rendez-vous</p><br></br>
                        </Col>
                        <Col>
                            <img id="plan" src={Plan} alt="Plan"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Informations;