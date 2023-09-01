import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {

  const [isShowForm, setIsShowForm] = useState(false);

  const [todos, setTodos] = useState([
    {id: 1, name: "Zrobić zakupy", done: false},
    {id: 2, name: "Nauczyć się programowania", done: false},
    {id: 3, name: "Wyrzucić śmieci", done: true}
  ]);

  function addTodo(newTodoName)
  {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random(),
        name: newTodoName,
        done: false
      },
    ]);
    setIsShowForm(false);
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1>Zadania do zrobienia</h1>
            <h2>5 zadań</h2>
          </div>
          {!isShowForm && (<button onClick={() => setIsShowForm(true)} className={styles.button}>+</button>)}
        </header>
        {isShowForm && (<Form onFormSubmit={(newTodoName) => addTodo(newTodoName)} />)}
        <ul>
          {todos.map(({ id, name, done }) => (
            <TodoItem key={id} name={name} done={done} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
