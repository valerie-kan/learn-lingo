import { useForm } from "react-hook-form";
import { LoginSchema } from "../../utils/validationSchemas";
import Modal from "../Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = ({ isModalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      onSubmit={handleSubmit(onSubmit)}
      title="Log In"
      text="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
      buttonName="Log In"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      register={register}
      errors={errors}
    />
  );
};

export default LoginForm;
