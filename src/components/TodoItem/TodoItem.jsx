import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem({ name, done })
{
	return(
		<li className={styles.item}>
			<span className={`${styles.name} ${done ? styles.done : ""}`}>{ name }</span>
			<Button>Zrobione</Button>
			<Button>Edytuj</Button>
			<Button>Usuń</Button>
		</li>
	)
}