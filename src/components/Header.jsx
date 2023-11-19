import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tarefas</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
