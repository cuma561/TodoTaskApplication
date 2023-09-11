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
				categoryId: prevCategories.length + 1,
				categoryName: newCategoryTodoName
			},
		])
		setIsShowForm(false);
	}

	function deleteCategoryTodo(id)
	{
		setCategories((prevCategories) => prevCategories.filter((category) => category.categoryId !== id));
	}

	function cancelAddCategory()
	{
		setIsShowForm(false);
	}

	function upCategoryTask(id)
	{
		const i = categories.findIndex((c) => c.categoryId == id);
		if (!i == 0) {
			setCategories([
				...categories.slice(0, i - 1),
				categories[i],
				categories[i - 1],
				...categories.slice(i + 1),
			]);
		} else {
			return;
		}
	}

	function downCategoryTask(id)
	{
		const i = categories.findIndex((c) => c.categoryId == id) + 1;
		if (!(i == categories.length)) {
			setCategories([
				...categories.slice(0, i - 1),
				categories[i],
				categories[i - 1],
				...categories.slice(i + 1),
			]);
		} else {
			return;
		}
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
				{isShowForm && <FormCategory 
					onFormSubmit={(newCategoryTodoName) => addCategoryTodo(newCategoryTodoName)}
					onCancel={() => cancelAddCategory()}
				/>}
				<ul>
					{categories.map(({ categoryId, categoryName }) => (
						<CategoryItem key={categoryId} categoryName={categoryName}
							onDelete={() => deleteCategoryTodo(categoryId)}
							upCategoryTask={() => upCategoryTask(categoryId)}
							downCategoryTask={() => downCategoryTask(categoryId)}/>
					))}
				</ul>
			</div>
		</>
	)
}