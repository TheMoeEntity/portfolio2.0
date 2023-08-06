"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import me from "../../public/images/2.jpg";
import TypeEffect from "./TypeEffect";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hamburger}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.socials}>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://twitter.com/NMoses_"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://instagram.com/NC_Moses"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://wa.me/+2348075489362"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://github.com/TheMoeEntity"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target={`_blank`}
          rel="noopener noreferrer"
          href="https://web.facebook.com/Moses.Nwigberi/"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: "/images/2.jpg", speed: -30 }]}
          className={`aspect-[2/1] ${styles.banner}`}
        ></ParallaxBanner>
      </ParallaxProvider>
      <div className={styles.overlay}>
        <h1 className={styles.name}>I am Moses Nwigberi</h1>
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
