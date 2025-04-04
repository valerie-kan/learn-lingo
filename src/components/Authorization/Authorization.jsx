import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { useDispatch, useSelector } from "react-redux";

import css from "./Authorization.module.css";

import loginIcon from "../../assets/icons/login.svg";
import profileIcon from "../../assets/icons/profile.svg";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import Logout from "../Logout/Logout";

import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";
import { getUser } from "../../redux/auth/operations";
import { ErrorToast } from "../../utils/errorToast";

const Authorization = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const userName = useSelector(selectUserName);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser()).unwrap();
  }, [dispatch]);

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
        />
      )}
      {registerModalOpen && (
        <RegistrationForm
          isModalOpen={registerModalOpen}
          closeModal={() => toggleModal(setRegisterModalOpen, false)}
        />
      )}
      {logoutModalOpen && (
        <Logout
          isModalOpen={logoutModalOpen}
          closeModal={() => toggleModal(setLogoutModalOpen, false)}
        />
      )}
    </>
  );
};

export default Authorization;
