import css from "./Authorization.module.css";

import loginIcon from "../../assets/icons/login.svg";

const Authorization = () => {
  const handleLoginClick = () => {};
  const handleRegisterClick = () => {};
  return (
    <div className={css.authWrapper}>
      <div className={css.loginCont}>
        <img width="20" height="20" src={loginIcon} />
        <button
          type="button"
          className={css.loginBtn}
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
      <button type="button" onClick={handleRegisterClick}>
        Registration
      </button>
    </div>
  );
};

export default Authorization;
