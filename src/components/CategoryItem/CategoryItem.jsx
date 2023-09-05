import { Button } from '../Button/Button';

export function CategoryItem({ name, onDelete })
{
	return(
		<li className="item">
			<span className="name">{ name }</span>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}