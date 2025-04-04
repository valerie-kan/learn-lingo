import css from "./Input.module.css";
import { useState } from "react";
import { ReactSVG } from "react-svg";

import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";

const Input = ({ type, placeholder, name = type, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPwdType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <input
        className={css.input}
        type={!isPwdType ? type : showPassword ? "text" : "password"}
        placeholder={placeholder}
        {...register(name)}
      />
      {isPwdType && (
        <span className={css.iconEye} onClick={togglePasswordVisibility}>
          <ReactSVG src={showPassword ? eye : eyeOff} />
        </span>
      )}
      {errors[name] && <p className={css.errMessage}>{errors[name].message}</p>}
    </>
  );
};

export default Input;
