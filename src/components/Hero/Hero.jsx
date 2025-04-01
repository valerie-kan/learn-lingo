import css from "./Hero.module.css";

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
        <img className={css.laptop} src={laptop} alt="Laptop" />
        {/* <svg
          width="361"
          height="176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.058 0C3.513 0 .64 2.879.64 6.43v234.391c0 3.551 2.873 6.43 6.418 6.43h346.884c3.545 0 6.418-2.879 6.418-6.43V6.431c0-3.552-2.873-6.431-6.418-6.431H7.058z"
            fill="currentColor"
          />
          <path
            d="M192.091 66.385c0 2.79-.999 5.395-2.99 7.806-2.403 2.866-5.309 4.522-8.46 4.261a8.888 8.888 0 0 1-.064-1.057c0-2.678 1.143-5.545 3.172-7.888 1.013-1.187 2.301-2.173 3.864-2.96 1.559-.776 3.033-1.204 4.42-1.278.018.166.032.332.041.497.011.207.017.414.017.62z"
            fill="#ffffff"
          />
          <path
            d="M202.639 108.742a30.498 30.498 0 0 1-2.939 5.392c-1.545 2.249-2.811 3.805-3.786 4.669-1.512 1.419-3.132 2.146-4.866 2.187-1.245 0-2.747-.362-4.495-1.095-1.754-.73-3.365-1.092-4.839-1.092-1.545 0-3.203.362-4.976 1.092-1.776.733-3.206 1.116-4.3 1.154-1.663.072-3.321-.675-4.976-2.246-1.056-.94-2.377-2.551-3.96-4.834-1.698-2.438-3.094-5.265-4.187-8.488-1.172-3.481-1.759-6.852-1.759-10.116 0-3.738.792-6.963 2.378-9.665 1.246-2.17 2.904-3.882 4.979-5.139a13.193 13.193 0 0 1 6.731-1.938c1.321 0 3.054.417 5.206 1.236 2.147.823 3.526 1.24 4.13 1.24.452 0 1.983-.488 4.579-1.46 2.455-.901 4.527-1.275 6.224-1.128 4.6.379 8.055 2.23 10.353 5.563-4.113 2.543-6.148 6.105-6.107 10.674.037 3.56 1.302 6.522 3.789 8.874a12.443 12.443 0 0 0 3.786 2.534 41.55 41.55 0 0 1-.965 2.586z"
            fill="#ffffff"
          />
          <defs>
            <linearGradient
              id="a"
              x1="180.5"
              y1="0"
              x2="180.5"
              y2="247.251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#295761" />
              <stop offset="1" stop-color="#183E49" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="180.58"
              y1="65.269"
              x2="180.58"
              y2="121.053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CBDED3" />
              <stop offset="1" stop-color="#9EB9AD" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="180.58"
              y1="65.269"
              x2="180.58"
              y2="121.053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CBDED3" />
              <stop offset="1" stop-color="#9EB9AD" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </div>
  );
}
