import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        compteurs: [
            { id: 1, valeur: 4 },
            { id: 2, valeur: 3 },
            { id: 3, valeur: 0 },
        ],
    };

    
    // incrémenter la valeur du compteur
    delete = (id) => {
        const compteurClone = [...this.state.compteurs];
        compteurClone[id - 1].valeur--;
        this.setState({ compteurs: compteurClone });
    };

    // supprimer carrément un compteur
    deleteCounter = (id) => {
        const newCompteurs = [...this.state.compteurs].filter(c => c.id !== id)
        this.setState({ compteurs: newCompteurs });
    };

    // ajouter un compteur
    add = (objet) => {
        const index = this.state.compteurs.indexOf(objet);
        const compteurClone = [...this.state.compteurs];

        compteurClone[index] = { ...objet };
        compteurClone[index].valeur++;

        this.setState({ compteurs: compteurClone });
    };

    reset = () => {
        this.setState({
            compteurs: [
                { id: 1, valeur: 4 },
                { id: 2, valeur: 3 },
                { id: 3, valeur: 0 },
            ],
        });
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={this.reset}
                >Reset</button>
                {this.state.compteurs.map((compteur) => {
                    return (
                        <Counter
                            key={compteur.id}
                            compteur={compteur}
                            onDelete={this.delete}
                            onAdd={this.add}
                            onDeleteCounter={this.deleteCounter}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Counters;
