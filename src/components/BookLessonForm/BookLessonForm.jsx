import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./BookLessonForm.module.css";

import { BookLessonSchema } from "../../utils/validationSchemas";

import FormModal from "../FormModal/FormModal";
import Input from "../Input/Input";
import { SuccessToast } from "../../utils/successToast";

const BookLessonForm = ({ isModalOpen, setIsModalOpen, teacher }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(BookLessonSchema) });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = () => {
    SuccessToast(
      "Thank you! Your request was successfully sent to the teacher and you will be contacted soon!"
    );
    closeModal();
  };

  return (
    <FormModal
      title="Book trial lesson"
      text="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit(onSubmit)}
      reset={reset}
    >
      <div className={css.teacherWrapper}>
        <img
          className={css.image}
          src={teacher.avatar_url}
          alt="Teacher photo"
        />
        <div>
          <p className={css.teacherTtl}>Your teacher</p>
          <p className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
      <h3 className={css.reasonTtl}>
        What is your main reason for learning English?
      </h3>
      <div className={css.radioWrapper}>
        <label className={css.reason}>
          <input
            className={css.radioBtn}
            type="radio"
            value="Career and business"
            {...register("reason")}
          />
          Career and business
        </label>
        <label className={css.reason}>
          <input
            className={css.radioBtn}
            type="radio"
            value="Lesson for kids"
            {...register("reason")}
          />
          Lesson for kids
        </label>
        <label className={css.reason}>
          <input
            className={css.radioBtn}
            type="radio"
            value="Living abroad"
            {...register("reason")}
          />
          Living abroad
        </label>
        <label className={css.reason}>
          <input
            className={css.radioBtn}
            type="radio"
            value="Exams and coursework"
            {...register("reason")}
          />
          Exams and coursework
        </label>
        <label className={css.reason}>
          <input
            className={css.radioBtn}
            type="radio"
            value="Culture, travel or hobby"
            {...register("reason")}
          />
          Culture, travel or hobby
        </label>
      </div>
      {errors.reason && (
        <p className={css.errMessage}>{errors.reason.message}</p>
      )}

      <div className={css.userInfo}>
        <div>
          <Input
            type="text"
            placeholder="Full Name"
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
        <div>
          <Input
            type="text"
            placeholder="Phone number"
            name="phone"
            register={register}
            errors={errors}
          />
        </div>
      </div>
      <button className={css.submitBtn} type="submit">
        Book
      </button>
    </FormModal>
  );
};

export default BookLessonForm;
