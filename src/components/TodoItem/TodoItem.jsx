import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';
export function TodoItem()
{
	return(
		<li className={styles.item}>
			Testowe Zadanie
			<Button>Zrobione</Button>
			<Button>Edytuj</Button>
			<Button>Usuń</Button>
		</li>
	)
}