import { Button } from '../Button/Button';
import styles from './Form.module.css';
import { useState } from 'react'; 

export function Form({ onFormSubmit, onCancel })
{

	const [categories] = useState([
        {categoryId: 1, categoryName: "Shopping", editAble: false},
        {categoryId: 2, categoryName: "Learning", editAble: false},
        {categoryId: 3, categoryName: "Homework", editAble: false}
    ]);

	const [isValue, setIsValue] = useState("");

	const [isValueSelect, setIsValueSelect] = useState(categories);

	return(
		<form className={styles.form} 
			onSubmit={(event) => {event.preventDefault(); onFormSubmit(isValue,isValueSelect);}}>
			<input value={isValue} onChange={(event) => setIsValue(event.target.value)} 
				className={styles.input} type="text" placeholder="Enter the name of the task"/>
			<select onChange={(event) => setIsValueSelect(event.target.value)}>
				{categories.map(({categoryId,categoryName}) => (
					<option key={categoryId} value={categoryName}>{ categoryName }</option>
				))}
			</select>
			<Button disabled={isValue === ""}>Add</Button>
			<Button onClick={onCancel}>Cancel</Button>
		</form>
	)
}