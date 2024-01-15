import React from 'react'
import { useState } from 'react'
import "./App.css"

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setList([...list, input])
    setInput("")
  }

  const handleDelete = (index) => {
    const newTodos = [...list]
    newTodos.splice(index, 1)
    setList(newTodos)
  }
  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <labe htmlFor="item">New Item</labe>
          <input 
            type="text" 
            value={input} 
            onChange={handleChange}
            id='item'
          />
        </div>
        <button className='btn' onClick={handleSubmit}>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo}
            <button className='btn btn-danger' onClick={() => handleDelete()}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App