import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../TodoItem.css";
class TodoItem extends Component {
    render() {
        const { todo, onDelete } = this.props;
        return (
            <div className="list" onClick={this.toggleTodo}>
                <p>
                    {todo.text}
                    <span onClick={() => onDelete(todo.id)}>
                        <FontAwesomeIcon className="icons" icon="trash" />
                    </span>
                </p>
            </div>
        );
    }
    toggleTodo = () => { };
}
export default TodoItem;