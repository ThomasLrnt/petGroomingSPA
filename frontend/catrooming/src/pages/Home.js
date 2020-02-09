import React from 'react';
import CaseTexte from '../components/caseTexte';

class Home extends React.Component {
    render() {
        return (
            <div class="container">
                <CaseTexte 
                    Id={"Un salon de toilletage hors du commun"}
                    Titre={"Qui sommes nous ?"}
                    Texte={"Un salon de toilettage hors du commun implanté au plein coeur des beaux quartiers de paris. Comment ne pas craquer pour ce photos et venir nous rendre visite ?"}
                    Lien={"/Adresse"}
                />
                <CaseTexte 
                    Id={"Article"}
                    Titre={"Pourquoi les massages et le toilettage leur font tant de bien ?"}
                    Texte={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis cursus leo, vel ultrices lacus. Etiam ornare, elit sed faucibus tristique, Nullam felis dui, rhoncus quis ex volutpat, vehicula rutrum turpis. Phasellus aliquam nunc orci, non ornare quam feugiat eu. Donec vehicula varius tristique. ..."}
                    Lien={"/Article"}
                />
            </div>
        );
    }
}

export default Home;