import React from "react";

class TodoForm extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" onChange={this.props.handleChange} value={this.props.userInput}/>
            </form>
        );
    }
}
export default TodoForm;