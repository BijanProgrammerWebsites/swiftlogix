import { ReactElement } from "react";

import styles from "./Review.module.css";
import Button from "../Button/Button.tsx";

export default function Review(): ReactElement {
  return (
    <div className={styles.review}>
      <div className={styles.void}></div>

      <div className={styles.background}></div>

      <div className={styles.writings}>
        <div className={styles.title}>
          Your Fleet’s Safety, Our Top Priority
        </div>
        <p>
          Regular safety checks and maintenance are part of our commitment to
          keeping your fleet in top condition. Our app schedules and tracks
          inspections, ensuring that every vehicle meets stringent safety
          standards
        </p>
        <img className={styles.quote} src="/assets/images/quote.svg" alt="" />
      </div>

      <img className={styles.van} src="/assets/images/van.png" alt="" />

      <Button className={styles.button}>Get a Free Quote</Button>
    </div>
  );
}
