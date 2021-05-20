import { Component } from "react";

class TodoList extends Component {
    state = {};

    deleteTask = (e) => {
        console.log(e.target);
        this.setState();
    };

    render() {
        const TodoList = this.props.items.map((task, index) => (
            <li key={index}>
                {task}
                <button onClick={this.deleteTask}>x</button>
            </li>
        ));

        return (
            <>
                <ul>{TodoList}</ul>
            </>
        );
    }
}

export default TodoList;
