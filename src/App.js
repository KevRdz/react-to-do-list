import React from 'react'
import { useState } from 'react'

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
    setList([...list, newTodo])
    setInput("")
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App