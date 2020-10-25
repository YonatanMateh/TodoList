import React from 'react';
import { ITask } from '../interfaces';
import cc from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface ITaskComponent extends ITask {
    toggleDone: (id: string, isDone: boolean) => void,
    deleteTask: (id: string) => void
}

const Task = (props: ITaskComponent) => {
    const toggle = () => {
        props.toggleDone(props._id, !props.isDone);
    }
    const deleteTask = () => {
        props.deleteTask(props._id);
    }

    return (
        <li
            onClick={toggle}
            className={cc("task", {
                "done": props.isDone
            })}>
            <div className="">
                <span>{props.text}</span>
                <button className="delete-btn" onClick={deleteTask}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </li>
    )
}

export default Task
