import styles from './MainContent.module.css'
import { MainMenu } from '../MainMenu/MainMenu';
import { MainContainer } from '../MainContainer/MainContainer';

export function MainContent()
{
	return(
		<>
			<MainMenu />
			<div className={styles.mainContainer}>
				<MainContainer />
			</div>
		</>
	)
}