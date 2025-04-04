import * as Yup from "yup";

const emailRegexp = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const phoneRegexp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

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

export const BookLessonSchema = Yup.object({
  reason: Yup.string().required("Please choose a reason for learning English!"),
  name: Yup.string()
    .min(6, "Name must be at least 6 letters")
    .max(20, "Name must be at most 20 letters")
    .required("Name is required"),
  email: Yup.string()
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegexp, "Invalid phone number")
    .required("Phone number is required"),
});
