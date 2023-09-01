import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {

  return (
    <>
      <div>
        <header>
          <div>
            <h1>Zadania do zrobienia</h1>
            <h2>5 zadań</h2>
            <button>+</button>
          </div>
        </header>
        <Form />
        <ul>
          <TodoItem />
        </ul>
      </div>
    </>
  )
}

export default App
