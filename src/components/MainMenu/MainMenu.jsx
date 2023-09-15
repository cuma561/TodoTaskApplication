import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <ul className="menu">
      <li>
        <NavLink to="/">Homepage</NavLink>
      </li>
      <li>
        <NavLink to="/todos">Todo Task</NavLink>
      </li>
      <li>
        <NavLink to="/category">Category Task</NavLink>
      </li>
    </ul>
  );
}
