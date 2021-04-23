import React, { Component } from "react";

class LoginForm extends Component {
    state = {
        profil: {
            login: "",
            password: ""
        }
    };

    connexion = e => {
        e.preventDefault();
        console.log("tentative de connexion" + " " + this.state.profil.login);
    }

    change = e => {
        const profil = { ...this.state.profil };
        //profil.login = e.currentTarget.value;
        profil[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ profil: profil });
    }

    render() {
        const { profil } = this.state;
        return (
            <>
                <form onSubmit={this.connexion}>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input
                            type="text"
                            className="form-control"
                            id="login"
                            placeholder="login"
                            value={profil.login}
                            onChange={this.change}
                            name="login"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="password"
                            value={profil.password}
                            onChange={this.change}
                            name="password"
                        />
                    </div>
                    <p>{this.state.profil.login}</p>
                    <button type="submit" className="btn btn-primary">
                        Connexion
                    </button>
                </form>
            </>
        );
    }
}

export default LoginForm;
