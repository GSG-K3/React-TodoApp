import React,{Component} from 'react';
import  TodoItem from './TodoItem'
 class TodoList extends Component{
        
    render(){
        const {todos}=this.props;
        
          return <div className ='listTodoContainer'>
           
              {
                todos.map((todo, index)=>{
                    return(
                       <TodoItem key={index} todo={todo}></TodoItem>
                       

                    )
                })
            } 
            </div>
            
     }

 }
 export default TodoList;