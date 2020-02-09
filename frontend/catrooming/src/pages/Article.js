import React,{Component} from 'react';
import MonArticle from '../components/monArticle';

class Article extends Component {
    render() {
        return (
            <div >
                <MonArticle
                    Title="Pourquoi faire toiletter son chat ?"
                    Texte="On a habituellement l’idée que le chat s’« autotoilette » et que cette activité qui couvre une bonne partie de sa journée est suffisante. Détrompez-vous, le toilettage du chat, au même titre que celui du chien est indispensable pour vous assurer de la bonne santé et du bien-être de votre compagnon. En effet, il s’agit d’un moment qui permet d’examiner son corps en détails et de détecter un éventuel problème. De plus, le toilettage prévient de nombreuses infections dues au manque d’hygiène (griffes trop longues, boules de poils dans l’estomac,…). Parallèlement, le toilettage permet de maintenir un bon niveau d’hygiène chez votre animal et d’augmenter sa reconnaissance envers vous. Enfin, le toilettage est un moment d’intimité avec votre animal, qui renforcera votre relation, n’hésitez donc pas à prendre soin de lui entre les différentes séances en salon, au même titre que vous vous lavez les cheveux entre vos rendez-vous chez le coiffeur !
                    
                    Nous proposons également un service de massage et de spa pour votre compagnon à quatre pattes, une technique idéale pour réduire son stress ou son anxiété par le soin. Ce service renforce également la vitalité et la forme de votre chat grâce au savoir-faire de nos spécialistes.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis cursus leo, vel ultrices lacus. Etiam ornare, elit sed faucibus tristique, dolor enim feugiat leo, ut vulputate turpis tellus non lacus. Sed ultricies, augue eget euismod malesuada, dui tellus ultrices nulla, quis rutrum odio arcu eu tellus. Integer euismod sem eget erat consectetur, sit amet malesuada arcu sollicitudin. Sed venenatis tellus sed lectus sollicitudin cursus. Curabitur faucibus, ex sit amet cursus efficitur, justo tellus bibendum elit, nec vulputate magna dui iaculis mauris. Mauris iaculis orci eros, at rutrum neque tempor eu. Integer sed commodo neque, quis auctor magna. Donec et lectus sit amet justo rutrum fermentum. Duis quis justo et velit semper egestas vel vitae lectus. Sed velit sem, gravida vitae facilisis vitae, luctus nec diam. Aenean lacinia convallis ultrices. Nullam felis dui, rhoncus quis ex volutpat, vehicula rutrum turpis. Phasellus aliquam nunc orci, non ornare quam feugiat eu. Donec vehicula varius tristique."
                    Author="Thomas LAURENT, conseiller bien-être félin"
                    Lien="Home"
                />
            </div>
        );
    }
}

export default Article;