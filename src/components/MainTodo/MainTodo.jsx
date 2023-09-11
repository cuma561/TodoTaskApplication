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

  	function addTodo(newTodoName, newCategoryName)
  	{
    	setTodos((prevTodos) => [
      		...prevTodos,
      		{
        		id: prevTodos.length + 1,
        		name: newTodoName,
        		done: false,
                categoryName: newCategoryName
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

    function cancelAddTodo()
    {
        setIsShowForm(false);
    }

	return(
		<>
            <MainMenu />
			<div className="container">
				<div className="row">
					<Header name="Todo Tasks"/>
					{!isShowForm && <ShowFormButton name="+" onClick={() => setIsShowForm(true)}/>}
				</div>
				<Subheading name={getSubheading(todos.length)}/>
				{isShowForm && <Form 
                    onFormSubmit={(newTodoName,newCategoryName) => 
                    addTodo(newTodoName,newCategoryName)} 
                    onCancel={() => cancelAddTodo()}
                />}
        		<ul>
          			{todos.map(({ id, name, done, categoryName }) => (
            			<TodoItem key={id} name={name} categoryName={ categoryName } 
                            done={done} onDone={() => doneTodo(id)} 
              				onDelete={() => deleteTodo(id)} onUndone={() => undoneTodo(id)}/>
          			))}
        		</ul>
			</div>
		</>
	)
}