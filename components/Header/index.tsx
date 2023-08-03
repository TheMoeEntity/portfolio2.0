"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>TheDevMoe</div>
      <div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
