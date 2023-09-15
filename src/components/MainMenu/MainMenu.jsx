import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <ul className="menu">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/todos">Todo Task</NavLink>
      <NavLink to="/category">Category Task</NavLink>
    </ul>
  );
}
