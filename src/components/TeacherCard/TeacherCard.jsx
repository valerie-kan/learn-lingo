import { ReactSVG } from "react-svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import css from "./TeacherCard.module.css";

import dotIcon from "../../assets/icons/green-circle.svg";
import heartIcon from "../../assets/icons/heart.svg";
import favouriteIcon from "../../assets/icons/heart-active.svg";

import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";
import { getFavourites, saveFavourites } from "../../utils/favourites";

import TeacherMainInfo from "../TeacherMainInfo/TeacherMainInfo";
import BookLessonForm from "../BookLessonForm/BookLessonForm";
import { FavouritesModal } from "../FavouritesModal/FavouritesModal";
import FirstRow from "./FirstRow/FirstRow";

const TeacherCard = ({ teacher, onFavouriteToggle }) => {
  const [showText, setShowText] = useState(false);
  const [isBookLessonModalOpen, setIsBookLessonModalOpen] = useState(false);
  const [isFavouritesModalOpen, setIsFavouritesModalOpen] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const favourites = getFavourites();
    setIsFavourite(favourites.some((item) => item.id === teacher.id));
  }, [teacher.id]);

  const handleHeartClick = () => {
    if (!isLoggedIn) {
      setIsFavouritesModalOpen(true);
      return;
    }

    try {
      const favourites = getFavourites();

      let updatedFavourites;

      if (favourites.some((item) => item.id === teacher.id)) {
        updatedFavourites = favourites.filter((item) => item.id !== teacher.id);
        setIsFavourite(false);
        SuccessToast("The teacher was removed from your favourites!");
      } else {
        updatedFavourites = [...favourites, teacher];
        setIsFavourite(true);
        SuccessToast("The teacher was added to your favourites!");
      }

      saveFavourites(updatedFavourites);

      if (onFavouriteToggle) {
        onFavouriteToggle(updatedFavourites);
      }
    } catch (error) {
      ErrorToast(error.message || "Request failed! Please try again later");
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
        {isFavourite && isLoggedIn ? (
          <ReactSVG
            className={css.isFavourite}
            src={favouriteIcon}
            onClick={handleHeartClick}
          />
        ) : (
          <ReactSVG
            className={css.heartIcon}
            src={heartIcon}
            onClick={handleHeartClick}
          />
        )}
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
