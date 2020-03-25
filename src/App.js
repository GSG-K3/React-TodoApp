import React,{Component} from 'react';
import AddTodo from './component/AddTodo';
import TitleTodo from './component/TitleTodo'
import TodoList from './component/TodoList'
import './App.css';
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faTrash} from '@fortawesome/free-solid-svg-icons'

// library.add(faTrash);
class App extends Component{
  state={
    todos:[ ]
 };

 addTodoI = (todo) =>{
     this.setState({
         todos:[{text:todo,
          completed:false
        },...this.state.todos]
     });
    console.log(todo);
    

 };
  render(){
  return (
    <div className="App">
      <TitleTodo/>
      <AddTodo onSubmit={this.addTodoI}/>
      <TodoList todos={this.state.todos}/>
      
    </div>
  );
  // componentDidMount=()=>{

  // }
}
}

export default App;
