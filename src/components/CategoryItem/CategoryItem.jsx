import { Button } from '../Button/Button';

export function CategoryItem({ categoryName, onDelete, upCategoryTask,downCategoryTask })
{
	return(
		<li className="item">
			<span className="name">{ categoryName }</span>
			<Button onClick={ upCategoryTask }><i className="fa-solid fa-caret-up"></i></Button>
			<Button onClick={ downCategoryTask }><i className="fa-solid fa-caret-down"></i></Button>
			<Button onClick={onDelete}>Delete</Button>
		</li>
	)
}