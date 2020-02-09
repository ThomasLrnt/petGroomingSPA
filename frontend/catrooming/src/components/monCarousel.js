import React,{Component} from 'react';
import Carousem from 'react-bootstrap';
import Kitty from '../fonctions/kitty';

class MonCarousel extends Component {
 
    render (){
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MonCarousel;