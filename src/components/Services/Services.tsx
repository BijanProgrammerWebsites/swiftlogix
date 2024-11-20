import { ReactElement } from "react";

import styles from "./Services.module.css";
import ServiceCard from "../ServiceCard/ServiceCard.tsx";

export default function Services(): ReactElement {
  return (
    <div className={styles.services}>
      <h2>
        Three main <span className={styles.highlight}>services</span>
      </h2>
      <p>
        Our app gives you unparalleled visibility into your entire logistics
        network. Whether you’re managing a single delivery or overseeing
        thousands, you can track the exact location of every shipment in real
        time.
      </p>
      <div className={styles.card}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
