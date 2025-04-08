import { useEffect } from "react";
import { ReactSVG } from "react-svg";

import css from "./FormModal.module.css";

import closeIcon from "../../assets/icons/close.svg";

const FormModal = ({
  title,
  text,
  children,
  isModalOpen,
  closeModal,
  handleSubmit,
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

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <form className={css.formWrapper} onSubmit={handleSubmit}>
        <h2 className={css.formTitle}>{title}</h2>
        <ReactSVG
          className={css.closeIcon}
          src={closeIcon}
          onClick={closeModal}
        />
        <p className={css.formText}>{text}</p>

        {children}
      </form>
    </div>
  );
};

export default FormModal;
