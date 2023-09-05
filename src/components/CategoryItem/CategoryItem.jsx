import styles from './CategoryItem.module.css';
import { Button } from '../Button/Button';

export function CategoryItem({ name, onDelete })
{
	return(
		<li className={styles.item}>
			<span className={styles.name}>{ name }</span>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}