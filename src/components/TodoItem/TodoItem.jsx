import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem({ name, done, onDone, onDelete, onUndone })
{
	return(
		<li className={styles.item}>
			<span className={`${styles.name} ${done ? styles.done : ""}`}>{ name }</span>
			{!done && <Button onClick={onDone}>Done</Button>}
			{done && <Button onClick={onUndone}>Undone</Button>}
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}