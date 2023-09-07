import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem({ name, categoryName ,done, onDone, onDelete, onUndone, onEdit })
{
	return(
		<li className="item">
			<div className="rowTodo">
				<span className={`name ${done ? styles.done : ""}`}>{ name }</span>
				<span className={styles.nameCategory}>{ categoryName }</span>
			</div>
			{!done && <Button onClick={onDone}>Done</Button>}
			{!done && <Button onClick={onEdit}>Edit</Button>}
			{done && <Button onClick={onUndone}>Undone</Button>}
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}