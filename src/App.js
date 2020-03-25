import React ,{Component}from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import TitleTodo from './component/TitleTodo'
import TodoList from './component/TodoList'


class App extends Component{
  render(){
  return (
    <div className="App">
      <TitleTodo/>
    
    </div>
  );
}
}


export default App;
