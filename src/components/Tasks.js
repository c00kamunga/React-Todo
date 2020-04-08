import React from 'react';

const Tasks = props => {
    return(
        <div className="Tasks">
            <span onClick={()=>props.markComplete(props.tasks.id)}>
                {props.tasks.completed ? String.fromCharCode(10003) : null}
                {props.tasks.task}
            </span>
            <button>delete</button>
        </div>
    )
}

export default Tasks;