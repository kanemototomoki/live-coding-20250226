import { NavLink } from "react-router";

export default function Top() {
  return (
    <>
      <div className="grid place-items-center h-screen gap-2">
        <nav>
          <ul>
            <li>
              <NavLink to="/buttons">Buttons</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
