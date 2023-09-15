export function ShowFormButton({ name, onClick }) {
  return (
    <button className="buttonShowForm" onClick={onClick}>
      {name}
    </button>
  );
}
