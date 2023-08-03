"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import me from "../../public/images/2.jpg";
import TypeEffect from "./TypeEffect";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
const Hero = () => {
  return (
    <div className={styles.hero}>
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
