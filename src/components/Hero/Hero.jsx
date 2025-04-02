import css from "./Hero.module.css";

import { ReactSVG } from "react-svg";

import girlImg from "../../assets/images/girl.png";
import laptop from "../../assets/icons/laptop.svg";

export default function Hero() {
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
        <button className={css.startBtn}>Get started</button>
      </div>

      <div className={css.heroImg}>
        <img className={css.girlImg} src={girlImg} alt="Girl" />
        <ReactSVG className={css.laptop} src={laptop} />
      </div>
    </div>
  );
}
