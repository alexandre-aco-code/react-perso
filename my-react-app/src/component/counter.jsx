import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
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
                <button>Ajouter</button>
                <p>Valeur du compteur {this.state.count}</p>
                <p>Valeur du compteur {this.formatCounter()}</p>
                <img src={this.state.urlImg} alt="BelleImage" />
            </>
        );
    }
    formatCounter() {
        const { count } = this.state;
        return count == 0 ? <small>Zero</small> : count;
    }
}

export default Counter;