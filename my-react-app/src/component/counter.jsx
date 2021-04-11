import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        counter: 2,
        urlImg: "https://datapp.fr/site/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
        jours: ["lundi","mardi","mercredi"],
    };
    style = {
        fontSize: 20,
        color: "red",
    };
    render() {
        return (
            <>
                <h1>Hello World!</h1>
                <button className={this.getClassBtn()} onClick={this.onClickButton.bind(this)}>Ajouter</button>
                <p style={this.style}>Valeur du compteur {this.state.count}</p>
                <p style={{
                    color: "green",
                    fontWeight: "normal"
                }}>Valeur du compteur {this.formatCounter()}</p>
                <img src={this.state.urlImg} alt="BelleImage" />
                <ul style={{
                    // text-align: "left",
                    color: "green",
                    }}>
                    {this.state.jours.map(jour =>
                        (<li key={jour}> {jour} </li>)
                    )}
                </ul>

                <p>{this.afficherJours()}</p>
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

    afficherJours() { 
        if (this.state.jours.length == 0)
            return <p>aucun jour de dispo</p>
        else
            return <ul>
                {this.state.jours.map(jour => 
                    <li>{jour}</li>)}
            </ul>
    }

    // onClickButton() {
    //     console.log(this);
    // } 

    onClickButton = () => {
        this.setState({count : this.state.count + 1});
    }


    // this.setState(this.state.count, this.state.count++);

}

export default Counter;