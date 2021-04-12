import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        compteurs: [
            { id: 1, valeur:4},
            { id: 2, valeur:3},
            { id: 3, valeur:0},
        ]
    }

    delete = id => {
        // console.log("delete", id)
        const compteurClone = [...this.state.compteurs];
        // console.log("compteurClone", compteurClone);
        // console.log("compteurClone[id-1]", compteurClone[id-1]);


        compteurClone[id - 1].valeur--;
        // console.log("compteurClone[id-1]", compteurClone[id - 1]);

        this.setState({compteurs: compteurClone})
    }

    add = objet => {
        // console.log("add", objet);
        const index = this.state.compteurs.indexOf(objet);

        const compteurClone = [...this.state.compteurs];
        
        console.log(compteurClone[index]);

        compteurClone[index] = { ...objet };
        
        compteurClone[index].valeur++;
        
        // console.log(compteurClone);
        this.setState({ compteurs: compteurClone })
    }
        
        
    render() { 
        return (
            <React.Fragment>
                {this.state.compteurs.map(compteur => {
                    return (
                        <Counter
                        key={compteur.id}
                        compteur={compteur}
                        onDelete={this.delete}
                        onAdd={this.add}
                        />
                    )
                })}
            </React.Fragment>
        );
    }
}
 
export default Counters;