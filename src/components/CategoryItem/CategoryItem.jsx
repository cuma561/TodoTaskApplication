import { Button } from '../Button/Button';

export function CategoryItem({ name, onDelete, onEdit })
{
	return(
		<li className="item">
			<span className="name">{ name }</span>
			<Button onClick={onEdit}>Edit</Button>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}