import * as Yup from "yup";

const emailRegexp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export const LoginSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    .max(20, "Password must be at most 20 symbols")
    .required("Password is required"),
});

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 letters")
    .max(20, "Name must be at most 20 letters")
    .required("Name is required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 symbols")
    .max(20, "Password must be at most 20 symbols")
    .required("Password is required"),
});
