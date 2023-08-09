"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import me from "../../public/images/2.jpg";
import TypeEffect from "./TypeEffect";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  const [sidebar, setSideBar] = useState<boolean>(false);
  const openSideBar = () => {
    setSideBar(!sidebar);
  };
  const linkAction = (section: string) => {
    setSideBar(false);
    router.push(section);
  };
  return (
    <div className={styles.hero}>
      <div
        style={{ opacity: sidebar ? "0" : "1" }}
        onClick={openSideBar}
        className={styles.hamburger}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div
        style={{ left: sidebar ? "0%" : "-100%" }}
        className={styles.sidecontent}
      >
        <div onClick={() => setSideBar(false)} className={styles.close}>
          &times;
        </div>
        <ul>
          <li onClick={() => linkAction("/")}>
            <i className="fa-solid fa-house"></i> Home
          </li>
          <li onClick={() => linkAction("/#about")}>
            <i className="fa-solid fa-user"></i>About
          </li>
          <li onClick={() => linkAction("/#services")}>
            <i className="fa-solid fa-gear"></i>Services
          </li>
          <li onClick={() => linkAction("/#portfolio")}>
            <i className="fa-solid fa-briefcase"></i>Portfolio
          </li>
          <li onClick={() => linkAction("/#contact")}>
            <i className="fa-solid fa-envelope"></i>Contact
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://twitter.com/NMoses_"
          className={styles.wobble}
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://instagram.com/NC_Moses"
          // className={styles.wobble}
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://wa.me/+2348075489362"
          className={styles.wobble}
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://github.com/TheMoeEntity"
          // className={styles.wobble}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://web.facebook.com/Moses.Nwigberi/"
          className={styles.wobble}
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/me4.jpg", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
        ></ParallaxBanner>
      </ParallaxProvider>
      <div className={styles.overlay}>
        <h1 className={styles.name}> Moses C. Nwigberi</h1>
        <h1 className={styles.type}>
          <TypeEffect />
        </h1>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Hero;
