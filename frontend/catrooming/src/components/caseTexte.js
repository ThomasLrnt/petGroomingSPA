import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';

class CaseTexte extends Component {
 
    render (){
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.Id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.Titre}</Card.Title>
                        <Card.Text>
                            {this.props.Texte}
                        </Card.Text>
                        <Button variant="secondary" href={this.props.Lien}>En savoir plus</Button>
                    </Card.Body>
                    </Card>
            </div>
        );
    }
}

export default CaseTexte;