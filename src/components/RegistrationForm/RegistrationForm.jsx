import css from "./RegistrationForm.module.css";

import { SignUpSchema } from "../../utils/validationSchemas";
import Modal from "../Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const RegistrationForm = ({ isModalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      schema={SignUpSchema}
      onSubmit={handleSubmit(onSubmit)}
      title="Registration"
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      buttonName="Sign Up"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      register={register}
      errors={errors}
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
