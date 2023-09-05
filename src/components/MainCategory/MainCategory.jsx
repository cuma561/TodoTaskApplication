import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { ShowFormButton } from '../Button/ShowFormButton';
import { FormCategory } from '../Form/FormCategory';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import { MainMenu } from '../MainMenu/MainMenu';
import { Subheading } from '../Subheading/Subheading';
import { getSubheadingCategory } from "../../utils/getSubheading";

export function MainCategory()
{
	const localStorageCategories = JSON.parse(localStorage.getItem("categories"));

	const [isShowForm, setIsShowForm] = useState(false);

	const [categories, setCategories] = useState(localStorageCategories);

	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories))
	}, [categories]);

	function addCategoryTodo(newCategoryTodoName)
	{
		setCategories((prevCategories) =>[
			...prevCategories,
			{
				id: prevCategories.length + 1,
				name: newCategoryTodoName
			},
		])
		setIsShowForm(false);
	}

	function deleteCategoryTodo(id)
	{
		setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
	}

	return(
		<>
			<MainMenu />
			<div className="container">
				<div className="row">
					<Header name="Category Task" />
					{!isShowForm && <ShowFormButton name="+" onClick={() => setIsShowForm(true)}/>}
				</div>
				<Subheading name={getSubheadingCategory(categories.length)}/>
				{isShowForm && <FormCategory onFormSubmit={(newCategoryTodoName) => addCategoryTodo(newCategoryTodoName)}/>}
				<ul>
					{categories.map(({ id, name }) => (
						<CategoryItem key={id} name={name} onDelete={() => deleteCategoryTodo(id)}/>
					))}
				</ul>
			</div>
		</>
	)
}