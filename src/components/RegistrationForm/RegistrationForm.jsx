import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./RegistrationForm.module.css";

import { SignUpSchema } from "../../utils/validationSchemas";
import { registerUser } from "../../utils/authOperations";

import Modal from "../Modal/Modal";

const RegistrationForm = ({ isModalOpen, closeModal, setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  return (
    <Modal
      handleSubmit={handleSubmit}
      title="Registration"
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      buttonName="Sign Up"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      register={register}
      errors={errors}
      reset={reset}
      authUser={registerUser}
      setIsLoggedIn={setIsLoggedIn}
    >
      <div>
        <input
          className={css.input}
          type="text"
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <p className={css.errMessage}>{errors.name.message}</p>}
      </div>
    </Modal>
  );
};

export default RegistrationForm;
