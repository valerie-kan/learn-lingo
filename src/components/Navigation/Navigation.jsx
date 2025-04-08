import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navLink} to="/teachers">
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navLink} to="/favourites">
          Favourites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
