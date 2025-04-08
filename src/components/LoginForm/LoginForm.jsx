import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./LoginForm.module.css";

import { LoginSchema } from "../../utils/validationSchemas";
import { loginUser } from "../../redux/auth/operations";

import FormModal from "../FormModal/FormModal";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const LoginForm = ({ isModalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        SuccessToast("You are successfully logged in!");
        reset();
        closeModal();
      })
      .catch(() => {
        ErrorToast("Email or password is wrong!");
      });
  };

  return (
    <FormModal
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit(onSubmit)}
    >
      <div className={css.authWrapper}>
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
      <button className={css.submitBtn} type="submit">
        Log In
      </button>
    </FormModal>
  );
};

export default LoginForm;
