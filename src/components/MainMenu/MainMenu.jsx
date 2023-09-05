import { NavLink } from 'react-router-dom'

export function MainMenu()
{
	return(
		<section>
			<ul>
				<li>
					<NavLink to="/todos">Todo Task</NavLink>
				</li>
				<li>
					<NavLink to="/category">Category Task</NavLink>
				</li>
			</ul>
		</section>
	)
}