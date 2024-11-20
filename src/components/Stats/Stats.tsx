import { ReactElement } from "react";

import styles from "./Stats.module.css";

export default function Stats(): ReactElement {
  return (
    <ul className={styles.stats}>
      <li>
        <div className={styles.value}>10,000+</div>
        <div className={styles.label}>Deliveries Managed</div>
      </li>
      <li>
        <div className={styles.value}>2,500+</div>
        <div className={styles.label}>Active Clients</div>
      </li>
      <li>
        <div className={styles.value}>98%</div>
        <div className={styles.label}>On-Time Delivery Rate</div>
      </li>
      <li>
        <div className={styles.value}>200+</div>
        <div className={styles.label}>Industry Awards</div>
      </li>
    </ul>
  );
}
