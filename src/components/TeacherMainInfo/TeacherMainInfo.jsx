import { Link } from "react-router-dom";

import css from "./TeacherMainInfo.module.css";

import HiddenInfo from "../HiddenInfo/HiddenInfo";

const TeacherMainInfo = ({ teacher, showText, setShowText }) => {
  return (
    <>
      <div className={css.mainInfoWrapper}>
        <p className={css.mainInfoTtl}>
          Speaks:{" "}
          {teacher.languages.length === 1 ? (
            <span className={css.languageInfo}>{teacher.languages}</span>
          ) : (
            <span className={css.languageInfo}>
              {teacher.languages[0]}, {teacher.languages[1]}
            </span>
          )}
        </p>
        <p className={css.mainInfoTtl}>
          Lesson Info:{" "}
          <span className={css.mainInfo}>{teacher.lesson_info}</span>
        </p>
        <p className={css.mainInfoTtl}>
          Conditions: <span className={css.mainInfo}>{teacher.conditions}</span>
        </p>
      </div>

      {!showText ? (
        <Link className={css.readMoreLink} onClick={() => setShowText(true)}>
          Read more
        </Link>
      ) : (
        <HiddenInfo teacher={teacher} showText={showText} />
      )}
    </>
  );
};

export default TeacherMainInfo;
