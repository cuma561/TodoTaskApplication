export function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
