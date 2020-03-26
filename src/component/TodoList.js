import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
    render() {
        const { todos, onDelete } = this.props;
        return (
            <div className="listTodoContainer">
                {todos.map((todo, index) => {
                    return (
                        <TodoItem key={index} todo={todo} onDelete={onDelete}></TodoItem>
                    );
                })}
            </div>
        );
    }
}
export default TodoList;