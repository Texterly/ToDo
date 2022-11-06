import React from "react";
import Check from './Check';
// import {BsCheck} from 'react-icons/bs'

const TodoItem = ({todo, changeTodo}) => {
    return(
        <button className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full" 
        onClick={() => changeTodo(todo._id)}>
            {/* <BsCheck /> */}
            <Check isCompleted={todo.isCompleted} />            
            {todo.title}
        </button>
    )
}
export default TodoItem