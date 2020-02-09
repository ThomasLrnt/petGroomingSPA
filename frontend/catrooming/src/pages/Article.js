import React,{Component} from 'react';
import MonArticle from '../components/monArticle';
import Chat from '../ressources/animal-3183731_1920.jpg';
import Kitten from '../ressources/kitten.jpg';
import {Image,Container,Row,Col} from 'react-bootstrap';

class Article extends Component {
    render() {
        return (
            <div >
                <Container>
                    <Row>
                        <Col>
                            <br></br><br></br>
                            <Image id="chat" src={Chat}/>
                            <br></br>
                            <Image id="chat" src={Kitten}/>
                        </Col>
                        <Col>
                            <MonArticle
                                Title="Pourquoi faire toiletter son chat ?"
                                Texte="On a habituellement l’idée que le chat s’« autotoilette » et que cette activité qui couvre une bonne partie de sa journée est suffisante. Détrompez-vous, le toilettage du chat, au même titre que celui du chien est indispensable pour vous assurer de la bonne santé et du bien-être de votre compagnon. En effet, il s’agit d’un moment qui permet d’examiner son corps en détails et de détecter un éventuel problème. De plus, le toilettage prévient de nombreuses infections dues au manque d’hygiène (griffes trop longues, boules de poils dans l’estomac,…). Parallèlement, le toilettage permet de maintenir un bon niveau d’hygiène chez votre animal et d’augmenter sa reconnaissance envers vous. Enfin, le toilettage est un moment d’intimité avec votre animal, qui renforcera votre relation, n’hésitez donc pas à prendre soin de lui entre les différentes séances en salon, au même titre que vous vous lavez les cheveux entre vos rendez-vous chez le coiffeur !
                                
                                Nous proposons également un service de massage et de spa pour votre compagnon à quatre pattes, une technique idéale pour réduire son stress ou son anxiété par le soin. Ce service renforce également la vitalité et la forme de votre chat grâce au savoir-faire de nos spécialistes."
                                Author="Thomas LAURENT, conseiller bien-être félin"
                                Lien="Home"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Article;