import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "../LoginForm/LoginForm.module.css";

import { SignUpSchema } from "../../utils/validationSchemas";
import { registerUser } from "../../redux/auth/operations";

import FormModal from "../FormModal/FormModal";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const RegistrationForm = ({ isModalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        SuccessToast("You are successfully registered!");
        reset();
        closeModal();
      })
      .catch(() => {
        ErrorToast("This email is already registered!");
      });
  };

  return (
    <FormModal
      title="Registration"
      text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
      buttonName="Sign Up"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <div className={css.authWrapper}>
        <div>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            register={register}
            errors={errors}
          />
        </div>

        <div className={css.pwdWrapper}>
          <Input
            type="password"
            placeholder="Password"
            register={register}
            errors={errors}
          />
        </div>
      </div>
    </FormModal>
  );
};

export default RegistrationForm;
