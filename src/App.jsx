import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {

  const [isShowForm, setIsShowForm] = useState(false);

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
        {isShowForm && (<Form />)}
        <ul>
          <TodoItem />
        </ul>
      </div>
    </>
  )
}

export default App
