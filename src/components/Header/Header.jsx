import css from "./Header.module.css";
import logo from "../../../public/ukraine.svg";
import Navigation from "../Navigation/Navigation";
import Authorization from "../Authorization/Authorization";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img width="28" height="28" src={logo} alt="Logo icon" />
        <p className={css.logoText}>LearnLingo</p>
      </div>
      <Navigation />
      <Authorization />
    </header>
  );
};

export default Header;
