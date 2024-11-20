import { ReactElement } from "react";

import styles from "./Header.module.css";

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <img
        className="logo"
        src="/assets/logos/logo.png"
        alt="Swiftlogix Logo"
      />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Track Shipment</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}
