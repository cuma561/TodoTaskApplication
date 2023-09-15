export function EditInput({ inputValue, setInputValue }) {
  return (
    <input
      className="input"
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}
