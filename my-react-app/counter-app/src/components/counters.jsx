//src/components/counters.jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.onReset}
                >
                    Reset
        </button>
                {this.props.compteurs.map(compteur => {
                    //console.log(compteur);
                    return (
                        <Counter
                            key={compteur.id}
                            compteur={compteur}
                            onDelete={this.props.onDelete}
                            onAdd={this.props.onAdd}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}
export default Counters;