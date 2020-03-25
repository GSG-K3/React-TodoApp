import React,{Component} from 'react';
 class AddTodo extends Component{
    state={
        text:''
    }
    inputChange=(e)=>{
        this.setState({ text:e.target.value });
        
    }
    submitTodo=(e)=>{
        e.preventDefault();
        console.log('submit', this.state);
        document.getElementById('addTodo').value='';
        this.props.onSubmit(this.state.text)
    }

   
    render(){
        return <div className='addTodoContainer'>
            <form onSubmit={(e)=>this.submitTodo(e)}>
                <input id='addTodo'onChange={(e)=>this.inputChange(e)} type="text"></input>
                <button  type="submit">Add</button>
            </form>
         
            </div>
    }
}
export default AddTodo;