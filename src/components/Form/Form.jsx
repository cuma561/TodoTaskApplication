import { Button } from "../Button/Button";
import { useState } from "react";

export function Form({ onFormSubmit, onCancel }) {
  const localStorageCategories = JSON.parse(localStorage.getItem("categories"));

  const categoryName = localStorageCategories
    .filter((lsc) => lsc.categoryId == 1)
    .map((lsc) => lsc.categoryName);

  const [categories] = useState(localStorageCategories);

  const [isValue, setIsValue] = useState("");

  const [isValueSelect, setIsValueSelect] = useState(categoryName);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(isValue, isValueSelect);
      }}
    >
      <input
        value={isValue}
        onChange={(event) => setIsValue(event.target.value)}
        className="input"
        type="text"
        placeholder="Enter the name of the task"
      />
      <select onChange={(event) => setIsValueSelect(event.target.value)}>
        {categories.map(({ categoryId, categoryName }) => (
          <option
            key={categoryId}
            value={categoryName}
            defaultValue={categoryName}
          >
            {categoryName}
          </option>
        ))}
      </select>
      <Button disabled={isValue === "" || isValueSelect.length == 0}>
        Add
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </form>
  );
}
