import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        counter: 2,
        urlImg:"https://datapp.fr/site/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    };
    style = {
        fontSize: 20,
        color: "red",
    };
    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <button className={this.getClassBtn()}>Ajouter</button>
                <p style={this.style}>Valeur du compteur {this.state.count}</p>
                <p style={{
                    color: "green",
                fontWeight:"normal"
                }}>Valeur du compteur {this.formatCounter()}</p>
                <img src={this.state.urlImg} alt="BelleImage" />
            </>
        );
    }
    formatCounter() {
        return this.state.count == 0 ? "zero" : this.state.count;
    }

    getClassBtn() {
        const { counter } = this.state;
        return counter == 0 ? "btn btn-danger" : "btn btn-success";
    }
}

export default Counter;