import css from "./FirstRow.module.css";

import bookIcon from "../../../assets/icons/book.svg";
import starIcon from "../../../assets/icons/star.svg";

const FirstRow = ({ teacher }) => {
  return (
    <div className={css.firstRow}>
      <span className={css.language}>Languages</span>
      <div className={css.genInfo}>
        <p className={css.lessonInfo}>
          <img className={css.bookIcon} src={bookIcon} />
          Lessons online
        </p>
        <p className={css.lessonInfo}>Lessons done: {teacher.lessons_done}</p>
        <p className={css.ratingInfo}>
          <img className={css.starIcon} src={starIcon} /> Rating:{" "}
          {teacher.rating}
        </p>
        <p className={css.priceInfo}>
          Price / 1 hour:{" "}
          <span className={css.price}>{teacher.price_per_hour}$</span>
        </p>
      </div>
    </div>
  );
};

export default FirstRow;
