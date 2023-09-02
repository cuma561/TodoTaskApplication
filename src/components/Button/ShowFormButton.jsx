import styles from './ShowFormButton.module.css';

export function ShowFormButton({ name, onClick })
{
	return(
		<button className={styles.button} onClick={onClick}>{ name }</button>
	)
}