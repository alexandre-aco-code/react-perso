//src/App.js
import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        compteurs: [
            { id: 1, valeur: 4 },
            { id: 2, valeur: 2 },
            { id: 3, valeur: 0 },
        ],
    };

    constructor(props) {
        super(props);
        this.baseState = this.state.compteurs;
        //initialisation du state
    }

    componentDidMount() {
        console.log("App phase 3 le DOM réel est sync");
    }

    componentDidUpdate() {
        console.log("App phase 5 state ou props du composent vient d'etre modifié")
    }

    delete = (id) => {
        //console.log("delete", id);
        const newCompteurs = this.state.compteurs.filter((c) => c.id !== id);
        this.setState({ compteurs: newCompteurs });
    };

    add = (objet) => {
        //console.log("add", objet);
        const index = this.state.compteurs.indexOf(objet);
        const compteurClone = [...this.state.compteurs];
        compteurClone[index] = { ...objet };
        compteurClone[index].valeur++;
        console.log(compteurClone[index]);
        this.setState({ compteurs: compteurClone });
    };

    reset = () => {
        this.setState({
            compteurs: this.baseState,
        });
    };

    render() {
        return (
            <div className="container">
                <header className="row">
                    <div className="col-sm-12">
                        <NavBar
                            total={
                                this.state.compteurs.filter((c) => c.valeur > 0)
                                    .length
                            }
                        />
                    </div>
                </header>
                <section className="App-intro">
                    <Counters
                        compteurs={this.state.compteurs}
                        onDelete={this.delete}
                        onAdd={this.add}
                        onReset={this.reset}
                    />
                </section>
            </div>
        );
    }
}

export default App;
