import React,{Component} from 'react';
import MonArticle from '../components/monArticle';

class Article extends Component {
    render() {
        return (
            <div >
                <MonArticle
                    Title="Pourquoi les massages et le toilettage leur font tant de bien ?"
                    Texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis cursus leo, vel ultrices lacus. Etiam ornare, elit sed faucibus tristique, dolor enim feugiat leo, ut vulputate turpis tellus non lacus. Sed ultricies, augue eget euismod malesuada, dui tellus ultrices nulla, quis rutrum odio arcu eu tellus. Integer euismod sem eget erat consectetur, sit amet malesuada arcu sollicitudin. Sed venenatis tellus sed lectus sollicitudin cursus. Curabitur faucibus, ex sit amet cursus efficitur, justo tellus bibendum elit, nec vulputate magna dui iaculis mauris. Mauris iaculis orci eros, at rutrum neque tempor eu. Integer sed commodo neque, quis auctor magna. Donec et lectus sit amet justo rutrum fermentum. Duis quis justo et velit semper egestas vel vitae lectus. Sed velit sem, gravida vitae facilisis vitae, luctus nec diam. Aenean lacinia convallis ultrices. Nullam felis dui, rhoncus quis ex volutpat, vehicula rutrum turpis. Phasellus aliquam nunc orci, non ornare quam feugiat eu. Donec vehicula varius tristique."
                    Author="Thomas LAURENT, conseiller bien-être félin"
                    Lien="Home"
                />
            </div>
        );
    }
}

export default Article;