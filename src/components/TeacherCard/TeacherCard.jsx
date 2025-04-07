import { ReactSVG } from "react-svg";

import css from "./TeacherCard.module.css";

import dotIcon from "../../assets/icons/green-circle.svg";
import bookIcon from "../../assets/icons/book.svg";
import starIcon from "../../assets/icons/star.svg";
import heartIcon from "../../assets/icons/heart.svg";
import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
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
          {/* <div> */}
          <span className={css.language}>Languages</span>

          {/* </div> */}
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
        <div className={css.mainInfoWrapper}>
          <p className={css.mainTtl}>
            Speaks:{" "}
            {teacher.languages === 1 ? (
              <span className={css.languageInfo}>{teacher.languages}</span>
            ) : (
              <span className={css.languageInfo}>
                {teacher.languages[0]}, {teacher.languages[1]}
              </span>
            )}
          </p>
          <p className={css.mainTtl}>
            Lesson Info:{" "}
            <span className={css.mainInfo}>{teacher.lesson_info}</span>
          </p>
          <p className={css.mainTtl}>
            Conditions:{" "}
            <span className={css.mainInfo}>{teacher.conditions}</span>
          </p>
        </div>

        <Link className={css.readMoreBtn} type="button">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
