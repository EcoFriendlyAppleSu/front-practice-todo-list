import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick = {() => editTodo(task.id)}/>
                {/* () => 를 사용해 내부 값을 바로 넘겨줄 수 있습니다. */}
                <FontAwesomeIcon icon={faTrash} onClick = {() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}
