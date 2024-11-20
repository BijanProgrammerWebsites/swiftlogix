import { ReactElement } from "react";

import styles from "./Services.module.css";
import ServiceCard from "../ServiceCard/ServiceCard.tsx";
import MingcuteTimeFill from "../../icons/MingcuteTimeFill.tsx";
import MingcuteComputerFill from "../../icons/MingcuteComputerFill.tsx";
import MingcuteChartBarFill from "../../icons/MingcuteChartBarFill.tsx";

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
      <div className={styles.cards}>
        <ServiceCard
          icon={<MingcuteTimeFill />}
          title="Track Every Shipment in Real Time"
          description="Stay updated on your cargo’s exact location with instant tracking notifications"
        />
        <ServiceCard
          icon={<MingcuteComputerFill />}
          title="Automate Route Optimization"
          description="Cut costs and time by letting our AI-driven system optimize delivery routes."
        />
        <ServiceCard
          icon={<MingcuteChartBarFill />}
          title="Detailed Analytics and Reporting"
          description="Make data-driven decisions with comprehensive logistics reports at your fingertips."
        />
      </div>
    </div>
  );
}
