import React, { Component } from 'react';

class TodoApp extends Component {
    constructor() {
        super();
        this.state = { items: ["faire à manger", "faire la vaisselle"], textprovisoire:'' }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // console.log(e.target[0].value);

        const newItems = [...this.state.items, e.target[0].value];

        this.setState({ items: newItems })

    }

    handleChange = (e) => {
        e.preventDefault();
        
        this.setState({ textprovisoire: e.target.value })
    }



    render() {

        const TodoList = this.state.items.map((task, index) => <li key={index}>{task}</li>);

        return (
            <div>
                <h1>Todolist</h1>
                <ul>
                    {TodoList}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">Que faut t'il faire chef ?</label>
                    <input id="new-todo" onChange={this.handleChange} value={this.state.textprovisoire}/>
                    <button>Ajouter une tâche gros</button>
                </form>


            </div>
        );
    }
}

export default TodoApp;