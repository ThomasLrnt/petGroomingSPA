import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import '../index.css';


class Kitty extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      baseUrl: "https://api.thecatapi.com/v1/images/search",
      nbKitties: 10,
      kitties: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    for(let i = 0 ; i < this.state.nbKitties ; i++){
      fetch(this.state.baseUrl)
      .then(response => response.json())
      .then(parsedJSON => this.setState({kitties:this.state.kitties.concat(
        {
        src: parsedJSON[0].url,
        thumbnail: parsedJSON[0].url,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
       }) 
      }))
      .catch(err => console.error(err))
    }
  }

  render(){
    return(
      <div class="gallerie">
                <Gallery images={this.state.kitties}/>                
                <Button variant="secondary" onClick={this.componentDidMount}> Encore ? </Button>            
      </div>
    )
  }
}

export default Kitty;