import css from "./FavouritesModal.module.css";

import FormModal from "../FormModal/FormModal";

export const FavouritesModal = ({
  isModalOpen,
  setIsModalOpen,
  closeModal,
}) => {
  return (
    <FormModal
      text="To add a teacher to your favourites you have to be registered! Please register or log in first"
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      closeModal={closeModal}
    >
      <button className={css.modalBtn} type="button" onClick={closeModal}>
        Got it
      </button>
    </FormModal>
  );
};
