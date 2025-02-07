import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap';

class CaseTexte extends Component {
 
    render (){
        return (
            <div class="txt">
                <Card >
                    <Card.Header>{this.props.Id}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.Titre}</Card.Title>
                        <Card.Text>
                            {this.props.Texte}
                        </Card.Text>
                        <Button variant="secondary" href={this.props.Lien}>{this.props.Boutton}</Button>
                    </Card.Body>
                    </Card>
            </div>
        );
    }
}

export default CaseTexte;