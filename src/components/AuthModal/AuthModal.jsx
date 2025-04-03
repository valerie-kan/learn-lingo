import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import css from "./AuthModal.module.css";

import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import closeIcon from "../../assets/icons/close.svg";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

const AuthModal = ({
  handleSubmit,
  title,
  text,
  children,
  buttonName,
  isModalOpen,
  closeModal,
  register,
  errors,
  reset,
  authUser,
  setIsLoggedIn,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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

        <div className={css.authWrapper}>
          {children}
          <div>
            <input
              className={css.input}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className={css.errMessage}>{errors.email.message}</p>
            )}
          </div>

          <div className={css.pwdWrapper}>
            <input
              className={css.input}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
            />
            <span className={css.iconEye} onClick={togglePasswordVisibility}>
              <ReactSVG src={showPassword ? eye : eyeOff} />
            </span>
            {errors.password && (
              <p className={css.errMessage}>{errors.password.message}</p>
            )}
          </div>
        </div>
        <button className={css.submitBtn} type="submit">
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default AuthModal;
