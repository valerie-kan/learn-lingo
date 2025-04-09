import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLink = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink className={buildLink} to="/">
        Home
      </NavLink>
      <NavLink className={buildLink} to="/teachers">
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLink} to="/favourites">
          Favourites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
