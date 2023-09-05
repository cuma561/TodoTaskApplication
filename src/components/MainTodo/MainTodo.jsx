import styles from './MainTodo.module.css'
import { useEffect, useState } from 'react'
import { Header } from '../Header/Header';
import { ShowFormButton } from '../Button/ShowFormButton';

import { Subheading } from '../Subheading/Subheading';

import { getSubheading } from "../../utils/getSubheading";

import { Form } from '../Form/Form';
import { TodoItem } from '../TodoItem/TodoItem';
import { MainMenu } from '../MainMenu/MainMenu';

export function MainTodo()
{
	const localStorageTodos = JSON.parse(localStorage.getItem("todos"));

  	const [todos, setTodos] = useState(localStorageTodos);

	const [isShowForm, setIsShowForm] = useState(false);

	useEffect(() => {
    	localStorage.setItem("todos", JSON.stringify(todos));
  	}, [todos]);

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

    function undoneTodo(id) {
      setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                }

                return {
                    ...todo,
                    done: false,
                };
            })
        );
    }

	return(
		<>
            <MainMenu />
			<div className={styles.container}>
				<div className={styles.row}>
					<Header name="Todo Tasks"/>
					{!isShowForm && <ShowFormButton name="+" onClick={() => setIsShowForm(true)}/>}
				</div>
				<Subheading name={getSubheading(todos.length)}/>
				{isShowForm && <Form onFormSubmit={(newTodoName) => addTodo(newTodoName)} />}
        		<ul>
          			{todos.map(({ id, name, done }) => (
            			<TodoItem key={id} name={name} done={done} onDone={() => doneTodo(id)} 
              				onDelete={() => deleteTodo(id)} onUndone={() => undoneTodo(id)} />
          			))}
        		</ul>
			</div>
		</>
	)
}