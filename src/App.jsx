import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { Header } from './components/Header/Header';
import { ShowFormButton } from './components/Button/ShowFormButton';
import { Subheading } from './components/Subheading/Subheading';

import { getSubheading } from "./utils/getSubheading";

function App() {

  const [isShowForm, setIsShowForm] = useState(false);

  const [todos, setTodos] = useState([
    {id: 1, name: "Do shopping", done: false},
    {id: 2, name: "Learn programming", done: false},
    {id: 3, name: "Throw out rubbish", done: true}
  ]);

  function addTodo(newTodoName)
  {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        name: newTodoName,
        done: false
      },
    ]);
    setIsShowForm(false);
  }

  function deleteTodo(id)
  {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function doneTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }

                return {
                    ...todo,
                    done: true,
                };
            })
        );
    }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <Header name="Todo Tasks"/>
          {!isShowForm && <ShowFormButton name="+" onClick={() => setIsShowForm(true)}/>}
        </div>
        <Subheading todos={getSubheading(todos.length)}/>
        {isShowForm && <Form onFormSubmit={(newTodoName) => addTodo(newTodoName)} />}
        <ul>
          {todos.map(({ id, name, done }) => (
            <TodoItem key={id} name={name} done={done} onDone={() => doneTodo(id)} 
              onDelete={() => deleteTodo(id)} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
