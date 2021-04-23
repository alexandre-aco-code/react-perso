import React, { Component } from "react";

class LoginForm extends Component {
    state = {};
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input
                            type="text"
                            className="form-control"
                            id="login"
                            placeholder="login"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Login</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            placeholder="password"
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
