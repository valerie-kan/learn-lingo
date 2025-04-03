import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import css from "./Authorization.module.css";

import loginIcon from "../../assets/icons/login.svg";
import profileIcon from "../../assets/icons/profile.svg";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

import { getUser, logoutUser } from "../../utils/authOperations";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const Authorization = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const name = await getUser();
        setUserName(name);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
        setIsLoggedIn(false);
      }
    };

    getCurrentUser();
  }, []);

  const onLoginClick = () => {
    setLoginModalOpen(true);
  };

  const onRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const onLogoutClick = () => {
    try {
      logoutUser();
      SuccessToast("You are successfully logged out!");
      setIsLoggedIn(false);
    } catch (error) {
      ErrorToast(
        error.message || "Oops... Something went wrong! Try again later!"
      );
    }
  };

  const closeLoginModal = () => setLoginModalOpen(false);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <>
      <div className={css.authWrapper}>
        {isLoggedIn ? (
          <>
            <div className={css.profileCont}>
              <ReactSVG className={css.profileIcon} src={profileIcon} />
              <p className={css.userName}>{userName}</p>
            </div>
            <button
              className={css.logoutBtn}
              type="button"
              onClick={onLogoutClick}
            >
              Log out
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      {loginModalOpen && (
        <LoginForm
          isModalOpen={loginModalOpen}
          closeModal={closeLoginModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {registerModalOpen && (
        <RegistrationForm
          isModalOpen={registerModalOpen}
          closeModal={closeRegisterModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default Authorization;
