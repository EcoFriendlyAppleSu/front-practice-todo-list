import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
             complete: false, isEditing: false}])
             console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(
            todos.map((todo)=>
            todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing : !todo.isEditing} : todo)
            )
    }

    return (
        // tag 안에 className을 작성하게 된다면 App CSS에 존재하는 Block을 가져옵니다.
        <div className='TodoWrapper'>
            <h1>GET THINGS DONE!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}/>
            ))}
        </div>
    )
}