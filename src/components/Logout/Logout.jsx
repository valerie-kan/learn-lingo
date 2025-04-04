import { useEffect } from "react";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";

import css from "./Logout.module.css";

import closeIcon from "../../assets/icons/close.svg";

import { logoutUser } from "../../redux/auth/operations";

import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const Logout = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleClick = () => {
    try {
      dispatch(logoutUser());
      SuccessToast("You are successfully logged out!");
      closeModal();
    } catch (error) {
      ErrorToast(
        error.message || "Oops... Something went wrong! Try again later!"
      );
    }
  };

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.logoutModal}>
        <h2 className={css.formTitle}>Log Out</h2>
        <ReactSVG
          className={css.closeIcon}
          src={closeIcon}
          onClick={closeModal}
        />
        <p className={css.formText}>Are you sure you want to leave?</p>
        <div className={css.btnWrapper}>
          <button type="button" className={css.logoutBtn} onClick={handleClick}>
            Log Out
          </button>
          <button
            type="button"
            className={css.logoutBtn}
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
