import { Button } from '../Button/Button';
import { EditInput } from '../Form/Input/EditInput';
import { useState } from "react";
import styles from './TodoItem.module.css';
export function TodoItem({ name, categoryName, editAble ,done, onDone, onDelete, onUndone, upTask, downTask, openEditTodo, closeEditTodo, editTodo })
{
	const [inputValue, setInputValue] = useState(name);

	return(
		<>
		{!editAble && 
			<li className="item">
				<div className="rowTodo">
					<span className={`name ${done ? styles.done : ""}`}>{ name }</span>
					<span className={styles.nameCategory}>{ categoryName }</span>
				</div>
				<Button onClick={upTask}><i className="fa-solid fa-caret-up"></i></Button>
				<Button onClick={downTask}><i className="fa-solid fa-caret-down"></i></Button>
				{!done && <Button onClick={onDone}>Done</Button>}
				{done && <Button onClick={onUndone}>Undone</Button>}
				{!done && <Button onClick={() => openEditTodo()}>Edit</Button>}
				<Button onClick={onDelete}>Delete</Button>
			</li>
		}
		{editAble && 
			<li className="item">
				<EditInput inputValue={inputValue} 
					value={inputValue} setInputValue={setInputValue}/>
				<Button onClick={() => editTodo(inputValue)}>Update</Button>
				<Button onClick={() => closeEditTodo()}>Cancel</Button>
			</li>
		}
		</>
	)
}