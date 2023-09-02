import styles from './Header.module.css';

export function Header({ name})
{
	return(
		<header className={styles.header}>
			<div>
				<h1>{ name }</h1>
			</div>
		</header>
	)
}