import { Component } from "react";

class TodoList extends Component {
    state = {};
    render() {
        const TodoList = this.props.items.map((task, index) => (
            <li key={index}>{task}</li>
        ));

        return (
            <>
                <ul>{TodoList}</ul>
            </>
        );
    }
}

export default TodoList;
