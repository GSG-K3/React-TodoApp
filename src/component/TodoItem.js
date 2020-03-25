import React,{Component} from 'react';
 class TodoItem extends Component{
    render(){
        const{todo}=this.props;
        return<div onClick={this.toggleTodo}> {todo.text}
            
        </div>
    }
    toggleTodo=()=>{

    }
 }
 export default TodoItem;