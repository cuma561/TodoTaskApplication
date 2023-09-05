import styles from './MainCategory.module.css'

import { useState } from 'react';

import { Header } from '../Header/Header';
import { ShowFormButton } from '../Button/ShowFormButton';
import { FormCategory } from '../Form/FormCategory';
import { CategoryItem } from '../CategoryItem/CategoryItem'

export function MainCategory()
{
	const [isShowForm, setIsShowForm] = useState(false);

	const [categories, setCategories] = useState([
		{ id: 1, name: "Shopping"},
		{ id: 2, name: "Learning"},
		{ id: 3, name: "Homework"}
	]);

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
		<div className={styles.container}>
			<div className={styles.row}>
				<Header name="Category Task" />
				{!isShowForm && <ShowFormButton name="+" onClick={() => setIsShowForm(true)}/>}
			</div>
			{isShowForm && <FormCategory onFormSubmit={(newCategoryTodoName) => addCategoryTodo(newCategoryTodoName)}/>}
			<ul>
				{categories.map(({ id, name }) => (
					<CategoryItem key={id} name={name} onDelete={() => deleteCategoryTodo(id)}/>
				))}
			</ul>
		</div>
	)
}