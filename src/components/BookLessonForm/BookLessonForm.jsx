import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import css from "./BookLessonForm.module.css";

import { BookLessonSchema } from "../../utils/validationSchemas";

import FormModal from "../FormModal/FormModal";
import Input from "../Input/Input";

const BookLessonForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(BookLessonSchema) });

  const [bookLessonModalOpen, setBookLessonModalOpen] = useState(false);

  return (
    <FormModal
      title="Book trial lesson"
      text="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
      buttonName="Book"
      isModalOpen={bookLessonModalOpen}
      closeModal={() => setBookLessonModalOpen(false)}
      handleSubmit={handleSubmit}
      reset={reset}
    >
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

      <div className={css.userInfo}>
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          placeholder="Email"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          placeholder="Phone number"
          name="phone"
          register={register}
          errors={errors}
        />
      </div>
    </FormModal>
  );
};

export default BookLessonForm;
