import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
    state = {
        profil: {
            login: "",
            password: ""
        },
        errors: {},
    };

    change = e => {
        const profil = { ...this.state.profil }
        // profil.login = e.currentTarget.value;
        // profil.password = e.currentTarget.value;

        // console.log(e.currentTarget)
        // console.log(e.currentTarget.name)
        // console.log(e.currentTarget.value)

        profil[e.currentTarget.name] = e.currentTarget.value

        this.setState({ profil: profil })

    }

    connexion = e => {
        e.preventDefault();
        console.log(this.state.profil)
    }


    render() {
        return (
            <>
                <form onSubmit={this.connexion}>
                    <div className="form-group">
                        <Input
                            name="login"
                            value={this.state.password}
                            onChange={this.change}
                            label="Login"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="password"
                            value={this.state.password}
                            onChange={this.change}
                            label="password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Connexion
                    </button>
                </form>
            </>
        );
    }
}

export default LoginForm;
