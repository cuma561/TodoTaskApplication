import { Button } from "../Button/Button";
import { useState } from "react";

export function FormCategory({ onFormSubmit, onCancel }) {
  const [isValue, setIsValue] = useState("");

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(isValue);
      }}
    >
      <input
        value={isValue}
        onChange={(event) => setIsValue(event.target.value)}
        className="input"
        type="text"
        placeholder="Enter the name of the category task"
      />
      <Button disabled={isValue === ""}>Add</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </form>
  );
}
