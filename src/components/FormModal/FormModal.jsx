import { useEffect } from "react";
import { ReactSVG } from "react-svg";

import css from "./FormModal.module.css";

import closeIcon from "../../assets/icons/close.svg";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

const FormModal = ({
  title,
  text,
  children,
  buttonName,
  isModalOpen,
  closeModal,
  handleSubmit,
  reset,
  authUser,
  setIsLoggedIn,
}) => {
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

  const onSubmit = (data) => {
    try {
      authUser(data);
      reset();
      closeModal();
      setIsLoggedIn(true);
      SuccessToast("You are successfully in!");
    } catch (error) {
      if (authUser === "loginUser") {
        ErrorToast(error.message || "Email or password is wrong!");
      } else ErrorToast(error.message || "Email is already registered!");
    }
  };

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.formTitle}>{title}</h2>
        <ReactSVG
          className={css.closeIcon}
          src={closeIcon}
          onClick={closeModal}
        />
        <p className={css.formText}>{text}</p>

        {children}

        <button className={css.submitBtn} type="submit">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default FormModal;
