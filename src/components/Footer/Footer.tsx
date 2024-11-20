import { ReactElement } from "react";

import MingcuteFacebookFill from "../../icons/MingcuteFacebookFill.tsx";
import MingcuteYoutubeFill from "../../icons/MingcuteYoutubeFill.tsx";

import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.heading}>
          <div className={styles.logo}>swiftlogix</div>
          <div className={styles.description}>
            We’re here to support you every step of the way
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>Support</div>
          <ul>
            <li>
              <a href="#">Getting Started</a>
            </li>
            <li>
              <a href="#">FAQS</a>
            </li>
            <li>
              <a href="#">Help Articles</a>
            </li>
          </ul>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>Legal</div>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.category}>
          <div className={styles.title}>Services</div>
          <ul>
            <li>
              <a href="#">Shipment Tracking</a>
            </li>
            <li>
              <a href="#">Route Optimization</a>
            </li>
            <li>
              <a href="#">Inventory Management</a>
            </li>
            <li>
              <a href="#">Freight Management</a>
            </li>
            <li>
              <a href="#">Real-Time Analytics</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.extra}>
        <div className={styles.socials}>
          <MingcuteFacebookFill />
          <MingcuteYoutubeFill />
        </div>
        <div className={styles.copyright}>
          Swiftlogix 2024 &copy; All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
