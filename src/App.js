import React from 'react';
import { toDo } from "./components/Todo"
import TodoForm from "./components/TodoForm";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      toDo,
      userInput: ""
    };
  }

  render() {
    return (
      <>
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
      <TodoForm/>
      </>
    );
  }
}

export default App;
