import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: 'Feed Cats',
      rowAssigned: 'Carlos',
    },
    {
      rowNumber: 2,
      rowDescription: 'Water Plants',
      rowAssigned: 'Carlos',
    },
    {
      rowNumber: 3,
      rowDescription: 'Make dinner',
      rowAssigned: 'Maria',
    },
    {
      rowNumber: 4,
      rowDescription: 'Change phone battery',
      rowAssigned: 'Maria',
    },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'New User',
      };
      setTodos(todos => [...todos, newTodo])

    }
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo´s</div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
