import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem({ name, categoryName ,done, onDone, onDelete, onUndone, upTask, downTask })
{
	return(
		<li className="item">
			<div className="rowTodo">
				<span className={`name ${done ? styles.done : ""}`}>{ name }</span>
				<span className={styles.nameCategory}>{ categoryName }</span>
			</div>
			<Button onClick={upTask}><i className="fa-solid fa-caret-up"></i></Button>
			<Button onClick={downTask}><i className="fa-solid fa-caret-down"></i></Button>
			{!done && <Button onClick={onDone}>Done</Button>}
			{done && <Button onClick={onUndone}>Undone</Button>}
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}