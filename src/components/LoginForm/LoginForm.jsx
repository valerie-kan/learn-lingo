import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./LoginForm.module.css";

import { LoginSchema } from "../../utils/validationSchemas";
import { loginUser } from "../../utils/authOperations";

import FormModal from "../FormModal/FormModal";
import Input from "../Input/Input";

const LoginForm = ({ isModalOpen, closeModal, setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <FormModal
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
      buttonName="Log In"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      reset={reset}
      authUser={loginUser}
      setIsLoggedIn={setIsLoggedIn}
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
    </FormModal>
  );
};

export default LoginForm;
