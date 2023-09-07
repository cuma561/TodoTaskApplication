import { Button } from '../Button/Button';

export function CategoryItem({ categoryName, onDelete, onEdit })
{
	return(
		<li className="item">
			<span className="name">{ categoryName }</span>
			<Button onClick={onEdit}>Edit</Button>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}