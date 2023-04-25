import React from 'react'
import { TodoForm } from './TodoForm'

export const TodoWrapper = () => {
    return (
        // tag 안에 className을 작성하게 된다면 App CSS에 존재하는 Block을 가져옵니다.
        <div className='TodoWrapper'>
            <TodoForm/>
        </div>
    )
}