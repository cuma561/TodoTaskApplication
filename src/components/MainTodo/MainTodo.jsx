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
	const [todos, setTodos] = useState([
        {id: 1, name: "Do shopping", done: false, categoryId: 1, categoryName: "Shopping", editAble: false},
        {id: 2, name: "Learn programming", done: false, categoryId: 2, categoryName: "Learning", editAble: false},
        {id: 3, name: "Throw out rubbish", done: true, categoryId: 3, categoryName: "Homework", editAble: false}
    ])

	const [isShowForm, setIsShowForm] = useState(false);

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

    function upTask(id)
    {
        const i = todos.findIndex((t) => t.id == id);
        if (!i == 0) {
            setTodos([
                ...todos.slice(0, i - 1),
                todos[i],
                todos[i - 1],
                ...todos.slice(i + 1),
            ]);
        } else {
            return;
        }
    }

    function downTask(id)
    {
        const i = todos.findIndex((t) => t.id == id) + 1;
        if (!(i == todos.length)) {
            setTodos([
                ...todos.slice(0, i - 1),
                todos[i],
                todos[i - 1],
                ...todos.slice(i + 1),
            ]);
        } else {
            return;
        }
    }

    function openEdit(id) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                } else if (todo.done) {
                    return todo;
                } else {
                    return { ...todo, editAble: true };
                }
            })
        );
    }

    function closeEdit(id)
    {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                } else if (todo.done) {
                    return todo;
                } else {
                    return { ...todo, editAble: false };
                }
            })
        );
    }

    function editTodo(id,updatedName) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id !== id) {
                    return todo;
                } else {
                    return { ...todo, name: updatedName, editAble: false };
                }
            })
        );
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
          			{todos.map(({ id, name, done, categoryName, editAble }) => (
            			<TodoItem key={id} name={name} categoryName={ categoryName }
                            editAble={editAble} 
                            done={done} onDone={() => doneTodo(id)} 
              				onDelete={() => deleteTodo(id)} onUndone={() => undoneTodo(id)}
                            upTask={() => upTask(id)} downTask={() => downTask(id)}
                            openEditTodo={() => openEdit(id)}
                            closeEditTodo={() => closeEdit(id)}
                            editTodo={(updatedName) => editTodo(id,updatedName)}/>
          			))}
        		</ul>
			</div>
		</>
	)
}