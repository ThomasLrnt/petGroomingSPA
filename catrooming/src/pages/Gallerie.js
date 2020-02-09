import React from 'react';
import Kitty from '../fonctions/kitty';

class Gallerie extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Gallerie</h1>
                <Kitty />
            </div>
        );
    }
}

export default Gallerie;