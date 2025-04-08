import { ReactSVG } from "react-svg";
import css from "./HiddenInfo.module.css";

import star from "../../assets/icons/star.svg";
import { nanoid } from "nanoid";

const HiddenInfo = ({ teacher }) => {
  return (
    <>
      <div className={css.aboutTeacher}>
        <p className={css.experience}>{teacher.experience}</p>
        {teacher.reviews.map((review) => (
          <div key={nanoid()}>
            <div className={css.imgNameRating}>
              <div className={css.reviewInitial}>
                {review.reviewer_name[0].toUpperCase()}
              </div>
              <div>
                <p className={css.reviewName}>{review.reviewer_name}</p>
                <div className={css.reviewRating}>
                  <ReactSVG src={star} width="16" height="16" />
                  {review.reviewer_rating}.0
                </div>
              </div>
            </div>
            <p className={css.reviewComment}>{review.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HiddenInfo;
