import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import css from "./Authorization.module.css";

import loginIcon from "../../assets/icons/login.svg";
import profileIcon from "../../assets/icons/profile.svg";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Logout from "../Logout/Logout";

import { getUser } from "../../utils/authOperations";
import { ErrorToast } from "../../utils/errorToast";

const Authorization = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const name = await getUser();
        setUserName(name);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
        ErrorToast(
          error.message || "Oops... Something went wrong! Try again later!"
        );
      }
    };

    getCurrentUser();
  }, []);

  const toggleModal = (setModalOpen, value) => setModalOpen(value);

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
              onClick={() => toggleModal(setLogoutModalOpen, true)}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <div
              className={css.loginCont}
              onClick={() => toggleModal(setLoginModalOpen, true)}
            >
              <ReactSVG className={css.loginIcon} src={loginIcon} />
              <button className={css.loginBtn} type="button">
                Login
              </button>
            </div>
            <button
              className={css.registerBtn}
              type="button"
              onClick={() => toggleModal(setRegisterModalOpen, true)}
            >
              Registration
            </button>
          </>
        )}
      </div>
      {loginModalOpen && (
        <LoginForm
          isModalOpen={loginModalOpen}
          closeModal={() => toggleModal(setLoginModalOpen, false)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {registerModalOpen && (
        <RegistrationForm
          isModalOpen={registerModalOpen}
          closeModal={() => toggleModal(setRegisterModalOpen, false)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {logoutModalOpen && (
        <Logout
          isModalOpen={logoutModalOpen}
          closeModal={() => toggleModal(setLogoutModalOpen, false)}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </>
  );
};

export default Authorization;
