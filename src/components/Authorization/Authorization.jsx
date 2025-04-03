import css from "./Authorization.module.css";

import { ReactSVG } from "react-svg";

import loginIcon from "../../assets/icons/login.svg";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Authorization = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const onLoginClick = () => {
    setLoginModalOpen(true);
  };
  const onRegisterClick = () => {
    // e.preventDefault();
    setRegisterModalOpen(true);
  };

  const closeLoginModal = () => setLoginModalOpen(false);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <div className={css.authWrapper}>
      <div className={css.loginCont} onClick={onLoginClick}>
        <ReactSVG className={css.loginIcon} src={loginIcon} />
        <button className={css.loginBtn} type="button">
          Login
        </button>
      </div>
      <button
        className={css.registerBtn}
        type="button"
        onClick={onRegisterClick}
      >
        Registration
      </button>
      {loginModalOpen && (
        <LoginForm
          isModalOpen={loginModalOpen}
          closeModal={closeLoginModal}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {registerModalOpen && (
        <RegistrationForm
          isModalOpen={registerModalOpen}
          closeModal={closeRegisterModal}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default Authorization;
