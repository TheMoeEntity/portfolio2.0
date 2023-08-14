"use client";
import Image from "next/image";
import logo from "../../public/images/logo/vector/default-monochrome-white.svg";
import styles from "../../app/page.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="My logo"
          quality={10}
          width={150}
          priority={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1358px) 100vw, (max-width: 1358px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Header;
