// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Tasks from "./Tasks";

const TodoList = props => {
    return (
        <div className="ToDo-List">
            {props.toDo.map(tasks => {
                return(
                    <Tasks
                    tasks={tasks}
                    key={tasks.id}
                    markComplete={props.markComplete}
                    />
                )
            })}
        </div>
    )
};

export default TodoList;