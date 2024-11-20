import { ReactElement } from "react";

import styles from "./Hero.module.css";
import Button, { Variant } from "../Button/Button.tsx";

export default function Hero(): ReactElement {
  return (
    <div className={styles.hero}>
      <h1>Effortless Logistics, Every Step of the Way.</h1>
      <p>
        Manage your shipments, track in real-time, and get the best rates—all
        from one platform.
      </p>
      <div className={styles.actions}>
        <Button>Get a Free Quote</Button>
        <Button variant={Variant.OUTLINE}>Learn More</Button>
      </div>
    </div>
  );
}
