import css from "./Statustic.module.css";

const Statistic = () => {
  return (
    <div className={css.statWrapper}>
      <p className={css.statInfo}>
        32,000 +<span className={css.statText}>Experienced tutors</span>
      </p>
      <p className={css.statInfo}>
        300,000 +<span className={css.statText}>5-star tutor reviews</span>
      </p>
      <p className={css.statInfo}>
        120 +<span className={css.statText}>Subjects taught</span>
      </p>
      <p className={css.statInfo}>
        200 +<span className={css.statText}>Tutor nationalities</span>
      </p>
    </div>
  );
};

export default Statistic;
