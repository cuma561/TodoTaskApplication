import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <div className="menu">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/todos">Todo Task</NavLink>
      <NavLink to="/category">Category Task</NavLink>
    </div>
  );
}
