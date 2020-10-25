import React from 'react'
import { ITask } from '../interfaces'
import Task from './Task'

interface ITasks {
    tasks: ITask[],
    toggleDone: (id: string, isDone: boolean) => void,
    deleteTask: (id: string) => void
}


const Tasks = (props: ITasks) => {
    return (
        <ul className="tasks">
            {props.tasks.map((t: ITask) =>
                (<Task 
                key={t._id} {...t}
                toggleDone={props.toggleDone}
                deleteTask={props.deleteTask}/>))}
        </ul>
    )
}

export default Tasks
