import { useDispatch } from "react-redux";

import css from "./Logout.module.css";

import { logoutUser } from "../../redux/auth/operations";

import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";
import FormModal from "../FormModal/FormModal";

const Logout = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();

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
    <FormModal
      title="Log Out"
      text="Are you sure you want to leave?"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <div className={css.btnWrapper}>
        <button type="button" className={css.modalBtn} onClick={handleClick}>
          Log Out
        </button>
        <button
          type="button"
          className={css.modalBtn}
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </FormModal>
  );
};

export default Logout;
