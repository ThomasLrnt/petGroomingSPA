import React from 'react';
import {Table} from 'react-bootstrap';
import Plan from '../ressources/map.JPG'

class Informations extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Informations pratiques</h1><br></br>

                <h2>Nos offres et tarifs :</h2><br></br>
                    <p>Pour le bien de vos petits animaux, nous vous proposons de leur tailler les petites griffes, 
                        les shampoigner et les coiffer ainsi que de les masser !</p>
                    <p>Voici les prix que nous pratiquons :</p>
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
                <br></br>
                <h2>Nous trouver :</h2><br></br>
                <p>Au 37 Quai de Grenelle,</p>
                    <p>75015 Paris</p>
                    <p>proche du métro Bir Hackeim</p><br></br>
                <p>Du lundi au vendredi de 9h à 20h, et le weekend sur rendez-vous</p><br></br>
                <img src={Plan} alt="Plan"/>
            </div>
        );
    }
}

export default Informations;