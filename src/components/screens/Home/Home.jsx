import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

const data = [
    {
      _id: 'sdfs23',
      title: 'Finish the essay collaboration',
      isComplited: false,
    },
    {
      _id: 'sdfs235',
      title: 'Read the next chapter of the book',
      isComplited: false,
    },
    {
      _id: 'sdfs238',
      title: 'Send the finished assignment',
      isComplited: false,
    }
  ]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo =(id) => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isComplited = !current.isComplited
    setTodos(copy)
  }

  const removeTodo =(id) => {
    setTodos([...todos].filter(t => t._id !==id))
  }

    return(
        <div className="text-white w-4/5 mx-auto">
          <h1 className="text-2xl font-bold text-center mb-10">Todo</h1>
            {todos.map(todo => (
                <TodoItem 
                  key={todo._id} 
                  todo={todo} 
                  changeTodo={changeTodo} 
                  removeTodo={removeTodo} 
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home