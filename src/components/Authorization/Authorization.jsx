import css from "./Authorization.module.css";

import { ReactSVG } from "react-svg";

import loginIcon from "../../assets/icons/login.svg";

const Authorization = () => {
  const handleLoginClick = () => {};
  const handleRegisterClick = () => {};
  return (
    <div className={css.authWrapper}>
      <div className={css.loginCont}>
        <ReactSVG className={css.loginIcon} src={loginIcon} />
        {/* <svg
          width="20"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.5h1c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-1M8.333 5.833 12.5 10m0 0-4.167 4.167M12.5 10h-10"
            stroke="var(--laptop-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
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
