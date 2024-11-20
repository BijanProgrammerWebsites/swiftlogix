import { ReactElement } from "react";

import styles from "./Banner.module.css";
import Button from "../Button/Button.tsx";

export default function Banner(): ReactElement {
  return (
    <div className={styles.banner}>
      <div className={styles.writings}>
        <h2>Ready to Revolutionize Your Logistics Operations?</h2>
        <p>
          Join countless other businesses that have streamlined their logistics
          with our cutting-edge solutions
        </p>
        <Button>Get a Free Quote</Button>
      </div>
      <img src="/assets/images/truck.png" alt="" />
    </div>
  );
}
