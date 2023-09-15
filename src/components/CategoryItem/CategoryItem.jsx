import { Button } from "../Button/Button";
import { EditInput } from "../Form/Input/EditInput";
import { useState } from "react";

export function CategoryItem({
  editAble,
  categoryName,
  onDelete,
  upCategoryTask,
  downCategoryTask,
  editCategory,
  openEditCategory,
  closeEditCategory,
}) {
  const [inputValue, setInputValue] = useState(categoryName);

  return (
    <>
      {!editAble && (
        <li className="item">
          <span className="name">{categoryName}</span>
          <Button onClick={upCategoryTask}>
            <i className="fa-solid fa-caret-up"></i>
          </Button>
          <Button onClick={downCategoryTask}>
            <i className="fa-solid fa-caret-down"></i>
          </Button>
          <Button onClick={() => openEditCategory()}>Edit</Button>
          <Button onClick={onDelete}>Delete</Button>
        </li>
      )}
      {editAble && (
        <li className="item">
          <EditInput
            inputValue={inputValue}
            value={inputValue}
            setInputValue={setInputValue}
          />
          <Button onClick={() => editCategory(inputValue)}>Update</Button>
          <Button onClick={() => closeEditCategory()}>Cancel</Button>
        </li>
      )}
    </>
  );
}
