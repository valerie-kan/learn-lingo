import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import css from "./Hero.module.css";

import girlImg from "../../assets/images/girl.png";
import laptop from "../../assets/icons/laptop.svg";
// import { getTeachers } from "../../redux/teachers/operations";
// import { useDispatch } from "react-redux";

export default function Hero() {
  // const dispatch = useDispatch();
  return (
    <div className={css.hero}>
      <div className={css.heroInfo}>
        <h1 className={css.heroTtl}>
          Unlock your potential with the best{" "}
          <span className={css.highlight}>language</span> tutors
        </h1>
        <p className={css.heroText}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link
          className={css.startLink}
          to="/teachers"
          // onClick={() => dispatch(getTeachers())}
        >
          Get started
        </Link>
      </div>

      <div className={css.heroImg}>
        <img className={css.girlImg} src={girlImg} alt="Girl" />
        <ReactSVG className={css.laptop} src={laptop} />
      </div>
    </div>
  );
}
