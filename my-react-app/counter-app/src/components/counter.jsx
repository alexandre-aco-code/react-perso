import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
                onClick={() => this.props.onAdd(this.props.compteur)}
                className="btn btn-success btn-sm"
            >
                Increment
            </button>
            <button
                onClick={() => this.props.onDelete(this.props.compteur.id)}
                className="btn btn-secondary btn-sm"
            >
                Decrement
            </button>
            <button
                onClick={() =>
                    this.props.onDeleteCounter(this.props.compteur.id)
                }
                className="btn btn-danger btn-sm"
            >
                Delete
            </button>
        </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.compteur.valeur === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {valeur} = this.props.compteur;
    return valeur === 0 ? "Zero" : valeur;
  }
}

export default Counter;
