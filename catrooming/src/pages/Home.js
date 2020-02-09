import React from 'react';
import CaseTexte from '../components/caseTexte';
import {Table} from 'react-bootstrap';

class Home extends React.Component {
    
    render() {
        return (
            <div class="container">

                <CaseTexte 
                    Id="Un salon au petit soin pour votre chat !"
                    Titre="Qui sommes nous ?"
                    Texte="Un salon de toilettage insolite situé au 37 quai de Grenelle, à quelques pas de la tour Eiffel. Ce que nous recherchons avant tout, c'est le bien-être animal. C'est pour ça que notre établissement spécialisé dans les soins félins accueille les chats pour leur apporter le nécessaire à leur confort."
                    Lien="/Informations"
                    Boutton="En savoir plus"
                />
                <CaseTexte 
                    Id="Article"
                    Titre="Pourquoi les massages et le toilettage leur font tant de bien ?"
                    Texte="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis cursus leo, vel ultrices lacus. Etiam ornare, elit sed faucibus tristique, Nullam felis dui, rhoncus quis ex volutpat, vehicula rutrum turpis. Phasellus aliquam nunc orci, non ornare quam feugiat eu. Donec vehicula varius tristique. ..."
                    Lien="/Article"
                    Boutton="En savoir plus"
                />
            </div>
        );
    }
}

export default Home;