import { ReactSVG } from "react-svg";

import css from "./Modal.module.css";

import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useEffect, useState } from "react";

const Modal = ({
  onSubmit,
  title,
  text,
  children,
  buttonName,
  isModalOpen,
  closeModal,
  register,
  errors,
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
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeModal();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <form className={css.formWrapper} onSubmit={onSubmit}>
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

export default Modal;
