import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import css from "./LoginForm.module.css";

import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";

import { LoginSchema } from "../../utils/validationSchemas";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <p className={css.errMessage}>{errors.email.message}</p>}

      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password && (
        <p className={css.errMessage}>{errors.password.message}</p>
      )}
      <span onClick={togglePasswordVisibility} className={css.iconEye}>
        <ReactSVG src={showPassword ? eye : eyeOff} />
      </span>

      <button type="submit" className={css.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
