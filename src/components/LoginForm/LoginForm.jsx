import { useForm } from "react-hook-form";
import { LoginSchema } from "../../utils/validationSchemas";
import Modal from "../Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../utils/authOperations";

const LoginForm = ({ isModalOpen, closeModal, setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <Modal
      handleSubmit={handleSubmit}
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
      buttonName="Log In"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      register={register}
      errors={errors}
      reset={reset}
      authUser={loginUser}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default LoginForm;
