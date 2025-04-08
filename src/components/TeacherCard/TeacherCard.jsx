import { ReactSVG } from "react-svg";
import { useState } from "react";

import css from "./TeacherCard.module.css";

import dotIcon from "../../assets/icons/green-circle.svg";
import bookIcon from "../../assets/icons/book.svg";
import starIcon from "../../assets/icons/star.svg";
import heartIcon from "../../assets/icons/heart.svg";

import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import BookLessonForm from "../BookLessonForm/BookLessonForm";

const TeacherCard = ({ teacher }) => {
  const [showText, setShowText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={css.teacherCard}>
      <div className={css.imgWrapper}>
        <img
          className={css.image}
          src={teacher.avatar_url}
          alt="Teacher photo"
        />
        <ReactSVG className={css.dotIcon} src={dotIcon} />
      </div>
      <div className={css.teacherWrapper}>
        <div className={css.firstRaw}>
          <span className={css.language}>Languages</span>
          <div className={css.genInfo}>
            <p className={css.lessonInfo}>
              <img className={css.teacherIcon} src={bookIcon} />
              Lessons online
            </p>
            <p className={css.lessonInfo}>
              Lessons done: {teacher.lessons_done}
            </p>
            <p className={css.ratingInfo}>
              <img className={css.teacherIcon} src={starIcon} /> Rating:{" "}
              {teacher.rating}
            </p>
            <p className={css.priceInfo}>
              Price / 1 hour:{" "}
              <span className={css.price}>{teacher.price_per_hour}$</span>
            </p>
          </div>
        </div>
        <p className={css.name}>
          {teacher.name} {teacher.surname}
        </p>
        <ReactSVG className={css.heartIcon} src={heartIcon} />

        <TeacherMainInfo
          teacher={teacher}
          setShowText={setShowText}
          showText={showText}
        />

        <div className={css.levels}>
          {teacher.levels.map((level) => (
            <p className={css.level} key={level}>
              #{level}
            </p>
          ))}
        </div>

        {showText && (
          <button
            className={css.bookLessonBtn}
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            Book trial lesson
          </button>
        )}
      </div>
      {isModalOpen && (
        <BookLessonForm
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default TeacherCard;
