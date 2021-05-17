import React, { Component } from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            items: ["faire à manger", "faire la vaisselle"],
            textprovisoire: "",
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ textprovisoire: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const newItems = [...this.state.items, this.state.textprovisoire];
        this.setState({ items: newItems });
    };

    render() {
        const TodoList = this.state.items.map((task, index) => (
            <li key={index}>{task}</li>
        ));

        return (
            <div>
                <h1>Todolist</h1>
                <ul>{TodoList}</ul>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">Que faut t'il faire chef ?</label>
                    <input
                        id="new-todo"
                        value={this.state.textprovisoire}
                        onChange={this.handleChange}
                    />
                    <button>Ajouter une tâche gros</button>
                </form>
            </div>
        );
    }
}

export default TodoApp;
