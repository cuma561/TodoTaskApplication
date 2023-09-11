import { Button } from '../Button/Button';

export function CategoryItem({ categoryName, onDelete })
{
	return(
		<li className="item">
			<span className="name">{ categoryName }</span>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}