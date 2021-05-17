import { Component } from "react";
import TodoList from "./TodoList";

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
        if (this.state.textprovisoire.length === 0)
            return;
        else this.setState({ items: [...this.state.items, this.state.textprovisoire], textprovisoire: "" });
    };

    render() {

        return (
            <div>
                <h1>Todolist</h1>
                <h2>Tâches à réaliser : {this.state.items.length}</h2>

                <TodoList items={this.state.items}/>

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
