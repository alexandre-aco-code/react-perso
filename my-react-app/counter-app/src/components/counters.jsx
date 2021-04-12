import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        compteurs: [
            { id: 1, valeur:4},
            { id: 2, valeur:3},
            { id: 3, valeur:0},
            { id: 4, valeur:18},
        ]
    }
    render() { 
        return (
            <React.Fragment>
                {this.state.compteurs.map(compteur => {
                    return <Counter key={compteur.id} valeur={compteur.valeur}/>
                })}
            </React.Fragment>
        );
    }
}
 
export default Counters;