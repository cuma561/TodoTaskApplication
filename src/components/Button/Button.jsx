import styles from './Button.module.css'

export function Button({ children, onClick, disabled })
{
	return(
		<button disabled={disabled} className={styles.button} onClick={onClick}>{ children }</button>
	)
}