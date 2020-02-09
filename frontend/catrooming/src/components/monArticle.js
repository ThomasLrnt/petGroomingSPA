import React,{Component} from 'react';
import {Button} from 'react-bootstrap';

class MonArticle extends Component {
 
    render (){
        return (
            <div class="container">
                <h2>Article</h2><br/>
                <h1>{this.props.Title}</h1><br/>
                <p>{this.props.Texte}</p><br/>
                <p>{this.props.Author}</p><br/>
                <Button variant="secondary" href="/">Retour</Button>
            </div>
        );
    }
}

export default MonArticle;