import styles from '../Form.module.css';
export function EditInput({ inputValue, setInputValue })
{
	return(
		<input className={styles.input} type="text" value={inputValue} 
		onChange={(event) => setInputValue(event.target.value)} />
	)
}