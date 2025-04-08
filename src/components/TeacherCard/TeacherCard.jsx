import { ReactSVG } from "react-svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import css from "./TeacherCard.module.css";

import dotIcon from "../../assets/icons/green-circle.svg";
import heartIcon from "../../assets/icons/heart.svg";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { SuccessToast } from "../../utils/successToast";

import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import BookLessonForm from "../BookLessonForm/BookLessonForm";
import { FavouritesModal } from "../FavouritesModal/FavouritesModal";
import FirstRow from "./FirstRow/FirstRow";

const TeacherCard = ({ teacher }) => {
  const [showText, setShowText] = useState(false);
  const [isBookLessonModalOpen, setIsBookLessonModalOpen] = useState(false);
  const [isFavouritesModalOpen, setIsFavouritesModalOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleHeartClick = () => {
    if (!isLoggedIn) {
      setIsFavouritesModalOpen(true);
      return;
    }

    setIsFavourite(!isFavourite);
    if (isFavourite) {
      SuccessToast("The teacher was removed from your favourites!");
    } else {
      SuccessToast("The teacher was added to your favourites!");
    }
  };

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
        <FirstRow teacher={teacher} />
        <p className={css.name}>
          {teacher.name} {teacher.surname}
        </p>
        <ReactSVG
          className={clsx(css.heartIcon, isFavourite && css.isFavourite)}
          src={heartIcon}
          onClick={handleHeartClick}
        />
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
            onClick={() => setIsBookLessonModalOpen(true)}
          >
            Book trial lesson
          </button>
        )}
      </div>
      {isBookLessonModalOpen && (
        <BookLessonForm
          isModalOpen={isBookLessonModalOpen}
          setIsModalOpen={setIsBookLessonModalOpen}
          teacher={teacher}
        />
      )}
      {isFavouritesModalOpen && (
        <FavouritesModal
          isModalOpen={isFavouritesModalOpen}
          setIsModalOpen={setIsFavouritesModalOpen}
          closeModal={() => setIsFavouritesModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TeacherCard;
