import { Component } from "react";
import logo192 from "../logo192.png";

class Counter extends Component {
    state = {
        count: 0,
        counter: 2,
        urlImg:
            "https://datapp.fr/site/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
        jours: ["lundi", "mardi", "mercredi"],
    };
    style = {
        fontSize: 20,
        color: "red",
    };
    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <button
                    className={this.getClassBtn()}
                    onClick={() => this.onClickButton({id:1})}
                >
                    Ajouter
                </button>
                <p style={this.style}>Valeur du compteur {this.state.count}</p>
                <p
                    style={{
                        color: "green",
                        fontWeight: "normal",
                    }}
                >
                    Valeur du compteur {this.formatCounter()}
                </p>
                <img src={this.state.urlImg} alt="BelleImage" />
                <ul
                    style={{
                        // text-align: "left",
                        color: "green",
                    }}
                >
                    {this.state.jours.map((jour) => (
                        <li key={jour}> {jour} </li>
                    ))}
                </ul>

                {this.afficherJours()}

                <img src={logo192} alt=""/>
            </>
        );
    }

    formatCounter() {
        return this.state.count == 0 ? "zero" : this.state.count;
    }

    getClassBtn() {
        const { count } = this.state;
        return count == 0 ? "btn btn-danger" : "btn btn-success";
    }

    afficherJours() {
        if (this.state.jours.length == 0) return <p>aucun jour de dispo</p>;
        else
            return (
                <ul>
                    {this.state.jours.map((jour) => (
                        <li key={jour}>{jour}</li>
                    ))}
                </ul>
            );
    }

    onClickButton = (element) => {
        console.log(element)
        this.setState({ count: this.state.count + 1 });
    };

}

export default Counter;
