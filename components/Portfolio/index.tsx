"use client";
import { assets } from "@/Helpers";
import Image from "next/image";
import styles from "../../app/page.module.css";
import me from "../../public/images/dove.png";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2>PORTFOLIO</h2>
      <h3>Some of the projects are from work and some are on my own time.</h3>
      <div className={styles.grid}>
        {assets.map((x, i) => (
          <div key={i}>
            <div className={styles.img}>
              <Image
                src={x.image}
                alt="hero-image"
                fill={true}
                quality={100}
                priority={true}
                sizes="(max-width: 3024px) 100vw, (max-width: 3024px) 50vw, 33vw"
              />
            </div>
            <div className={styles.projectDetails}>
              <div>
                <h3>{x.title} </h3>
                <b>Web /</b> {x.date}
              </div>
              <div className={styles.link}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;