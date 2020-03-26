import React, { Component } from "react";
import AddTodo from "./component/AddTodo";
import TitleTodo from "./component/TitleTodo";
import TodoList from "./component/TodoList";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
class App extends Component {
  state = {
    todos: []
  };

  addTodoI = (todo) => {
    this.setState({
      todos: [
        { id: Date.now(), text: todo, completed: false },
        ...this.state.todos
      ]
    });
    console.log(todo);
    console.log(this.state.todos);
  };

  deleteTodo = (id) => {
    console.log(id);
    const todoList = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: todoList
    });
  };
  render() {
    return (
      <div className="App">
        <TitleTodo />
        <AddTodo onSubmit={this.addTodoI} />
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} />
      </div>
    );

  }
}

export default App;