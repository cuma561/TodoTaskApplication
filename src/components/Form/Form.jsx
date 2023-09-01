import { Button } from '../Button/Button';
import styles from './Form.module.css';
import { useState } from 'react'; 

export function Form({ onFormSubmit })
{
	const [isValue, setIsValue] = useState("");

	return(
		<form className={styles.form} 
			onSubmit={(event) => {event.preventDefault(); onFormSubmit(isValue);}}>
			<input value={isValue} onChange={(event) => setIsValue(event.target.value)} 
				className={styles.input} type="text" placeholder="Enter the name of the task"/>
			<Button>Add</Button>
		</form>
	)
}