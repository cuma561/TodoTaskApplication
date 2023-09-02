import styles from './Header.module.css';

export function Header({ name })
{
	return(
		<header className={styles.header}>
			<h1>{ name }</h1>
		</header>
	)
}