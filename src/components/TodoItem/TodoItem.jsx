import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem({ name, done, onDone, onDelete })
{
	return(
		<li className={styles.item}>
			<span className={`${styles.name} ${done ? styles.done : ""}`}>{ name }</span>
			{!done && (<Button onClick={onDone}>Done</Button>)}
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}