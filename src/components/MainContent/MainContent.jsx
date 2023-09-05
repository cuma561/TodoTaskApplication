import styles from './MainContent.module.css'
import { MainMenu } from '../MainMenu/MainMenu';
import { MainContainer } from '../MainContainer/MainContainer';

export function MainContent()
{
	return(
		<>
			<div className={styles.menu}>
				<MainMenu />
			</div>
			<div className={styles.mainContainer}>
				<MainContainer />
			</div>
		</>
	)
}